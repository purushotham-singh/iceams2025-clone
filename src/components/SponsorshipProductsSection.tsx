'use client';
import React from 'react';
import Image from 'next/image';
 
export default function SponsorshipProductsSection() {
  const products = [
    {
      title: 'Exhibition Stall',
      image: '/images/exhibition_stall.png',
      original: '₹50,000',
      discounted: '₹50,000',
      discount: '',
    },
    {
      title: 'Co-Host',
      image: '/images/cohost.png',
      original: '₹1,000,000',
      discounted: '₹1,000,000',
      discount: '',
    },
    {
      title: 'Diamond Sponsors',
      image: '/images/diamond.png',
      original: '₹600,000',
      discounted: '₹500,000',
      discount: '17% off',
    },
    {
      title: 'Platinum Sponsors',
      image: '/images/platinum.png',
      original: '₹450,000',
      discounted: '₹400,000',
      discount: '11% off',
    },
    {
      title: 'Gold Sponsors',
      image: '/images/gold.png',
      original: '₹350,000',
      discounted: '₹300,000',
      discount: '14% off',
    },
    {
      title: 'Silver Sponsor',
      image: '/images/silver.png',
      original: '₹250,000',
      discounted: '₹200,000',
      discount: '20% off',
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-32 font-sans backdrop-blur-xl rounded-3xl shadow-2xl select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-black text-black drop-shadow-md mb-16 tracking-tight z-10 relative">
          All Sponsorship Products
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 z-10 relative">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white/70 rounded-2xl border border-gray-200 shadow-md p-8 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-500 backdrop-blur-md"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={128}
                height={128}
                className="object-contain mb-4 w-full group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>
              {product.original && (
                <p className="text-gray-500 line-through">{product.original}</p>
              )}
              <p className="text-lg font-bold text-gray-900">{product.discounted}</p>
              {product.discount && (
                <p className="text-sm text-gray-600 mb-4">{product.discount}</p>
              )}
              <button className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-[#0A84FF] hover:to-[#0060DF] hover:text-white transition-all duration-300 hover:scale-105">
                + Quick View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}