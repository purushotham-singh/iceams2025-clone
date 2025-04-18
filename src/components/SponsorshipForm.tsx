'use client';

import React, { useState } from 'react';
import { db } from '@/lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

export default function SponsorshipForm() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('saving');

    const data = new FormData(form);
    try {
      await addDoc(collection(db, 'sponsorships'), {
        companyName: data.get('companyName'),
        country: data.get('country'),
        contactPerson: data.get('contactPerson'),
        designation: data.get('designation'),
        mailingAddress: data.get('mailingAddress'),
        phone: data.get('phone'),
        fax: data.get('fax'),
        email: data.get('email'),
        options: {
          sponsorship: !!data.get('optionSponsorship'),
          exhibition: !!data.get('optionExhibition'),
          advertisement: !!data.get('optionAdvertisement'),
        },
        amount: data.get('amount'),
        chequeNumber: data.get('chequeNumber'),
        chequeDate: data.get('chequeDate'),
        drawnOn: data.get('drawnOn'),
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Sponsorship submit error:', err);
      setStatus('error');
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <div className="w-full max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Sponsorship / Exhibition / Advertisement Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="companyName" placeholder="Company Name" required className="w-full border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />

          <div className="flex items-center gap-6">
            <label className="text-black"><input type="radio" name="country" value="India" required /> India</label>
            <label className="text-black"><input type="radio" name="country" value="Overseas" /> Overseas</label>
          </div>

          <input name="contactPerson" placeholder="Contact Person" required className="w-full border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          <input name="designation" placeholder="Designation" className="w-full border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          <textarea name="mailingAddress" rows={3} placeholder="Mailing Address" className="w-full border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"></textarea>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="phone" placeholder="Tel" className="border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <input name="fax" placeholder="Fax" className="border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <input name="email" placeholder="Email" type="email" required className="border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>

          <div className="flex gap-4">
            <label className="text-black"><input type="checkbox" name="optionSponsorship" /> Sponsorship</label>
            <label className="text-black"><input type="checkbox" name="optionExhibition" /> Exhibition Stall</label>
            <label className="text-black"><input type="checkbox" name="optionAdvertisement" /> Advertisement</label>
          </div>

          <input name="amount" placeholder="Amount" className="w-full border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="chequeNumber" placeholder="Cheque / DD No" className="border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <input name="chequeDate" type="date" className="border px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-400" />
            <input name="drawnOn" placeholder="Drawn On" className="border px-4 py-2 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400" />
          </div>

          <button
            type="submit"
            disabled={status === 'saving'}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            {status === 'saving' ? 'Submitting...' : 'Submit and Return to Sponsorship Section'}
          </button>

          {status === 'success' && <p className="text-green-600 text-center">Submission received!</p>}
          {status === 'error' && <p className="text-red-600 text-center">There was an error. Please try again.</p>}
        </form>
      </div>
    </motion.main>
  );
}
