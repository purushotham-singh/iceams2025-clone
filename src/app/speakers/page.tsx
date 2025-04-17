'use client';

export default function CommitteePage() {
  const patrons = [
    'Dr Samir V Kamat – Secretary DDR&D and Chairman, DRDO',
    'Shri U Raja Babu – DS & DG (MSS)',
    'Prof B S Murthy – Director, IIT Hyderabad',
  ];

  const advisoryCommittee = [
    'Shri B V Paparao – Director, ASL',
    'Shri A Rajarajan – President, ISAMPE',
    'Dr M R M Babu – BITS, Hyderabad',
    'Dr G Ramaguru – Director, DIACOE',
    'Dr G A Srinivasa Murthy – Director, DRDL',
    'Shri Anindya Biswas – Director, RCI',
    'Dr N Sivasubramaniam – Director, CAS',
    'Dr Jagannath Nayak – Director, CHESS',
    'Dr Anupam Sharma – Director, DSP',
    'Dr R Balamuralikrishnan – Director, DMRL',
    'Dr Mayank Dwivedi – Director, DMSRDE',
    'Dr Anil Prasad Dash – Director, HEMRL',
    'Dr Jaitheertha R Joshi – Director, BrahMos',
    'Dr S Unnikrishnan Nair – Director, VSSC',
    'Dr D Saji NAL(retd)',
  ];

  const organizingCommittee = [
    'Shri B V Paparao – Chairman',
    'Dr Manoj K Buragohain – Co-Chairman',
    'Dr Anil Kumar – Vice Chairman',
    'Dr S A Khalane',
    'Shri S Seetharaman',
    'Shri P Sunder Singh',
    'Dr I Srikant',
    'Shri Y Gangadhar Sinha',
    'Shri Rajesh Addanki',
    'Dr M V K Veera Brahmam – Org. Secretary',
    'Dr M Padmanabha Raju',
    'Dr K Tejasvi',
    'Shri Hemanth Kumar',
    'Dr Basant Kumar – Co-convener',
    'Shri T Ramalingam – Treasurer',
    'Dr K Srinivas – Convener',
  ];

  return (
    <main className="bg-white min-h-screen py-16 animate-fade-in-up">
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Patrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patrons.map((name, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                <p className="text-gray-800 text-base leading-relaxed">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">National Advisory Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((name, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                <p className="text-gray-800 text-base leading-relaxed">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">Organizing Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((name, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
                <p className="text-gray-800 text-base leading-relaxed">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}