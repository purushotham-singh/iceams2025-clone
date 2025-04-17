'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function RegistrationFormPage() {
  const router = useRouter();

 
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Optionally validate or send to backend here
      alert('Registration Submitted Successfully ✅');
      router.push('/'); // Redirect to homepage
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
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Spouse Name *</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" required />
            </div>

            <div>
              <label className="block font-semibold mb-2">Category</label>
              <div className="flex flex-wrap gap-4">
                {['ISAMPE Member', 'Student', 'Industry/Individuals', 'Academic'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="category" value={option} className="form-radio h-5 w-5 text-gray-700 focus:ring-0" required />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Membership Number</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="overseas" className="form-checkbox h-5 w-5 text-gray-700 focus:ring-0" />
              <label htmlFor="overseas">Overseas</label>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Organization</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Designation</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Mailing Address</label>
              <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" rows={3}></textarea>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Contact Information</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input name="phone" placeholder="Phone" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" />
                <input name="fax" placeholder="Fax" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" />
                <input name="email" placeholder="Email" type="email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Mode of Payment</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 transition" placeholder="Cheque/DD No, Date, Bank" />
            </div>

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

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </motion.main>
  );
}