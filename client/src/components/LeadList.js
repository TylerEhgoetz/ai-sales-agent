import React, { useState, useEffect } from 'react';
import LeadTrigger from './LeadTrigger';
import { Input } from '../ui/input';

export default function LeadList({ onSelect }) {
    const [leads, setLeads] = useState([]);
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(0);
    const perPage = 10;

    useEffect(() => {
        fetch('/api/leads')
            .then(res => res.json())
            .then(setLeads);
    }, []);

    const filtered = leads.filter(l =>
        `${l.properties.firstname} ${l.properties.lastname}`
            .toLowerCase()
            .includes(filter.toLowerCase())
    );
    const pageCount = Math.ceil(filtered.length / perPage);
    const slice = filtered.slice(page * perPage, (page + 1) * perPage);

    return (
        <div className="space-y-4">
            <Input
                placeholder="Search leads..."
                value={filter}
                onChange={e => { setFilter(e.target.value); setPage(0); }}
                className="max-w-md"
            />
            <div className="flex flex-col gap-2">
                {slice.map(lead => (
                    <LeadTrigger key={lead.id} lead={lead} onTrigger={onSelect} />
                ))}
            </div>
            <div className="flex space-x-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`px-3 py-1 rounded-md $\{i === page ? 'bg-blue-600 text-white' : 'bg-gray-200'\}`}
                    >{i + 1}</button>
                ))}
            </div>
        </div>
    );
}
