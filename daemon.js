require("dotenv").config();
// This is a example daemon that will be run in the background in the server.
// Uses TinyAI plugin to get the system prompt and knowledge.
// Uses SerpAPI to do a search with LangChain.
// Uses Ably to communicate with the other AI components.

if (!process.env.ABLY_API_KEY) {
  console.log("ABLY_API_KEY not set");
  process.exit(1);
}

if (!process.env.OPENAI_API_KEY) {
  console.log("OPENAI_API_KEY not set");
  process.exit(1);
}

if (!process.env.SERPAPI_API_KEY) {
  console.log("SERPAPI_API_KEY not set");
  process.exit(1);
}

const { OpenAI } = require("langchain/llms/openai");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");
const { SerpAPI } = require("langchain/tools");

const Ably = require("ably");
const ably = new Ably.Realtime.Promise(process.env.ABLY_API_KEY);
const channel = ably.channels.get("experimental");

ably.connection
  .once("connected")
  .then(() => {
    channel.subscribe("exampleSearchAgent", async (message) => {
      const { name, query } = message.data;

      // Gather the system prompt from the TinyAI plugin
      const { systemPrompt, systemKnowledge, data } = await fetch(
        `https://plugin.tinyai.id/get?name=${name}`
      ).then((res) => res.json());

      // DO a RAG. (I did a fake one in the demo.)

      const model = new OpenAI({
        temperature: 0,
        modelName: "gpt-3.5-turbo-16k-0613",
        openAIApiKey: process.env.OPENAI_API_KEY,
      });

      const tools = [
        new SerpAPI(process.env.SERPAPI_API_KEY, {
          location: "Austin,Texas,United States",
          hl: "en",
          gl: "us",
        }),
      ];

      const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: "zero-shot-react-description",
        agentName: name,
        // verbose: true
      });

      // Hacky RAG for demo purposes.
      const result = await executor.run(
        `System Prompt: "${systemPrompt}", System Knowledge: "${systemKnowledge}", Data: "${data}", Query: "${query}": `,
        [
          {
            handleAgentAction(action, runId) {
              channel.publish("agent:action", { name, action, runId });
            },
            handleAgentEnd(action, runId) {
              channel.publish("agent:end", { name, action, runId });
            },
          },
        ]
      );

      channel.publish("response", { result });
    });
  })
  .catch((err) => {
    console.log("Error connecting to Ably:", err);
  });
