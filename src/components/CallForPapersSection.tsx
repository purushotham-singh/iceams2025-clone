'use client';

import React from 'react';

export default function CallForPapersSection() {
  return (
    <section className="px-6 py-16 bg-white text-gray-900 text-center animate-fade-in-up transition-all duration-700">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight transition-all duration-300 hover:tracking-wide hover:text-gray-700">
        Call for Papers
      </h2>

      <p className="text-sm text-gray-600 uppercase mb-4 tracking-wide animate-fade-in-up delay-200">Abstract submission: closed</p>

      <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto animate-fade-in-up delay-200">
        Full papers will be published in <span className="font-medium">Springer Nature</span> conference proceedings in Physics.
      </p>

      <ul className="text-left max-w-3xl mx-auto space-y-3 text-base text-gray-700 leading-relaxed">
      <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          Special sessions for AI/ML in design, manufacturing, and testing
        </li>
        <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          Plenary and invited talks in each session
        </li>
        <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          Oral and poster presentations across technical themes
        </li>
        <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          Original research papers selected for in-depth discussion
        </li>
        <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          Recognition for best student technical paper and poster presentations
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-neutral-700 mt-12 mb-4">Publications</h3>
      <p className="text-gray-800 max-w-3xl mx-auto text-base leading-relaxed animate-fade-in-up delay-200">
        All accepted papers will appear in <span className="font-medium">Scopus-indexed Springer Proceedings in Physics</span>.
        Selected submissions will also be published in leading journals from <span className="font-medium">Springer</span>, <span className="font-medium">Elsevier</span>, and others.
      </p>

      <h3 className="text-2xl font-semibold text-neutral-700 mt-12 mb-4">Bharat Ratna Dr A P J Abdul Kalam Awards</h3>
      <ul className="text-left max-w-3xl mx-auto space-y-3 text-base text-gray-700 leading-relaxed">
      <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          <span className="font-medium">Category 1:</span> Best student technical paper award (First and Second)
        </li>
        <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          <span className="font-medium">Category 2:</span> Best student poster award (First and Second)
        </li>
        <li className="relative pl-6 group hover:bg-gray-50 hover:rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <span className="absolute left-0 top-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200">●</span>
          Award includes a formal citation and certificate of recognition
        </li>
      </ul>
    </section>
  );
}