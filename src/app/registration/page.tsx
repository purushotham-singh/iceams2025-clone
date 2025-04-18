'use client';
import React from 'react';
import RegistrationFormPage from '@/components/RegistrationFormPage';

export default function RegistrationPage() {
  return (
    <main className="w-screen bg-white min-h-screen py-16 px-4 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <RegistrationFormPage />
      </div>
    </main>
  );
}