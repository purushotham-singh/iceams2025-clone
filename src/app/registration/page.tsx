'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import RegistrationFormPage from '@/components/RegistrationFormPage';

export default function RegistrationPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // your submission logic here…
    router.push('/');
  };

  return (
    <main className="w-screen bg-white min-h-screen py-16 px-4 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <RegistrationFormPage handleSubmit={handleSubmit} />
      </div>
    </main>
  );
}