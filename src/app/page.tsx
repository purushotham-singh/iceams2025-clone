// 1. Homepage (app/page.tsx)
'use client';

import React from 'react';
import { Banner } from '@/components/Banner';
import AboutIceamsSection from '@/components/AboutIceamsSection';
import CallForPapersSection from '@/components/CallForPapersSection';
import { CallForPapersSection2 } from '@/components/CallForPapersSection2';
import { ExhibitionSection } from '@/components/ExhibitionSection';
import RegistrationDetails from '@/components/RegistrationDetails';
import SponsorshipProductsSection from '@/components/SponsorshipProductsSection';
import { SponsorshipSection } from '@/components/SponsorshipSection';
import AboutConferenceSection from '@/components/AboutConferenceSection';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <main className="bg-[#f9f9f9] text-gray-900 font-sans antialiased">
      <Banner />

   
      <AboutConferenceSection/>

      <CallForPapersSection />
      <AboutIceamsSection />
      <RegistrationDetails />

      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <SponsorshipSection />
        </div>
      </section>

      <ExhibitionSection />
      <CallForPapersSection2 />

      <Newsletter/>

      <SponsorshipProductsSection />

      <footer className="bg-[#0f0f0f] text-white text-center py-6">
        <p className="text-sm">&copy; 2025 ICEAMS. All Rights Reserved.</p>
        <p className="text-sm">Cookie Policy</p>
      </footer>
    </main>
  );
}
