
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import BookingSection from '@/components/BookingSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f0fe] to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <BookingSection />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
