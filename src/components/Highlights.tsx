'use client';
import React from 'react';

const highlights = [
  {
    title: 'Call for Papers',
    description: 'Submit your research in advanced materials, composites, manufacturing, coatings, and more.',
  },
  {
    title: 'Awards',
    description: 'Win best paper awards and prestigious recognitions including Dr. A.P.J. Abdul Kalam Award.',
  },
  {
    title: 'Sponsorship',
    description: 'Opportunities for industry leaders and startups to showcase innovations and support research.',
  },
  {
    title: 'Registration',
    description: 'Register under categories like Student, Faculty, or Industry. Early bird discounts apply.',
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-20 px-6 animate-fade-in-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">Conference Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 animate-fade-in-up hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}