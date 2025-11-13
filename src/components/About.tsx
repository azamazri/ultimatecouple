import { Heart, MessageCircle, Users, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F1E7D0] to-[#E2CBA6]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#184C38] mb-6 text-4xl md:text-5xl font-bold">
            <span className="block mb-2">Lebih dari Sekadar Retreat</span>
            <span className="block text-2xl md:text-3xl">Perjalanan Dua Hari yang Akan Membuka Cara Pandang Baru</span>
          </h2>
          <p className="text-[#5B4C3A] text-lg leading-relaxed">
            Ultimate Couple Experience bukan sekadar retreat, tapi perjalanan dua hari yang akan membuka cara pandang baru tentang cinta, kerja sama, dan makna sukses sejati.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-[#D7A753]">
          <p className="text-[#184C38] text-center mb-8 italic">
            Lewat kombinasi sesi refleksi, fun activity, dan pengalaman emosional, kalian akan:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#184C38] p-3 rounded-full flex-shrink-0">
                <Heart className="w-6 h-6 text-[#D7A753]" />
              </div>
              <div>
                <h3 className="text-[#184C38] mb-2">Membangun Kembali Kedekatan</h3>
                <p className="text-[#5B4C3A]">Mengembalikan kedekatan dan keintiman dalam hubungan</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#184C38] p-3 rounded-full flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-[#D7A753]" />
              </div>
              <div>
                <h3 className="text-[#184C38] mb-2">Memperdalam Komunikasi</h3>
                <p className="text-[#5B4C3A]">Belajar berkomunikasi lebih terbuka dan empatik</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#184C38] p-3 rounded-full flex-shrink-0">
                <Users className="w-6 h-6 text-[#D7A753]" />
              </div>
              <div>
                <h3 className="text-[#184C38] mb-2">Memperkuat Kolaborasi</h3>
                <p className="text-[#5B4C3A]">Membangun kerja sama yang lebih solid dalam bisnis dan rumah tangga</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#184C38] p-3 rounded-full flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#D7A753]" />
              </div>
              <div>
                <h3 className="text-[#184C38] mb-2">Menemukan Kebahagiaan Baru</h3>
                <p className="text-[#5B4C3A]">Merasakan kembali kehangatan dan keceriaan di dalam hubungan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
