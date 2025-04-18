'use client';
import React, { useState } from 'react';
import { db } from '../lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

export default function RegistrationFormPage() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;       // capture the form element
    setStatus('saving');

    const formData = new FormData(form);
    try {
      await addDoc(collection(db, 'registrations'), {
        name: formData.get('name'),
        spouseName: formData.get('spouseName'),
        category: formData.get('category'),
        membershipNumber: formData.get('membershipNumber'),
        overseas: formData.get('overseas') === 'on',
        organization: formData.get('organization'),
        designation: formData.get('designation'),
        mailingAddress: formData.get('mailingAddress'),
        phone: formData.get('phone'),
        fax: formData.get('fax'),
        email: formData.get('email'),
        modeOfPayment: formData.get('modeOfPayment'),
        createdAt: serverTimestamp()
      });
      setStatus('success');
      form.reset();                     // now safely reset the form
    } catch (error) {
      console.error('Registration submit error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <div className="w-full max-w-2xl mx-auto px-6">
        <div className="bg-gray-100 border border-gray-200 text-gray-800 text-sm rounded-lg px-4 py-3 mb-6">
          <strong className="block font-semibold">BULK REGISTRATION DISCOUNT</strong>
          Bulk registrations (10 and above) may contact organisers for discount.
        </div>
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Delegate Registration Form – ICEAMS 2025
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Spouse Name */}
            <div>
              <label className="block mb-1 font-semibold">Spouse Name *</label>
              <input
                name="spouseName"
                type="text"
                required
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-semibold mb-2">Category</label>
              <div className="flex flex-wrap gap-4">
                {['ISAMPE Member', 'Student', 'Industry/Individuals', 'Academic'].map(option => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="category"
                      value={option}
                      required
                      className="form-radio h-5 w-5 focus:ring-0"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Membership Number */}
            <div>
              <label className="block mb-1 font-semibold">Membership Number</label>
              <input
                name="membershipNumber"
                type="text"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Overseas */}
            <div className="flex items-center space-x-2">
              <input
                name="overseas"
                type="checkbox"
                id="overseas"
                className="form-checkbox h-5 w-5 focus:ring-0"
              />
              <label htmlFor="overseas">Overseas</label>
            </div>

            {/* Organization */}
            <div>
              <label className="block mb-1 font-semibold">Organization</label>
              <input
                name="organization"
                type="text"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block mb-1 font-semibold">Designation</label>
              <input
                name="designation"
                type="text"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Mailing Address */}
            <div>
              <label className="block mb-1 font-semibold">Mailing Address</label>
              <textarea
                name="mailingAddress"
                rows={3}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Contact Information */}
            <div>
              <label className="block mb-1 font-semibold">Contact Information</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  name="phone"
                  placeholder="Phone"
                  className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  name="fax"
                  placeholder="Fax"
                  className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Mode of Payment */}
            <div>
              <label className="block mb-1 font-semibold">Mode of Payment</label>
              <input
                name="modeOfPayment"
                type="text"
                placeholder="Cheque/DD No, Date, Bank"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* UPI & Online Payments */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6 transition"
            >
              <h3 className="text-lg font-semibold mb-2">UPI & Online Payments</h3>
              <p>Name: Convener, ICEAMS 2025</p>
              <p>Account No: 120033088534</p>
              <p>IFSC Code: CNRB0001849</p>
              <p>MICR: 500015032</p>
            </motion.div>

            {/* Submit Button & Feedback */}
            <button
              type="submit"
              disabled={status === 'saving'}
              className="mt-6 w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              {status === 'saving' ? 'Submitting...' : 'Submit Registration'}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-green-600 text-center">
                Registration submitted successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600 text-center">
                Error submitting registration. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.main>
  );
}