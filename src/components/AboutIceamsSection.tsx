'use client';

import React from 'react';

export default function AboutIceamsSection() {
  return (
    <section className="px-6 py-20 bg-white text-gray-900">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-semibold tracking-tight text-gray-900">About ICEAMS2025</h2>
      </div>

      {/* Areas of Focus */}
      <div className="max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Areas of Focus</h3>
        <p className="text-base text-gray-600 mb-6">Topics (not restricted):</p>
        <ul className="space-y-4 text-base leading-relaxed text-gray-700 list-none pl-0">
          <li className="relative pl-6 group hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg transition-all duration-300">
            <span className="absolute left-0 text-gray-700">●</span>
            Advanced materials including super alloys, advanced composites viz., PMC, MMC, CMC, C-C-C; high temperature coatings, energy materials & devices, sensors, lightweighting, high entropy alloys, superalloys, steel & concrete
          </li>
          <li className="relative pl-6 group hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg transition-all duration-300">
            <span className="absolute left-0 text-gray-700">●</span>
            Computational design and mechanics of structures
          </li>
          <li className="relative pl-6 group hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg transition-all duration-300">
            <span className="absolute left-0 text-gray-700">●</span>
            Advanced processing technologies including composites processing, additive manufacturing, powder metallurgy
          </li>
          <li className="relative pl-6 group hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg transition-all duration-300">
            <span className="absolute left-0 text-gray-700">●</span>
            Material characterisation, non-destructive testing, product qualification, structural health monitoring
          </li>
          <li className="relative pl-6 group hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg transition-all duration-300">
            <span className="absolute left-0 text-gray-700">●</span>
            Recycling & circular economy
          </li>
          <li className="relative pl-6 group hover:scale-105 hover:shadow-lg hover:bg-gray-100 rounded-lg transition-all duration-300">
            <span className="absolute left-0 text-gray-700">●</span>
            Application of AI & ML in materials, design, manufacturing and testing
          </li>
          <li className="relative pl-6 hover:scale-105 transition-transform duration-200">
            <span className="absolute left-0 text-gray-700">●</span>
            Applications in aerospace, defence, automotive, infrastructure, and other industrial sectors
          </li>
        </ul>
      </div>

      {/* Our Team */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h3>
        <p className="text-base text-gray-800 leading-relaxed">
          Indian Society for Advancement of Materials and Process Engineering (ISAMPE) Hyderabad Chapter and IIT Hyderabad in association with Advanced Systems Laboratory (ASL), DRDO are jointly organising the 1st International Conference and Exhibition on Advanced Materials and Structures (ICEAMS-2025) at IIT Hyderabad, Kandi, Telangana during 2nd to 5th July 2025.
        </p>
      </div>

      {/* Important Dates */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h3>
        <ul className="space-y-3 text-base text-gray-700">
          <li className="flex items-start hover:scale-105 transition-transform duration-200">
            <span className="mr-3 text-gray-700">●</span>
            Abstract submission is <span className="font-medium text-gray-700 ml-1">closed</span>
          </li>
          <li className="flex items-start hover:scale-105 transition-transform duration-200">
            <span className="mr-3 text-gray-700">●</span>
            Notification of acceptance: <span className="font-medium text-gray-900 ml-1">March 15, 2025</span>
          </li>
          <li className="flex items-start hover:scale-105 transition-transform duration-200">
            <span className="mr-3 text-gray-700">●</span>
            Final paper submission by: <span className="font-medium text-gray-900 ml-1">April 30, 2025</span>
          </li>
          <li className="flex items-start hover:scale-105 transition-transform duration-200">
            <span className="mr-3 text-gray-700">●</span>
            Acceptance of paper by: <span className="font-medium text-gray-900 ml-1">May 15, 2025</span>
          </li>
        </ul>
      </div>
    </section>
  );
}