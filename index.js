require('dotenv').config()
// Ably is a realtime messaging service that allows you to:
// Publish and subscribe to messages in channels.
if (!process.env.ABLY_API_KEY) {
  console.log("ABLY_API_KEY not set");
  process.exit(1);
}

// ABLY USED FOR DEMO PURPOSES
const Ably = require("ably");
const ably = new Ably.Realtime.Promise(process.env.ABLY_API_KEY);
const channel = ably.channels.get("experimental");

(async () => {
    await ably.connection.once("connected");

    channel.publish("exampleSearchAgent", {
        name: "cagatay",
        query: "Who is Cagatay Cali?",
    });

    // Listen for agent actions and end events
    channel.subscribe('agent:action', (message) => {
        console.log('Received agent action:', message);
        /**
         * Received agent action: Message {
            encoding: null,
            data: {
                name: 'cagatay',
                action: {
                tool: 'search',
                toolInput: 'Cagatay Cali windsurf instructor',
                log: "This search result provides more information about Cagatay Cali's involvement in fastify.js. I should continue searching for more information.\n" +
                    'Action: search\n' +
                    'Action Input: "Cagatay Cali windsurf instructor"'
                },
                runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
            },
            name: 'agent:action',
            connectionId: '-4Qvzwddcy',
            timestamp: 1695956510882,
            id: '-4Qvzwddcy:8:0'
            }
         */
    });

    channel.subscribe('agent:end', (message) => {
        console.log('Received agent end:', message);
    });

    // Listen for responses
    channel.subscribe("response", (message) => {
        console.log("Received response:", message);
    });
})();