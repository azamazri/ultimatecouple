import { Sparkles, Users, Star, Zap } from 'lucide-react';

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F1E7D0] to-[#E2CBA6]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#184C38] mb-4 text-4xl md:text-5xl font-bold">
            Investasi untuk Hubungan yang Lebih Bermakna
          </h2>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-br from-[#184C38] to-[#2a6d50] rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#D7A753] mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D7A753] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D7A753] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#D7A753] text-[#184C38] px-6 py-2 rounded-full mb-6">
                <Star className="w-5 h-5" />
                <span className="tracking-wider uppercase">Paket Eksklusif</span>
                <Star className="w-5 h-5" />
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-[#F1E7D0] text-2xl line-through opacity-60">Rp 6.000.000</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Sparkles className="w-8 h-8 text-[#D7A753]" />
                  <span className="text-[#D7A753] text-5xl md:text-6xl">Rp 4.900.000</span>
                  <Sparkles className="w-8 h-8 text-[#D7A753]" />
                </div>
                <p className="text-[#F1E7D0] mt-2">per pasangan (2 orang)</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
                <div className="flex items-center gap-2 text-[#D7A753]">
                  <Zap className="w-5 h-5" />
                  <p className="uppercase tracking-wide">Early Bird Discount Rp 1.100.000!</p>
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="text-[#F1E7D0] space-y-4 max-w-2xl mx-auto">
              <p className="text-center text-lg">
                Bandingkan dengan biaya terapi pasangan yang bisa mencapai jutaan rupiah per sesi, 
                atau konsultasi pernikahan yang harus dijadwalkan berkali-kali.
              </p>
              <p className="text-center italic opacity-90">
                Di sini, kalian akan mendapat pengalaman penuh selama dua hari, 
                lengkap dengan akomodasi, fasilitas, dan dampak yang bisa langsung kalian rasakan.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="flex items-center justify-center gap-3 text-[#184C38]">
          <Users className="w-6 h-6 text-[#D7A753]" />
          <p className="text-lg">
            <span className="font-bold text-[#D7A753]">Terbatas untuk 15 pasangan saja!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
