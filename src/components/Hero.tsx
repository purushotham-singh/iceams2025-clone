import Image from 'next/image';

export default function Hero() {
  return (
    <section
      aria-label="Hero Section"
      className="w-screen bg-black text-white py-24 min-h-screen flex flex-col items-center justify-center overflow-x-hidden"
    >
      <main className="w-full flex flex-col md:flex-row justify-between items-center gap-8 animate-fade-in-up">
        {/* Logos Left */}
        <div className="w-full flex flex-col items-center gap-4">
            <Image src="/images/iith-logo.png" alt="IIT Hyderabad Logo" width={100} height={100} priority />
            <Image src="/images/isampe-logo.png" alt="ISAMPE Logo" width={100} height={100} />
            <Image src="/images/iith-logo.png" alt="IIT Hyderabad Logo" width={100} height={100} />
            <Image src="/images/drdo-logo.png" alt="DRDO Logo" width={100} height={100} />
        </div>

        {/* Conference Info Right */}
        <div className="text-center md:text-right">
          <h2 className="text-xl font-mono uppercase tracking-wider text-gray-500">2–5 July 2025</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">IIT Hyderabad, Kandi, Telangana, India</h1>
          <p className="mt-6 text-lg text-gray-700">
            Theme: <span className="italic text-gray-500">&ldquo;Advanced Materials and Structures – Innovations, Technologies and Way Forward&rdquo;</span>
          </p>
          <p className="mt-2 text-gray-600">Conference Dates: <span className="text-gray-700">2–5 July 2025</span></p>
        </div>
      </main>

      {/* Description */}
      <div className="w-full text-center mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ICEAMS–2025</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          ISAMPE Hyderabad Chapter and IIT Hyderabad in association with DRDO (ASL) are organizing the
          1st International Conference & Exhibition on Advanced Materials and Structures (ICEAMS-2025)
          from <strong>2nd to 5th July 2025</strong> at IIT Hyderabad. The event focuses on key areas like
          super alloys, composites, high-temperature coatings, sensors, AI/ML in design and more.
        </p>
      </div>
    </section>
    
  );
}