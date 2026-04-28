import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personalization = () => {
  const [formData, setFormData] = useState({ name: '', age: '', gender: '', issue: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Send formData to your backend (e.g., /api/user/update-profile)
    // 2. On success:
    navigate('/ai-ask'); 
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-purple-50">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Tell us about you</h2>
        <p className="text-slate-500 mb-6">This helps LimerxAI support you better.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Full Name" 
            className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          
          <div className="flex gap-4">
            <input type="number" placeholder="Age" className="w-1/2 p-3 rounded-xl border border-slate-200" />
            <select className="w-1/2 p-3 rounded-xl border border-slate-200 text-slate-500">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <textarea 
            placeholder="Briefly describe what's on your mind..." 
            className="w-full p-3 rounded-xl border border-slate-200 h-32"
          ></textarea>

          <div className="flex flex-col gap-3 pt-4">
            <button type="submit" className="bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-all">
              Continue
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/ai-ask')}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              Skip for now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalization;