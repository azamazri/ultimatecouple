import { CheckCircle, Users, HeartHandshake, Award } from 'lucide-react';

export function WhyJoin() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Bukan teori, tapi pengalaman nyata",
      description: "Setiap aktivitas dirancang agar kamu merasakan, bukan sekadar mendengar."
    },
    {
      icon: Users,
      title: "Peserta eksklusif & terbatas",
      description: "Kami hanya menerima jumlah pasangan terbatas agar setiap sesi terasa intim dan personal."
    },
    {
      icon: HeartHandshake,
      title: "Gabungan antara refleksi, fun, dan kehangatan",
      description: "Kamu akan menangis, tertawa, dan menemukan kembali rasa yang mungkin sudah lama tertinggal."
    },
    {
      icon: Award,
      title: "Difasilitasi langsung oleh Mas Satia",
      description: "Seorang pebisnis, founder KepalaKeluarga.id, dan pendamping pasangan yang memahami betul dilema para couplepreneur."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#E2CBA6] to-[#D9D4C9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#184C38] mb-6 text-4xl md:text-5xl font-bold">
            Kenapa Harus Ikut Event Ini?
          </h2>
          <div className="w-24 h-1 bg-[#D7A753] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#D7A753]"
            >
              <div className="flex gap-4">
                <div className="bg-[#184C38] p-3 rounded-full flex-shrink-0 h-fit">
                  <reason.icon className="w-6 h-6 text-[#D7A753]" />
                </div>
                <div>
                  <h3 className="text-[#184C38] mb-3 text-xl">{reason.title}</h3>
                  <p className="text-[#5B4C3A]">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
