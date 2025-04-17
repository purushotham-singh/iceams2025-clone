export default function SchedulePage() {
  const schedule = [
    {
      day: 'Day 1 – July 2, 2025',
      events: [
        { time: '09:00 AM', title: 'Registration & Welcome Breakfast' },
        { time: '10:00 AM', title: 'Inauguration Ceremony' },
        { time: '11:00 AM', title: 'Keynote: Dr. Anjali Mehra' },
        { time: '01:00 PM', title: 'Lunch Break' },
        { time: '02:00 PM', title: 'Session 1: Materials Innovation' },
      ],
    },
    {
      day: 'Day 2 – July 3, 2025',
      events: [
        { time: '09:30 AM', title: 'Keynote: Prof. Rajiv Menon' },
        { time: '11:00 AM', title: 'Session 2: Structural Dynamics' },
        { time: '02:00 PM', title: 'Poster Presentations' },
      ],
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 py-16 animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center transition-transform duration-300 hover:scale-105">
          Conference Schedule
        </h2>
        {schedule.map((day, i) => (
          <div key={i} className="mb-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {day.day}
            </h3>
            <ul className="space-y-2">
              {day.events.map((event, j) => (
                <li key={j} className="flex gap-4 text-gray-700 hover:translate-x-2 transition-transform duration-200">
                  <span className="w-28 font-medium text-gray-900">{event.time}</span>
                  <span className="text-gray-800">{event.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
