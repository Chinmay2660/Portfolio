import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className=" bg-primary text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}