'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur border-b border-gray-800">
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold tracking-tight">ICEAMS 2025</h1>
        <div className="space-x-4 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/speakers">Speaker</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/registration">Register</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}