import React, { useState } from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function LeadSummary({ data }) {
    const [editedEmail, setEditedEmail] = useState(data.email);
    return (
        <div className="mt-6 space-y-4 p-4 border rounded-lg bg-white shadow">
            <h2 className="text-xl font-semibold">Generated Email</h2>
            <Textarea
                value={data.email}
                onChange={e => setEditedEmail(data.email)}
                rows={6}
                className="w-full"
            />
            <Button onClick={() => console.log('Send:', editedEmail)}>Send Email</Button>
            <h2 className="text-lg font-medium">Summary</h2>
            <p className="text-gray-700">{data.summary}</p>
            <h2 className="text-lg font-medium">Next Step</h2>
            <p className="text-gray-700">{data.nextStep}</p>
        </div>
    );
}
