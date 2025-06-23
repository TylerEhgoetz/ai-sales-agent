const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateIntroEmail(profile) {
    const prompt = `Write a professional friendy intro email to ${profile.name}, ${profile.jobTitle} at ${profile.company}.`
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message.content.trim();
}

async function generateEmail(profile, nextStep) {
    const prompt = `Write a professional follow-up email to ${profile.name}, ${profile.jobTitle} at ${profile.company}. The next step is: ${nextStep}`;
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message.content.trim();
}

async function summarizeEngagements(history) {
    const formattedHistory = history.map(engagement => {
        return `Type: ${engagement.type}\nDate: ${new Date(engagement.timestamp).toLocaleDateString()}\nDetails: ${JSON.stringify(engagement.metadata, null, 2)}`;
    });
    const prompt = `Summarize the following email history:\n\n${formattedHistory.join('\n\n')}`;
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message.content.trim();
}

async function suggestNextStep(context) {
    const prompt = `Based on this context, suggest the next step:\n\n${context}`;
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
    });
    return response.choices[0].message.content.trim();
}

module.exports = {
    generateIntroEmail,
    generateEmail,
    summarizeEngagements,
    suggestNextStep
};
