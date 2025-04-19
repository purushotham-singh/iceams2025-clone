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
    <section className="relative px-6 py-32 bg-gradient-to-b from-white via-zinc-50 to-white text-gray-900 font-sans text-center backdrop-blur-2xl rounded-3xl shadow-2xl select-none overflow-hidden">
      <h2 className="text-6xl font-black text-black drop-shadow-md mb-12 tracking-tight">
        Newsletter Sign‑Up
      </h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-200 rounded-2xl px-6 py-4 mb-8 w-full max-w-md mx-auto shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 bg-white/80 backdrop-blur-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-[#0A84FF] hover:to-[#0060DF] hover:text-white transition-all duration-300 hover:scale-105"
      >
        {status === 'saving' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && <p className="text-green-600 mt-8 text-lg font-semibold">Thanks for subscribing!</p>}
      {status === 'error' && <p className="text-red-600 mt-8 text-lg font-semibold">Failed to subscribe. Try again later.</p>}
    </section>
  );
}
