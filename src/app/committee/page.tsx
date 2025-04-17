'use client';
import { motion } from 'framer-motion';

export default function CommitteePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Organizing Committee</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Conference Chair */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg p-6 transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conference Chair</h3>
            <p className="text-gray-700">Prof. A. B. Rao – IIT Hyderabad</p>
          </div>
          {/* Organizing Committee */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg p-6 transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Organizing Committee</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Dr. C. D. Sharma – IIT Hyderabad</li>
              <li>Prof. E. F. Singh – NIT Warangal</li>
            </ul>
          </div>
          {/* Technical Committee */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg p-6 transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Committee</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Dr. J. K. Mehta – IIT Madras</li>
              <li>Dr. L. M. Reddy – IISc Bangalore</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
