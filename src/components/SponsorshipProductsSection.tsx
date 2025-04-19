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
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">All Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={128}
                height={128}
                className="object-contain mb-4 w-full"
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
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                + Quick View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}