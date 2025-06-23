import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

export default function LeadTrigger({ lead, onTrigger }) {
    const [loading, setLoading] = useState(false);
    const handle = async () => {
        setLoading(true);
        const res = await fetch(`/api/leads/${lead.id}/trigger`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ profile: lead }),
        });
        const data = await res.json();
        setLoading(false);
        onTrigger(data);
    };

    return (
        <div className="flex items-center justify-between p-2 border rounded hover:shadow-sm">
            <span className="font-medium text-gray-800">
                {lead.properties.firstname} {lead.properties.lastname}
            </span>
            <Button disabled={loading} onClick={handle}>
                {loading ? <Spinner size="sm" /> : 'Trigger'}
            </Button>
        </div>
    );
}
