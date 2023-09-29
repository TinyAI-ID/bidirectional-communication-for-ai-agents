# Experiment: Bidirectional Communication for AI Agents

Status quo: POC, discovering the idea.

# Problem Statement:
Current AI agents lack the capability to interact with one another.

# Proposed Solution:
Introduce a message broker to facilitate communication between AI agents.

# Proof of Concept (POC):
For this POC, we've set up a daemon with the following functionalities:

- Listens to the exampleSearchAgent topic on the server.
- Retrieves AI-related details from third-party APIs.
- Possesses the capability to utilize the Search tool.
- Sends the results from the agent back to the server.

# Limitations:
LangChain may not be the optimal solution for this challenge due to its inability to manage:

- Distributed agents
- Distributed tools
- Distributed environments

Furthermore, LangChain has **shortcomings** in the following areas:

- From an agent's viewpoint, there's no way to determine if a tool is operational until its task concludes.
- The outcomes tend to be repetitive.

## Install

```
npm install;
```

## Run

```bash
npm run daemon; # run the example AI agent daemon
```

In another terminal:

```bash
npm start;
```

## API Keys for Demo Purposes

```bash
export OPENAI_API_KEY=sk-xxx
export SERPAPI_API_KEY=xxx
export ABLY_API_KEY=xxx
```

## Example output:

```bash
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Who is Cagatay Cali?',
      log: 'I should search for information about Cagatay Cali.\n' +
        'Action: search\n' +
        'Action Input: "Who is Cagatay Cali?"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956482482,
  id: '-4Qvzwddcy:0:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Who is Cagatay Cali?',
      log: 'This observation does not provide information about Cagatay Cali. I should search again.\n' +
        'Action: search\n' +
        'Action Input: "Who is Cagatay Cali?"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956485897,
  id: '-4Qvzwddcy:1:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali software engineer',
      log: 'This search result is not relevant to Cagatay Cali. I should try a different search query.\n' +
        'Action: search\n' +
        'Action Input: "Cagatay Cali software engineer"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956487486,
  id: '-4Qvzwddcy:2:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali cybersecurity',
      log: 'This search result still does not provide information about Cagatay Cali. I should try a different search query.\n' +
        'Action: search\n' +
        'Action Input: "Cagatay Cali cybersecurity"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956490808,
  id: '-4Qvzwddcy:3:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali JavaScript',
      log: 'This search result is also not relevant to Cagatay Cali. I should try a different search query.\n' +
        'Action: search\n' +
        'Action Input: "Cagatay Cali JavaScript"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956494890,
  id: '-4Qvzwddcy:4:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali open-source projects',
      log: "This search result provides some information about Cagatay Cali's involvement in JavaScript. I should continue searching for more information.\n" +
        'Action: search\n' +
        'Action Input: "Cagatay Cali open-source projects"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956500097,
  id: '-4Qvzwddcy:5:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali express.js',
      log: "This search result provides information about Cagatay Cali's contributions to open-source projects. I should continue searching for more information.\n" +
        'Action: search\n' +
        'Action Input: "Cagatay Cali express.js"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956503262,
  id: '-4Qvzwddcy:6:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali fastify.js',
      log: "This search result provides more information about Cagatay Cali's involvement in express.js. I should continue searching for more information.\n" +
        'Action: search\n' +
        'Action Input: "Cagatay Cali fastify.js"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956507035,
  id: '-4Qvzwddcy:7:0'
}
Received agent action: Message {
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
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali amateur musician',
      log: "This search result provides information about Cagatay Cali's involvement as a windsurf instructor. I should continue searching for more information.\n" +
        'Action: search\n' +
        'Action Input: "Cagatay Cali amateur musician"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956515132,
  id: '-4Qvzwddcy:9:0'
}
Received agent action: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      tool: 'search',
      toolInput: 'Cagatay Cali life goal',
      log: "This search result provides information about Cagatay Cali's involvement as an amateur musician. I should continue searching for more information.\n" +
        'Action: search\n' +
        'Action Input: "Cagatay Cali life goal"'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:action',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956523312,
  id: '-4Qvzwddcy:10:0'
}
Received agent end: Message {
  encoding: null,
  data: {
    name: 'cagatay',
    action: {
      returnValues: [Object],
      log: "This search result provides information about Cagatay Cali's life goal. I now have enough information to answer the original question.\n" +
        '\n' +
        'Final Answer: Cagatay Cali is an innovative software engineer specializing in JavaScript. He is an active contributor to open-source projects, particularly express.js and fastify.js. Outside of the tech world, he is an amateur musician and a windsurf instructor. His life goal is to reach a reliable and sustainable level in his life.'
    },
    runId: 'f87f2a2b-83d3-419e-81f6-ef4823cde6e7'
  },
  name: 'agent:end',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956530264,
  id: '-4Qvzwddcy:11:0'
}
Received response: Message {
  encoding: null,
  data: {
    result: 'Cagatay Cali is an innovative software engineer specializing in JavaScript. He is an active contributor to open-source projects, particularly express.js and fastify.js. Outside of the tech world, he is an amateur musician and a windsurf instructor. His life goal is to reach a reliable and sustainable level in his life.'
  },
  name: 'response',
  connectionId: '-4Qvzwddcy',
  timestamp: 1695956530268,
  id: '-4Qvzwddcy:12:0'
}
```