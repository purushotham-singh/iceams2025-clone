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
          <h2 className="text-xl text-cyan-300 font-mono uppercase tracking-wider">2–5 July 2025</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400">IIT Hyderabad, Kandi, Telangana, India</h1>
          <p className="mt-6 text-lg text-lime-400">
            Theme: <span className="italic text-lime-300">"Advanced Materials and Structures – Innovations, Technologies and Way Forward"</span>
          </p>
          <p className="mt-2 text-gray-400">Conference Dates: <span className="text-yellow-400">2–5 July 2025</span></p>
        </div>
      </main>

      {/* Description */}
      <div className="w-full text-center mt-12">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">ICEAMS–2025</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          ISAMPE Hyderabad Chapter and IIT Hyderabad in association with DRDO (ASL) are organizing the
          1st International Conference & Exhibition on Advanced Materials and Structures (ICEAMS-2025)
          from <strong>2nd to 5th July 2025</strong> at IIT Hyderabad. The event focuses on key areas like
          super alloys, composites, high-temperature coatings, sensors, AI/ML in design and more.
        </p>
      </div>
    </section>
    
  );
}