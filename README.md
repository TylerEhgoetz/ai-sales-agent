# ai-sales-agent 
Lightweight AI‑powered sales agent integrating with HubSpot CRM and OpenAI to automate lead outreach, summarize engagement history, and suggest context‑aware next steps.

## Features
- Fetch contacts from HubSpot CRM using the Contacts API
- Retrieve recent engagements (emails, calls, tasks, notes) and summarize conversation history
- Generate personalized email drafts via OpenAI GPT models
- Suggest the next best action based on summarized history
- Update HubSpot records with AI‑generated summaries and next‑step properties
- Searchable, paginated React frontend with inline email editor
- Tailwind CSS styling with custom UI components under `src/ui`


## Prerequisites
- Node.js
- npm or yarn
- HubSpote private app token with scopes:
    - tickets
    - crm.objects.contacts.write
    - e-commerce
    - crm.objects.companies.read
    - crm.objects.deals.read
    - crm.objects.contacts.read
- OpenAI API key and funded account

## Installation
```bash
# Clone the repo
git clone <repo-url>
cd ai-sales-agent

# Install root dependencies
npm install

# Install frontend dependencies
cd client && npm install
```

## Environment Variables
Copy `.env.example` to `.env` in the root directory and set:
```
HUBSPOT_API_KEY=<your_hubspot_private_app_token>
OPENAI_API_KEY=<your_openai_key>
```

## Development

```bash
# From project root\ npm run dev
```

This will start:
- **Express server** on http://localhost:4000
- **React dev server** on http://localhost:3000
