'use client';

import React from 'react';
import SponsorshipForm from '@/components/SponsorshipForm';

export default function SponsorshipFormRoute() {
  return (
    <main className="w-screen bg-white min-h-screen py-16 px-4 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <SponsorshipForm />
      </div>
    </main>
  );
}

