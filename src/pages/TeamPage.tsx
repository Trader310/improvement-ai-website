
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f0fe] to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
