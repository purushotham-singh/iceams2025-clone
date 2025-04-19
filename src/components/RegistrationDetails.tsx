export default function RegistrationDetails() {
  return (
    <section className="w-full bg-white text-gray-900 py-28 px-6 font-sans select-none">
      <div className="max-w-5xl mx-auto space-y-16 px-4 sm:px-8">
        <header className="text-center">
          <h2 className="text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-black to-gray-600 drop-shadow-lg">
            Registration Details
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
            Complete your registration before the seats run out!
          </p>
        </header>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg md:text-xl">
          {[
            ['ISAMPE Members', '₹8,000'],
            ['Academic Faculty', '₹6,000'],
            ['Students', '₹4,000'],
            ['Others', '₹10,000'],
            ['Foreign Participants', 'USD 150']
          ].map(([label, value], i) => (
            <li
              key={i}
              className="flex items-center justify-between px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl shadow hover:shadow-md transition-all duration-300"
            >
              <span className="font-semibold">{label}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <div className="relative">
          <div className="absolute -top-24 right-0 sm:right-10 md:right-16 z-10 transform hover:scale-105 transition-transform duration-300">
            <a
              href="/registration"
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white hover:no-underline transition-all duration-300 transform hover:scale-105"
            >
              ⚡ Instant Registration
            </a>
          </div>
        </div>
        <div className="space-y-4 border-l-4 border-gray-200 pl-6 text-base text-gray-700 leading-relaxed mt-10">
          <p><strong>Last date for registration:</strong> 15 June 2025</p>
          <p><strong>Includes:</strong> Full conference access, sessions, meals, and delegate kit.</p>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-white border border-gray-200 shadow-inner rounded-3xl p-8 flex flex-col lg:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Payment Instructions</h3>
            <p className="mb-4 text-gray-700">
              Pay via bank/online transfer or demand draft in favour of:
            </p>
            <ul className="space-y-2 text-gray-800 text-lg select-text">
              <li><strong>Account Name:</strong> Convener, ICEAMS2025</li>
              <li><strong>Account No.:</strong> 120033088534</li>
              <li><strong>IFSC Code:</strong> CNRB0001849</li>
              <li><strong>Bank:</strong> Canara Bank, Kanchanbagh, Hyderabad 500059</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}