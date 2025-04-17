/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const MotionImage = motion(Image);

export function Banner() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full px-0 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm mb-4"
        >
          ICEAMS–2025
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-900 mb-4 font-semibold"
        >
          2–5 July 2025, Venue: IIT Hyderabad, Kandi, Telangana, India
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-gray-700 italic mb-10 max-w-3xl mx-auto"
        >
          Theme: "Advanced Materials and Structures – Innovations, Technologies and Way Forward"
        </motion.p>

        <motion.div
          className="flex justify-center gap-10 flex-wrap items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.9,
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {["drdo-logo.png", "isampe-logo.png", "iith-logo.png"].map((logo, i) => (
            <MotionImage
              key={i}
              src={`/images/${logo}`}
              alt={`${logo.split('-')[0]} Logo`}
              width={80}
              height={80}
              className="object-contain transition-transform hover:scale-105 duration-300 ease-in-out"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}