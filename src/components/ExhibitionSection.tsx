export function ExhibitionSection() {
  return (
    <section id="exhibition" className="px-6 py-28 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 font-sans backdrop-blur-3xl rounded-3xl shadow-2xl select-none">
      <h2 className="text-6xl font-bold text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-black to-gray-700 drop-shadow-xl mb-16">
        EXHIBITION & ADVERTISEMENT IN SOUVENIR
      </h2>
      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Exhibition Stall Card */}
        <div className="group relative p-8 rounded-3xl border border-gray-200 bg-gradient-to-tr from-white/30 to-gray-100/20 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:backdrop-blur-3xl">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Exhibition Stall</h3>
          <p className="text-gray-700 mb-2">Size: 3 m × 3 m</p>
          <p className="text-lg font-bold text-gray-900">₹50,000</p>
        </div>
        {/* Advertisement Card */}
        <div className="group relative p-8 rounded-3xl border border-gray-200 bg-gradient-to-br from-white/40 to-gray-200/20 backdrop-blur-2xl shadow-md transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:backdrop-blur-3xl">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Advertisement in Souvenir</h3>
          <ul className="text-gray-800 text-lg font-medium space-y-3">
            <li>Front inner cover (Full page): ₹50,000</li>
            <li>Back outer cover (Full page): ₹60,000</li>
            <li>Back inner cover: ₹50,000</li>
            <li>Full page: ₹50,000</li>
            <li>Half page: ₹25,000</li>
          </ul>
        </div>
      </div>

      {/* Centered Contact Line */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-xl text-gray-800 font-semibold tracking-wide">
          Contact for info:&nbsp;
          <a
            href="tel:09441426860"
            className="text-gray-900 hover:text-black hover:font-bold transition duration-300"
          >
            09441426860
          </a>
        </p>
      </div>
    </section>
  );
}