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
    <section id="sponsorship" className="w-full bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 py-28 px-6 text-center font-sans backdrop-blur-lg rounded-3xl shadow-2xl animate-fade-in-up">
      <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 drop-shadow-lg mb-12">
        Sponsorship Opportunities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center">
        {tiers.map(({ label, amount }) => {
          return (
            <div
              key={label}
              className={`group relative overflow-hidden p-8 border border-gray-200 bg-transparent rounded-2xl transition-all duration-700 transform hover:scale-[1.03]`}
            >
              <div className={`absolute inset-0 z-0 rounded-2xl bg-transparent transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:blur-sm group-hover:opacity-100 ${
                label === 'Co-host'
                  ? 'group-hover:bg-yellow-100'
                  : label === 'Diamond Sponsors'
                  ? 'group-hover:bg-blue-100'
                  : label === 'Platinum Sponsors'
                  ? 'group-hover:bg-gray-100'
                  : label === 'Gold Sponsors'
                  ? 'group-hover:bg-yellow-50'
                  : label === 'Silver Sponsors'
                  ? 'group-hover:bg-gray-50'
                  : ''
              }`}></div>
              <div className="relative z-10">
                <p className="text-xl font-medium text-gray-900">
                  <strong>{label}:</strong> {amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 space-y-4 text-lg text-gray-700 leading-relaxed">
        <p>Industry interested in sponsoring may please contact the convener.</p>
        <p>
          Contact for info:{' '}
          <a
            href="tel:09441426860"
            className="text-gray-900 hover:text-black hover:font-semibold transition-colors duration-300"
          >
            09441426860
          </a>
        </p>
      </div>
      <div className="mt-6 text-center">
        <a
          href="/sponsorship-form"
          target="_blank"
          className="inline-block bg-black text-white px-10 py-4 rounded-full text-xl font-semibold shadow-md hover:bg-green-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 no-underline hover:no-underline"
        >
          Register Here
        </a>
      </div>
    </section>
  );
}
