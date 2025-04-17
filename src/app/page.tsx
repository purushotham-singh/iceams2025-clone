/* eslint-disable react/no-unescaped-entities */
'use client';

import { Banner } from "@/components/Banner";
import AboutIceamsSection from "@/components/AboutIceamsSection";
import CallForPapersSection from "@/components/CallForPapersSection";
import { CallForPapersSection2 } from "@/components/CallForPapersSection2";
import { ExhibitionSection } from "@/components/ExhibitionSection";
import RegistrationDetails from "@/components/RegistrationDetails";
import SponsorshipProductsSection from "@/components/SponsorshipProductsSection";
import { SponsorshipSection } from "@/components/SponsorshipSection";

export default function HomePage() {
  return (
    <main className="bg-[#f9f9f9] text-gray-900 font-sans antialiased">
      {/* Conference Banner */}
      <Banner/>

      {/* About Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Conference</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            ISAMPE Hyderabad Chapter and IIT Hyderabad in association with Advanced Systems Laboratory, DRDO are jointly organizing the 1st International Conference and Exhibition on Advanced Materials and Structures (ICEAMS-2025) at IIT Hyderabad, Kandi, Telangana during 2nd to 5th July 2025. The conference theme is "Advanced Materials and Structures – Innovations, Technologies and Way Forward", focusing on advanced materials including super alloys, advanced composites, ceramics, high temperature coatings, energy materials, sensors and devices.
          </p>
        </div>
      </section>

    
      <CallForPapersSection />
      <AboutIceamsSection />
      <RegistrationDetails />
      <SponsorshipSection/>
      <ExhibitionSection/>
     
      <CallForPapersSection2 />

      {/* Newsletter Sign-Up */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Newsletter Sign-Up</h2>
        <input type="email" placeholder="Enter your email" className="border rounded px-4 py-2 mb-4" />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Subscribe</button>
      </section>
      <SponsorshipProductsSection/>
      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-white text-center py-6">
        <p className="text-sm">&copy; 2025 ICEAMS. All Rights Reserved.</p>
        <p className="text-sm">Cookie Policy</p>
      </footer>
    </main>
  );
}
