/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';

export default function RegistrationDetails() {
  return (
    <>
      {/* Section Title */}
      <section className="w-full bg-white text-gray-900 py-12 px-4 animate-fade-in-up text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Registration Details
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Please complete your registration by the deadline to secure your spot.
        </p>
      </section>

      {/* Fees List */}
      <section className="w-full bg-gray-50 text-gray-900 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <ul className="list-disc list-inside text-left space-y-3 text-lg md:text-xl">
            <li><strong>ISAMPE Members:</strong> ₹8,000</li>
            <li><strong>Academic Faculty:</strong> ₹6,000</li>
            <li><strong>Students:</strong> ₹4,000</li>
            <li><strong>Others:</strong> ₹10,000</li>
            <li><strong>Foreign Participants:</strong> USD 150</li>
          </ul>

          <p className="mt-6 text-gray-700 text-base">
            <strong>Last date for registration:</strong> 15 June 2025
          </p>
          <p className="mt-2 text-gray-700 text-base">
            <strong>Includes:</strong> Conference access, inauguration, valedictory session, plenary & invited talks, lunch/dinner, and delegate kit.
          </p>

          {/* Payment Instructions */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Instructions</h3>
            <p className="text-gray-700 mb-2">
              Payment accepted via bank transfer, online transfer, or demand draft drawn in favour of:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Account Name:</strong> Convener, ICEAMS2025</li>
              <li><strong>Account No.:</strong> 120033088534</li>
              <li><strong>IFSC Code:</strong> CNRB0001849</li>
              <li><strong>Bank:</strong> Canara Bank, Kanchanbagh, Hyderabad 500059</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <a
              href="/registration"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-800 transition-all duration-200"
            >
              Fill Out Registration Form
            </a>
          </div>
        </div>
      </section>
    </>
  );
}