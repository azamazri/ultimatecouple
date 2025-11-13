import { Heart, BookOpen, Home, Gift } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Pengalaman dua hari penuh makna & kebersamaan",
      description: "Momen berharga yang akan dikenang selamanya"
    },
    {
      icon: BookOpen,
      title: "Materi reflektif dan aktivitas praktis",
      description: "Yang bisa langsung diterapkan di kehidupan nyata"
    },
    {
      icon: Home,
      title: "Akomodasi lengkap",
      description: "Makan, coffee break, penginapan dan perlengkapan disediakan selama 2 hari 1 malam"
    },
    {
      icon: Gift,
      title: "Merchandise eksklusif",
      description: "Dari KepalaKeluarga.id untuk setiap peserta"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#E2CBA6]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#184C38] mb-4 text-4xl md:text-5xl font-bold">
            Benefit untuk Peserta
          </h2>
          <p className="text-[#5B4C3A] text-lg max-w-3xl mx-auto">
            Setiap perjalanan cinta pantas dirayakan dengan cara yang bermakna. Beri hadiah terbaik untuk hubunganmu: waktu, perhatian, dan ruang untuk saling memahami kembali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#D7A753]"
            >
              <div className="flex gap-4 items-start">
                <div className="bg-[#184C38] p-3 rounded-full flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#D7A753]" />
                </div>
                <div>
                  <h3 className="text-[#184C38] mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-[#5B4C3A]">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
