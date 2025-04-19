// src/components/ExhibitionSection.tsx
export function ExhibitionSection() {
  return (
    <section id="exhibition" className="px-6 py-20 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        EXHIBITION & ADVERTISEMENT IN SOUVENIR
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {/* Exhibition Stall Card */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Exhibition Stall</h3>
          <p className="text-gray-700 mb-2">Size: 3 m × 3 m</p>
          <p className="text-lg font-bold text-gray-900">₹50,000</p>
        </div>
        {/* Advertisement Card */}
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Advertisement in Souvenir</h3>
          <ul className="text-gray-700 space-y-2">
            <li>Front inner cover (Full page): ₹50,000</li>
            <li>Back outer cover (Full page): ₹60,000</li>
            <li>Back inner cover: ₹50,000</li>
            <li>Full page: ₹50,000</li>
            <li>Half page: ₹25,000</li>
          </ul>
        </div>
      </div>

      {/* Centered Contact Line */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <p className="text-gray-700 text-lg">
          Contact for info:&nbsp;
          <a
            href="tel:09441426860"
            className="underline font-medium hover:text-gray-800 transition-colors"
          >
            09441426860
          </a>
        </p>
      </div>
    </section>
  );
}