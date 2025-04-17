import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Purushotham Internship',
  // title: 'ICEAMS 2025 | IIT Hyderabad',
  description: 'International Conference on Emerging Advances in Materials and Structures',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-gray-100 font-sans antialiased">
        <Navbar />
        <main className="w-screen px-0 pt-24 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}