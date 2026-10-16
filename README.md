
# 🚀 AURORA-7 Mission Assistant

An AI-powered space mission assistant built using **Botpress**. It helps users explore mission status, understand resource levels, and receive decision-support recommendations through natural language conversations.

## 🌌 Project Overview

AURORA-7 simulates a spacecraft mission-control assistant. Users can ask questions about mission resources, equipment issues, and possible decisions.

The assistant uses a mission report, AI-generated responses, and a decision-recording workflow to organize mission information.

## ✨ Features

- 📊 Mission resource status reporting
- 🤖 Natural language question answering
- ⚡ Mission decision-support recommendations
- 📝 Decision record generation
- 💬 Interactive conversational workflow
- 🌐 Shareable Botpress chatbot

## 📡 Simulated Mission Status

The following values are example data used in the prototype.

| Resource | Level |
|---|---:|
| Oxygen | 71% |
| Main Reactor Power | 61% |
| Backup Power | 88% |
| Thruster Fuel | 54% |
| Mission Status | NORMAL |

> These values are mock data for demonstration, not live spacecraft telemetry.

## 🛠️ Technology Stack

- Botpress Studio
- JavaScript
- AI Task workflows
- GitHub

## 🧠 How It Works

1. The workflow generates a mission status report.
2. Users ask questions in natural language.
3. The AI Task generates responses based on available mission information.
4. Decision-related responses can be recorded in a mission decision log.
5. Unconfirmed outcomes are marked as pending confirmation.

## 📁 Project Structure

```text
aurora-7-mission-assistant/
├── README.md
└── mission-report.js
```

Additional files can be added as the project develops.

## 🚀 Live Demo

**Botpress chatbot:** [PASTE YOUR PUBLIC BOTPRESS LINK HERE]

## 💻 Run the Mission Report Example

Make sure Node.js is installed, then run:

```bash
node mission-report.js
```

This runs the standalone JavaScript mission-report example included in this repository. It does not launch the Botpress chatbot.

## 🔮 Future Improvements

- Dynamic mission resource updates
- More detailed mission decision logs
- Mission history and audit trail
- Improved error handling and validation
- Integration with external telemetry data

## ⚠️ Disclaimer

AURORA-7 is an educational simulation and demonstration project. Its mission data and recommendations should not be used for real spacecraft operations.

## 👨‍💻 Author

Project developed as an AI-powered mission-assistant prototype.



## 💬 Interactive Chat Experience

AURORA-7 provides an interactive conversational experience:

1. **Ask any question:** Users can ask the mission assistant questions in natural language.
2. **Greeting and response:** The bot responds conversationally, using a greeting where appropriate, and answers the user's question.
3. **Continuous conversation:** After responding, the bot returns to its question-answering flow so users can ask another question.
4. **Ask follow-up questions:** Users can continue exploring mission status, resources, equipment issues, and decision-support recommendations in the same chat session.

The conversation loop keeps the assistant ready for the next question instead of ending after a single response.






https://cdn.botpress.cloud/webchat/v3.7/shareable.html?configUrl=https://files.bpcontent.cloud/2026/10/16/15/20261016150659-FJ0J4DF5.json
