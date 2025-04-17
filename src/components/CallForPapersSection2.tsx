'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function CallForPapersSection2() {
  return (
    <motion.section
      id="call-for-papers"
      className="px-6 py-20 bg-white text-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-gray-900 text-center mb-8 transition-transform duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        CALL FOR PAPERS
      </motion.h2>
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700 mb-6 leading-relaxed transition-colors duration-200 hover:text-gray-900">
          Full paper submission deadline: 30 April 2025
        </p>
        <p>
          Authors are requested to submit their full papers of their original research work as well as review papers written in English by email to:
          <br />
          <a href="mailto:iceams2025@gmail.com" className="text-gray-900 underline hover:text-gray-700 transition-colors duration-200">iceams2025@gmail.com</a>,{' '}
          <a href="mailto:convener@iceams2025.in" className="text-gray-900 underline hover:text-gray-700 transition-colors duration-200">convener@iceams2025.in</a>
        </p>
        <p className="text-lg font-medium text-gray-700 mb-6 leading-relaxed transition-colors duration-200 hover:text-gray-900">
          Note: Selected papers will be published in Scopus indexed journals
        </p>
        <p className="text-lg font-medium text-gray-700 mb-6 leading-relaxed transition-colors duration-200 hover:text-gray-900">
          Message us on WhatsApp<br />
          <strong>ICEAMS2025</strong><br />
          ISAMPE Hyderabad C/o TIC, ASL, Kachanbagh PO 500058
        </p>
      </div>
    </motion.section>
  );
}