import { MessageCircle, Heart, Clock, Users } from "lucide-react";

export function CTA() {
  const whatsappNumber = "628812481672"; // Ganti dengan nomor WhatsApp yang sesuai
  const message = encodeURIComponent(
    "Halo, saya tertarik untuk mendaftar Ultimate Couple Experience. Mohon info lebih lanjut."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#184C38] to-[#0f3326] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#D7A753] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-[#D7A753] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-[#D7A753] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-[#D7A753] animate-pulse" />
            <h2 className="text-[#D7A753] text-4xl md:text-5xl font-bold">
              Saatnya Merawat Cinta Kalian
            </h2>
            <Heart className="w-8 h-8 text-[#D7A753] animate-pulse" />
          </div>
          <p className="text-[#F1E7D0] text-xl max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk menguatkan ikatan dan menemukan
            kebahagiaan baru bersama pasangan
          </p>
        </div>

        {/* Urgency Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#D7A753]">
            <div className="flex items-center gap-4">
              <div className="bg-[#D7A753] p-3 rounded-full">
                <Users className="w-6 h-6 text-[#184C38]" />
              </div>
              <div className="text-left">
                <p className="text-[#D7A753] text-sm uppercase tracking-wide">
                  Kuota Tersisa
                </p>
                <p className="text-[#F1E7D0] text-xl">Hanya 20 Pasangan</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#D7A753]">
            <div className="flex items-center gap-4">
              <div className="bg-[#D7A753] p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#184C38]" />
              </div>
              <div className="text-left">
                <p className="text-[#D7A753] text-sm uppercase tracking-wide">
                  Tanggal Event
                </p>
                <p className="text-[#F1E7D0] text-xl">22-23 Nov 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D7A753] hover:bg-[#c89743] text-[#184C38] px-8 py-4 rounded-full text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="tracking-wide uppercase">
              Daftar Sekarang via WhatsApp
            </span>
          </a>

          <p className="text-[#F1E7D0] mt-6 text-sm">
            Hubungi kami untuk informasi lebih lanjut dan konfirmasi
            keikutsertaan
          </p>
        </div>

        {/* Final Message */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D7A753]/30">
          <p className="text-[#F1E7D0] text-center text-lg italic leading-relaxed">
            "Cinta bukan sekadar perasaan. Ia adalah pilihan untuk terus tumbuh,
            belajar, dan merawat. Investasi terbaik yang bisa kalian berikan
            untuk hubungan adalah waktu dan perhatian."
          </p>
          <p className="text-[#D7A753] text-center mt-4">— KepalaKeluarga.id</p>
        </div>
      </div>
    </section>
  );
}
