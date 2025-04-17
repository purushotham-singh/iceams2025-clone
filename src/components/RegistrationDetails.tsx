'use client';
 import React from 'react';
 
 export default function RegistrationDetails() {
   return (
     <>
       <section className="w-full bg-white text-gray-900 py-12 px-4 animate-fade-in-up text-center">
       <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Registration Details</h2>
       </section>
 
       <section className="w-full bg-gray-50 text-gray-900 py-16 px-4">
         <div className="max-w-3xl mx-auto">
           <ul className="list-disc list-inside text-left space-y-2 text-lg">
             <li>
               <strong>ISAMPE Members:</strong> ₹8000
             </li>
             <li>
               <strong>Academic Faculty:</strong> ₹6000
             </li>
             <li>
               <strong>Students:</strong> ₹4000
             </li>
             <li>
               <strong>Others:</strong> ₹10,000
             </li>
             <li>
               <strong>Foreigners:</strong> USD 150
             </li>
           </ul>
           <p className="mt-4">Last date for registration: <strong>15 June 2025</strong></p>
           <p className="text-sm mt-2">Includes conference access, lunch/dinner, and delegate kit.</p>
           <p className="text-sm mt-2">
             Registration fee includes attendance to conference, inauguration, valedictory session, plenary/invited talks.
             Delegate kit and lunch/dinner.
           </p>
           <p className="text-sm mt-2">
             Payment is accepted through bank transfer, online transfer or demand draft drawn in favour of
             <strong> "Convener, ICEAMS2025"</strong>.
           </p>
           <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
             <p className="font-semibold text-gray-900 mb-4">Bank details:</p>
             <ul className="space-y-2 text-sm text-gray-700">
               <li><strong>Name of account:</strong> Convener, ICEAMS2025</li>
               <li><strong>Account no:</strong> 120033088534</li>
               <li><strong>IFSC code:</strong> CNRB0001849</li>
               <li><strong>Bank:</strong> Canara Bank, Kanchanbagh, Hyderabad 500059</li>
             </ul>
           </div>
 
           <div className="mt-6">
             <a
               href="/registration"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-800 transition-all duration-200"
             >
               Fill Out Registration Form
             </a>
           </div>
         </div>
       </section>
     </>
   );
 }