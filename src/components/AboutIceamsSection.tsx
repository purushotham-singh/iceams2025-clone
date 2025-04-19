export default function AboutIceamsSection() {
  return (
    <section className="px-6 py-28 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 font-sans backdrop-blur-lg rounded-3xl shadow-2xl select-none">
    {/* Title */}
  <div className="text-center mb-20">
    <h2 className="text-6xl font-semibold tracking-tight text-gray-900 drop-shadow-lg">About ICEAMS2025</h2>
  </div>

  {/* Areas of Focus */}
  <div className="max-w-5xl mx-auto mb-20">
    <h3 className="text-5xl font-semibold text-center text-gray-900 mb-8 tracking-tight drop-shadow-md">
      Areas of Focus
    </h3>
    <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
      Topics (not restricted):
    </p>
    <div className="flex justify-center">
      <ul className="space-y-6 max-w-4xl text-xl text-gray-700 leading-relaxed list-none px-4">
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Advanced materials including super alloys, advanced composites viz., PMC, MMC, CMC, C-C-C; high temperature coatings, energy materials & devices, sensors, lightweighting, high entropy alloys, superalloys, steel & concrete
          </p>
        </li>
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Computational design and mechanics of structures
          </p>
        </li>
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Advanced processing technologies including composites processing, additive manufacturing, powder metallurgy
          </p>
        </li>
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Material characterisation, non-destructive testing, product qualification, structural health monitoring
          </p>
        </li>
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Recycling & circular economy
          </p>
        </li>
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Application of AI & ML in materials, design, manufacturing and testing
          </p>
        </li>
        <li className="group bg-white/50 backdrop-blur-sm border border-gray-300 rounded-2xl p-6 transition hover:scale-105 hover:shadow-xl duration-300">
          <p className="text-lg text-gray-900 leading-relaxed font-medium">
            ● Applications in aerospace, defence, automotive, infrastructure, and other industrial sectors
          </p>
        </li>
      </ul>
    </div>
  </div>

  {/* Our Team */}
  <div className="max-w-4xl mx-auto mb-20">
    <h3 className="text-5xl font-semibold text-center text-gray-900 mb-8 tracking-tight drop-shadow-md">Our Team</h3>
    <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-inner">
      <p className="text-xl text-gray-800 leading-relaxed">
        Indian Society for Advancement of Materials and Process Engineering (ISAMPE) Hyderabad Chapter and IIT Hyderabad in association with Advanced Systems Laboratory (ASL), DRDO are jointly organising the 1st International Conference and Exhibition on Advanced Materials and Structures (ICEAMS-2025) at IIT Hyderabad, Kandi, Telangana during 2nd to 5th July 2025.
      </p>
    </div>
  </div>

  {/* Important Dates */}
  <div className="max-w-3xl mx-auto">
    <h3 className="text-5xl font-semibold text-center text-gray-900 mb-10 tracking-tight drop-shadow-md">Important Dates</h3>
    <div className="flex justify-center">
      <ul className="space-y-6 max-w-xl text-left text-xl text-gray-800 list-none">
        <li className="bg-gradient-to-r from-white to-gray-100 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
          <p className="text-lg text-gray-800 font-medium">
            Abstract submission is: <span className="text-gray-900 font-semibold">closed</span>
          </p>
        </li>
        <li className="bg-gradient-to-r from-white to-gray-100 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
          <p className="text-lg text-gray-800 font-medium">
            Notification of acceptance: <span className="text-gray-900 font-semibold">March 15, 2025</span>
          </p>
        </li>
        <li className="bg-gradient-to-r from-white to-gray-100 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
          <p className="text-lg text-gray-800 font-medium">
            Final paper submission by: <span className="text-gray-900 font-semibold">April 30, 2025</span>
          </p>
        </li>
        <li className="bg-gradient-to-r from-white to-gray-100 border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300">
          <p className="text-lg text-gray-800 font-medium">
            Acceptance of paper by: <span className="text-gray-900 font-semibold">May 15, 2025</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
  );
}