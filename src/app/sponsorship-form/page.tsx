'use client';

import React from 'react';
import SponsorshipForm from '@/components/SponsorshipForm';

export default function SponsorshipFormPage() {
  return (
    <main className="w-screen bg-white py-16 px-4 animate-fade-in-up">
      <div className="max-w-3xl mx-auto">
        <SponsorshipForm />
      </div>
    </main>
  );
}