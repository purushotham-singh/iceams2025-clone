'use client';
import React, { useState } from 'react';
import { db } from '../lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

export default function RegistrationFormPage() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [paymentMethod, setPaymentMethod] = useState<'cheque' | 'upi'>('cheque');

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
        paymentMethod: formData.get('paymentMethod'),
        chequeNumber: formData.get('chequeNumber'),
        chequeDate: formData.get('chequeDate'),
        bankName: formData.get('bankName'),
        upiId: formData.get('upiId'),
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
      className="min-h-screen bg-white text-gray-900 font-sans px-6 py-16"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          Delegate Registration Form – ICEAMS 2025
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-8">
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Spouse Name */}
            <div>
              <label className="block mb-1 font-semibold">Spouse Name *</label>
              <input
                name="spouseName"
                type="text"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
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
                      className="form-radio h-4 w-4 text-gray-800 focus:ring-0"
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
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Overseas */}
            <div className="flex items-center space-x-2">
              <input
                name="overseas"
                type="checkbox"
                id="overseas"
                className="form-checkbox h-4 w-4 text-gray-800 focus:ring-0"
              />
              <label htmlFor="overseas">Overseas</label>
            </div>

            {/* Organization */}
            <div>
              <label className="block mb-1 font-semibold">Organization</label>
              <input
                name="organization"
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block mb-1 font-semibold">Designation</label>
              <input
                name="designation"
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Mailing Address */}
            <div>
              <label className="block mb-1 font-semibold">Mailing Address</label>
              <textarea
                name="mailingAddress"
                rows={3}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Contact Information */}
            <div>
              <label className="block mb-1 font-semibold">Contact Information</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  name="phone"
                  placeholder="Phone"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <input
                  name="fax"
                  placeholder="Fax"
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
            </div>

            {/* Mode of Payment Selection */}
            <div>
              <label className="block mb-1 font-semibold">Mode of Payment</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cheque"
                    checked={paymentMethod === 'cheque'}
                    onChange={() => setPaymentMethod('cheque')}
                    required
                    className="form-radio h-4 w-4 text-gray-800 focus:ring-0"
                  />
                  <span>Cheque / DD</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                    className="form-radio h-4 w-4 text-gray-800 focus:ring-0"
                  />
                  <span>UPI / Online</span>
                </label>
              </div>
            </div>

            {/* Cheque / DD Details */}
            {paymentMethod === 'cheque' && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold">Cheque / DD No.</label>
                    <input
                      name="chequeNumber"
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Cheque / DD Date</label>
                  <input
                    name="chequeDate"
                    type="date"
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Bank Name & Branch</label>
                  <input
                    name="bankName"
                    type="text"
                    required
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Upload Payment Proof</label>
                  <input
                    name="paymentProof"
                    type="file"
                    accept=".jpg,.png,.pdf"
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* UPI / Online Details */}
            {paymentMethod === 'upi' && (
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold">UPI ID</label>
                  <input
                    name="upiId"
                    type="text"
                    required
                    placeholder="example@bank"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Upload UPI Transaction Screenshot</label>
                  <input
                    name="paymentProof"
                    type="file"
                    accept=".jpg,.png,.pdf"
                    required
                    className="w-full"
                  />
                </div>
              </div>
            )}

            {/* Submit Button & Feedback */}
            <button
              type="submit"
              disabled={status === 'saving'}
              className="mt-6 w-full bg-gray-900 text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              {status === 'saving' ? 'Submitting...' : 'Submit'}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-green-600 text-center text-sm font-medium">Registration submitted successfully!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600 text-center text-sm font-medium">Error submitting registration. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.main>
  );
}