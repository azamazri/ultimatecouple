import { Heart, Music, Laugh } from 'lucide-react';
import scheduleImage from "@/assets/schedule-rundown.png";

export function Experience() {
  const activities = [
    {
      icon: Heart,
      title: "Reconnecting the Heart",
      description: "Sesi refleksi dan aktivitas emosional untuk membuka kembali rasa"
    },
    {
      icon: Music,
      title: "Romantic Dinner & Acoustic Night",
      description: "Momen penuh cinta dan keheningan"
    },
    {
      icon: Laugh,
      title: "Celebrate the Fun",
      description: "Games & tantangan kolaboratif yang memperkuat tawa dan kebersamaan"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#184C38]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#D7A753] mb-4 text-4xl md:text-5xl font-bold">
            Selama Dua Hari, Kalian Akan Mengalami:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#F1E7D0] rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border-2 border-[#D7A753]"
            >
              <div className="bg-[#184C38] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <activity.icon className="w-8 h-8 text-[#D7A753]" />
              </div>
              <h3 className="text-[#184C38] mb-3">{activity.title}</h3>
              <p className="text-[#5B4C3A]">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Rundown Schedule */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-[#D7A753]">
          <div className="text-center mb-6">
            <h3 className="text-[#D7A753]">Rundown Acara Lengkap</h3>
          </div>
          <img
            src={scheduleImage}
            alt="Rundown Acara Ultimate Couple Experience"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
