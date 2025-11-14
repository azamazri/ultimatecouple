import { Sparkles, Users, Star, Zap } from "lucide-react";

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
                <span className="tracking-wider uppercase">
                  Paket Eksklusif
                </span>
                <Star className="w-5 h-5" />
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-[#F1E7D0] text-2xl line-through opacity-60">
                    Rp 6.000.000
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Sparkles className="w-8 h-8 text-[#D7A753]" />
                  <span className="text-[#D7A753] text-5xl md:text-6xl">
                    Rp 4.900.000
                  </span>
                  <Sparkles className="w-8 h-8 text-[#D7A753]" />
                </div>
                <p className="text-[#F1E7D0] text-xl mt-2">per pasangan</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block mb-6">
                <div className="flex items-center gap-3 text-[#D7A753]">
                  <Users className="w-6 h-6" />
                  <p className="text-lg">Kuota Terbatas: Hanya 20 Pasangan</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-[#F1E7D0] text-lg">
                Agar setiap momen terasa{" "}
                <span className="text-[#D7A753]">
                  pribadi, hangat, dan penuh makna
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Special Offer Card */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 md:p-8 shadow-2xl border-4 border-red-800 relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <div className="bg-yellow-400 text-red-900 px-4 py-2 transform rotate-12 translate-x-2 -translate-y-2">
              <span className="text-sm uppercase tracking-wider">Limited!</span>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-yellow-400 p-4 rounded-full flex-shrink-0">
              <Zap className="w-12 h-12 text-red-700" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-white text-2xl mb-2">
                Bonus Spesial untuk 4 Pasangan Beruntung!
              </h3>
              <p className="text-yellow-100 text-lg">
                <span className="text-yellow-300">
                  KHUSUS 4 PASANGAN PERTAMA
                </span>{" "}
                akan mendapatkan{" "}
                <span className="text-yellow-300">
                  penginapan untuk 1 keluarga
                </span>{" "}
                dengan harga yang sama!
              </p>
            </div>
            <div className="bg-yellow-400 px-6 py-3 rounded-lg flex-shrink-0">
              <p className="text-red-900 text-xl uppercase tracking-wider">
                Buruan!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-12">
          <p className="text-[#184C38] text-xl italic max-w-2xl mx-auto">
            "Cinta juga butuh dirawat, bukan hanya dijalani. Luangkan dua hari
            untuk saling menemukan kembali."
          </p>
        </div>
      </div>
    </section>
  );
}
