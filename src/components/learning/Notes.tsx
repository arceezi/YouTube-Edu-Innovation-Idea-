import React, { useState } from 'react';
import { SaveIcon } from 'lucide-react';
export const Notes: React.FC = () => {
  const [notes, setNotes] = useState<string>('');
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  return <div className="flex flex-col h-full">
      <div className="text-sm text-gray-300 mb-4">
        Take notes while watching the video. Notes are automatically saved with
        timestamps.
      </div>
      <div className="flex-1 mb-4">
        <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Start taking notes here..." className="w-full h-64 bg-[#212121] border border-[#303030] rounded-lg p-4 text-white resize-none focus:outline-none focus:border-[#FF0000]"></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-300">
          {saved && <span className="text-green-500">Notes saved!</span>}
        </div>
        <button onClick={handleSave} className="px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg flex items-center">
          <SaveIcon size={16} className="mr-2" />
          Save Notes
        </button>
      </div>
    </div>;
};