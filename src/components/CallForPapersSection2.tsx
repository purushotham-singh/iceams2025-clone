'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function CallForPapersSection2() {
  return (
    <motion.section
      id="call-for-papers"
      className="relative px-6 py-28 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 font-sans backdrop-blur-xl rounded-3xl shadow-2xl select-none overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.h2
        className="text-6xl font-semibold text-center mb-10 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-black to-gray-700 drop-shadow-lg transition-transform duration-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        CALL FOR PAPERS
      </motion.h2>
      <motion.div
        className="text-center max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed transition-colors duration-200 hover:text-gray-900">
          Full paper submission deadline: 30 April 2025
        </p>
        <p>
          Authors are requested to submit their full papers of their original research work as well as review papers written in English by email to:
          <br />
          <a
            href="mailto:iceams2025@gmail.com"
            className="text-gray-900 underline hover:text-gray-700 transition-transform duration-300 hover:scale-105 inline-block"
          >
            iceams2025@gmail.com
          </a>,{' '}
          <a
            href="mailto:convener@iceams2025.in"
            className="text-gray-900 underline hover:text-gray-700 transition-transform duration-300 hover:scale-105 inline-block"
          >
            convener@iceams2025.in
          </a>
        </p>
        <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed transition-colors duration-200 hover:text-gray-900">
          Note: Selected papers will be published in Scopus indexed journals
        </p>
        <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed transition-colors duration-200 hover:text-gray-900">
          Message us on WhatsApp<br />
          <strong>ICEAMS2025</strong><br />
          ISAMPE Hyderabad C/o TIC, ASL, Kachanbagh PO 500058
        </p>
      </motion.div>
    </motion.section>
  );
}