'use client';

import React from 'react';

export default function CallForPapersSection() {
  return (
    <section className="px-6 py-28 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 backdrop-blur-lg bg-opacity-50 rounded-3xl shadow-2xl font-sans select-none">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-6xl font-semibold text-gray-900 mb-10 tracking-tight drop-shadow-lg transition-all duration-300 hover:tracking-wider hover:text-gray-800">
        Call for Papers
      </h2>

      <p className="text-sm text-gray-500 uppercase mb-6 tracking-widest italic animate-fade-in-up delay-200">Abstract submission: closed</p>

      <p className="text-2xl text-gray-800 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200 font-medium leading-relaxed">
        Full papers will be published in <span className="font-medium">Springer Nature</span> conference proceedings in Physics.
      </p>

      <div className="flex justify-center">
        <ul className="text-left max-w-3xl space-y-6 text-xl text-gray-700 leading-relaxed">
          <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
            <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
            <p className="text-left text-gray-700">Special sessions for AI/ML in design, manufacturing, and testing</p>
          </li>
          <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
            <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
            <p className="text-left text-gray-700">Plenary and invited talks in each session</p>
          </li>
          <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
            <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
            <p className="text-left text-gray-700">Oral and poster presentations across technical themes</p>
          </li>
          <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
            <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
            <p className="text-left text-gray-700">Original research papers selected for in-depth discussion</p>
          </li>
          <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
            <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
            <p className="text-left text-gray-700">Recognition for best student technical paper and poster presentations</p>
          </li>
        </ul>
      </div>

      <h3 className="text-4xl font-semibold text-gray-800 mt-20 mb-8 text-center">Bharat Ratna Dr A P J Abdul Kalam Awards</h3>
      <div className="flex justify-center">
      <ul className="text-left max-w-3xl space-y-6 text-xl text-gray-700 leading-relaxed">
      <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
          <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
          <p className="text-left text-gray-700">
            <span className="font-medium">Category 1:</span> Best student technical paper award (First and Second)
          </p>
        </li>
        <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
          <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
          <p className="text-left text-gray-700">
            <span className="font-medium">Category 2:</span> Best student poster award (First and Second)
          </p>
        </li>
        <li className="group flex items-start gap-3 hover:bg-gray-100 hover:rounded-xl hover:scale-105 transition-all duration-300 ease-in-out px-4 py-2">
          <span className="text-gray-400 group-hover:text-black text-lg pt-1">●</span>
          <p className="text-left text-gray-700">
            Award includes a formal citation and certificate of recognition
          </p>
        </li>
      </ul>
      </div>

      <h3 className="text-4xl font-semibold text-gray-800 mt-20 mb-8">Publications</h3>
      <p className="text-gray-800 max-w-3xl mx-auto text-lg leading-relaxed animate-fade-in-up delay-200 font-medium">
        All accepted papers will appear in <span className="font-medium">Scopus-indexed Springer Proceedings in Physics</span>.
        Selected submissions will also be published in leading journals from <span className="font-medium">Springer</span>, <span className="font-medium">Elsevier</span>, and others.
      </p>
      </div>
    </section>
  );
}