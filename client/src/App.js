import { useState } from 'react';
import LeadList from './components/LeadList';
import LeadSummary from './components/LeadSummary';

function App() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-2xl font-bold mb-6">AI Sales Agent</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <LeadList onSelect={setSelected} />
                </div>
                <div>
                    {selected ? <LeadSummary data={selected} /> : (
                        <div className="text-gray-500">Trigger a lead to see details here.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
