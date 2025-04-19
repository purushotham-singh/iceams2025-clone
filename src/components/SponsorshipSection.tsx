'use client';
import React from 'react';

export function SponsorshipSection() {
  const tiers = [
    { label: 'Co-host', amount: '₹1,000,000' },
    { label: 'Diamond Sponsors', amount: '₹500,000' },
    { label: 'Platinum Sponsors', amount: '₹400,000' },
    { label: 'Gold Sponsors', amount: '₹300,000' },
    { label: 'Silver Sponsors', amount: '₹200,000' },
  ];

  return (
    <section id="sponsorship" className="w-full bg-white text-gray-900 py-16 px-6 text-center animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Sponsorship Opportunities</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {tiers.map(({ label, amount }) => (
          <div
            key={label}
            className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-lg transition"
          >
            <p className="text-lg font-medium">
              <strong>{label}:</strong> {amount}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <p>Industry interested in sponsoring may please contact the convener.</p>
        <p>
          Contact for info:{' '}
          <a href="tel:09441426860" className="underline hover:text-gray-700 transition">
            09441426860
          </a>
        </p>
      </div>
      <div className="mt-6">
        <a
          href="/sponsorship-form"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
        >
          Register Here
        </a>
      </div>
    </section>
  );
}
