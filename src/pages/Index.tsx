import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { WhyJoin } from '@/components/WhyJoin';
import { Facilitator } from '@/components/Facilitator';
import { Guarantee } from '@/components/Guarantee';
import { Benefits } from '@/components/Benefits';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1E7D0]">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#184C38] via-[#D7A753] to-[#184C38]"></div>

      <Hero />
      <About />
      <Experience />
      <WhyJoin />
      <Facilitator />
      <Guarantee />
      <Benefits />
      <Pricing />
      <CTA />

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-[#184C38] via-[#D7A753] to-[#184C38]"></div>

      {/* Footer */}
      <footer className="bg-[#184C38] text-[#F1E7D0] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-[#D7A753]" />
            <p className="text-[#D7A753]">KepalaKeluarga.id</p>
            <Heart className="w-5 h-5 text-[#D7A753]" />
          </div>
          <p className="text-sm">© 2025 Ultimate Couple Experience. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
