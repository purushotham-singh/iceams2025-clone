'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
 
 interface FormState {
   name: string;
   email: string;
   message: string;
 }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name in form) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      console.warn(`Unhandled form field: ${e.target.name}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('📨 Message sent!');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white text-gray-900 py-16 px-6"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-8"
        >
          Contact Us
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
          <input name="email" required type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
          <textarea name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-medium shadow hover:bg-gray-800 transition-all duration-200">Send</button>
          {status && <p className="text-sm text-center text-gray-700 italic">{status}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
}