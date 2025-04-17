'use client';
import React from 'react';

export function SponsorshipSection() {
  return (
    <section id="sponsorship" className="w-full bg-white text-gray-900 py-16 px-6 animate-fade-in-up text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">SPONSORSHIP OPPORTUNITY</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {[
          { label: 'Co-host', amount: '₹1,000,000' },
          { label: 'Diamond sponsors', amount: '₹500,000' },
          { label: 'Platinum sponsors', amount: '₹400,000' },
          { label: 'Gold sponsors', amount: '₹300,000' },
          { label: 'Silver sponsors', amount: '₹200,000' },
        ].map(({ label, amount }) => (
          <div
            key={label}
            className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <p className="text-lg font-medium text-gray-800">
              <strong>{label}</strong>: {amount}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p>Industry interested to sponsor may please contact the convener.</p>
        <p>Contact for info: <a href="tel:09441426860" className="text-gray-900 underline hover:text-gray-700 transition-colors duration-200">09441426860</a></p>
      </div>
      <div className="mt-6">
        <a
          href="/sponsorship-form"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition-all duration-200"
        >
          Register here
        </a>
      </div>
    </section>
  );
}