'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SponsorshipForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    category: '',
    contactPerson: '',
    designation: '',
    mailingAddress: '',
    tel: '',
    fax: '',
    email: '',
    sponsorship: false,
    exhibition: false,
    advertisement: false,
    amount: '',
    chequeNo: '',
    date: '',
    drawnOn: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setFormData(prev => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally: Add form submission logic
    window.open('/#sponsorship', '_self'); // Redirect to homepage section
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-6 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4">
        Sponsorship / Exhibition / Advertisement Form
      </h2>

      {/* Company Info */}
      <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />

      <div className="flex gap-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="category" value="India" checked={formData.category === 'India'} onChange={handleChange} className="h-5 w-5 text-black focus:ring-0" />
          <span className="text-gray-800">India</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="category" value="Overseas" checked={formData.category === 'Overseas'} onChange={handleChange} className="h-5 w-5 text-black focus:ring-0" />
          <span className="text-gray-800">Overseas</span>
        </label>
      </div>

      <input name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
      <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
      <textarea name="mailingAddress" placeholder="Mailing Address" value={formData.mailingAddress} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" rows={3} />

      {/* Contact Info */}
      <div className="grid grid-cols-3 gap-4">
        <input name="tel" placeholder="Tel" value={formData.tel} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
        <input name="fax" placeholder="Fax" value={formData.fax} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
      </div>

      {/* Checkboxes */}
      <div className="flex gap-4 mt-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="sponsorship" checked={formData.sponsorship} onChange={handleChange} className="h-5 w-5 text-black focus:ring-0" />
          <span className="text-gray-800">Sponsorship</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="exhibition" checked={formData.exhibition} onChange={handleChange} className="h-5 w-5 text-black focus:ring-0" />
          <span className="text-gray-800">Exhibition Stall</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="advertisement" checked={formData.advertisement} onChange={handleChange} className="h-5 w-5 text-black focus:ring-0" />
          <span className="text-gray-800">Advertisement</span>
        </label>
      </div>

      {/* Payment Info */}
      <input name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
      <div className="grid grid-cols-3 gap-4">
        <input name="chequeNo" placeholder="Cheque / DD No" value={formData.chequeNo} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
        <input name="date" placeholder="Date" value={formData.date} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
        <input name="drawnOn" placeholder="Drawn On" value={formData.drawnOn} onChange={handleChange} className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
      </div>

      <button type="submit" className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition">
        Submit and Return to Sponsorship Section
      </button>
    </motion.form>
  );
}