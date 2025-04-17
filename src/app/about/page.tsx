'use client';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="w-screen bg-white text-gray-900 antialiased">
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-widest text-gray-900 mb-4">ICEAMS–2025</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            <strong className="text-yellow-400">2–5 July 2025</strong>, Venue: IIT Hyderabad, Kandi, Telangana, India
          </p>
          <p className="text-gray-500 mt-4">
            Theme: “Advanced Materials and Structures – Innovations, Technologies and Way Forward”
          </p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap mt-8">
          <Image
            src="/images/isampe-logo.png"
            alt="ISAMPE Logo"
            width={96}
            height={96}
            className="object-contain"
          />
          <Image
            src="/images/iith-logo.png"
            alt="IITH Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CALL FOR PAPERS</h2>
          <p className="text-lg text-gray-700 mb-2">Full paper submission deadline: <strong>30 April 2025</strong></p>
          <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Authors are requested to submit their full papers of their original research work and review papers written in English by email to:
            <br />
            <a href="mailto:iceams2025@gmail.com" className="text-blue-400 underline">iceams2025@gmail.com</a>,&nbsp;
            <a href="mailto:convener@iceams2025.in" className="text-blue-400 underline">convener@iceams2025.in</a>
          </p>
          <p className="mt-4 text-gray-700 underline">
            Note: Selected papers will be published in Scopus indexed journals
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-yellow-300 mb-8">Registration for ICEAMS2025</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/registration-form.png"
              alt="Registration Form"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
            <div className="text-gray-700 space-y-2 text-sm leading-loose">
              <ul className="list-disc list-inside text-green-400 text-left">
                <li>ISAMPE Members: ₹8000</li>
                <li>Academic faculty: ₹6000</li>
                <li>Students: ₹4000</li>
                <li>Others: ₹10,000</li>
                <li>Foreigners: USD 150</li>
              </ul>
              <p className="mt-2 text-gray-500">Last date for registration: <span className="text-blue-400">15 June 2025</span></p>
              <p className="mt-2">Includes conference access, lunch/dinner, and delegate kit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sponsorship Opportunity</h2>
          <p className="text-green-400 max-w-2xl mx-auto text-sm">
            1. Co-host: ₹10 Lakhs<br />
            2. Diamond sponsors: ₹5 Lakhs<br />
            3. Platinum sponsors: ₹4 Lakhs<br />
            4. Gold sponsors: ₹3 Lakhs<br />
            5. Silver sponsors: ₹2 Lakhs<br />
            6. Contact: <a href="tel:09441426860" className="text-blue-400 underline">09441426860</a>
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-center mb-4">Exhibition and Advertisement in Souvenir</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <Image
              src="/images/exhibition.png"
              alt="Exhibition"
              width={600}
              height={400}
              className="rounded-md"
            />
            <div className="text-green-400 text-sm space-y-1">
              <p>Exhibition stall: 3m x 3m - ₹50,000</p>
              <p>Front inner cover full page: ₹50,000</p>
              <p>Back outer cover full page: ₹60,000</p>
              <p>Full page: ₹50,000 | Half page: ₹25,000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}