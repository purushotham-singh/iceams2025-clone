'use client';
import React, { useState } from 'react';
import { db } from '@/lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

export default function ContactUsForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await addDoc(collection(db, 'contact_us'), {
        name: data.get('name'),
        email: data.get('email'),
        subject: data.get('subject'),
        message: data.get('message'),
        phone: data.get('phone') || '',
        submittedAt: serverTimestamp(),
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus('error');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block mb-1 font-semibold text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Subject"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message..."
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-semibold text-gray-700">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone (optional)"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {/* Feedback */}
        {status === 'success' && (
          <p className="mt-4 text-green-600 text-center">Your message has been sent!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </motion.section>
  );
}