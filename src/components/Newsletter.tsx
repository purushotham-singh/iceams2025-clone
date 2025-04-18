'use client';

import React, { useState } from 'react';
import { db } from '@/lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!email) return;
    setStatus('saving');
    try {
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email,
        subscribedAt: serverTimestamp(),
      });
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Newsletter Sign‑Up</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border rounded px-4 py-2 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        {status === 'saving' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="text-green-600 mt-2">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Failed to subscribe. Try again later.</p>
      )}
    </section>
  );
}