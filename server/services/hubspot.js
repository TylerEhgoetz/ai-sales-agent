const axios = require('axios');
const API_KEY = process.env.HUBSPOT_API_KEY;
const BASE_URL = 'https://api.hubapi.com';

async function fetchLeads() {
    const response = await axios.get(`${BASE_URL}/crm/v3/objects/contacts`, {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.data.results.map(lead => ({
        id: lead.id,
        properties: lead.properties
    }));
}

async function updateLead(id, data) {
    await axios.patch(`${BASE_URL}/crm/v3/objects/contacts/${id}`, data, {
        headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' }
    });
}

async function fetchActivities(contactId) {
    const associations = await axios.get(`${BASE_URL}/crm-associations/v1/associations/${contactId}/HUBSPOT_DEFINED/9`, {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    const engagementIds = associations.data.results;
    const activities = await Promise.all(engagementIds.map(async (id) => {
        const response = await axios.get(`${BASE_URL}/engagements/v1/engagements/${id}`, {
            headers: { Authorization: `Bearer ${API_KEY}` }
        });
        return response.data;
    }));
    return activities.map(activity => ({
        id: activity.engagement.id,
        type: activity.engagement.type,
        timestamp: activity.engagement.timestamp,
        active: activity.engagement.active,
        metadata: activity.metadata
    }));

}

module.exports = {
    fetchLeads,
    updateLead,
    fetchActivities
};
