const express = require('express');
const router = express.Router();
const { fetchLeads, updateLead, fetchActivities } = require('../services/hubspot');
const { generateEmail, generateIntroEmail, summarizeEngagements, suggestNextStep } = require('../services/openai');

router.get('/', async (req, res) => {
    const leads = await fetchLeads();
    res.json(leads);
});

router.post('/:id/trigger', async (req, res) => {
    const { id } = req.params;
    const { profile } = req.body;
    const engagements = await fetchActivities(id);
    let email, summary, nextStep;

    if (engagements && engagements.length > 0) {
        summary = await summarizeEngagements(engagements);
        nextStep = await suggestNextStep(summary);
        email = await generateEmail(profile, nextStep);
    } else {
        summary = 'We recommend sending an introductory email to this lead.';
        nextStep = 'There\'s no email history to summarize. I suggest you send an introductory email!';
        email = await generateIntroEmail(profile);
    }

    await updateLead(id, { properties: { email_history_summary: summary, next_steps_ideas: nextStep } });
    res.json({ email, summary, nextStep });
});

module.exports = router;
