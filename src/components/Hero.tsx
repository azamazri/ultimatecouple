import { Calendar, MapPin, Clock } from 'lucide-react';
import heroImage from "@/assets/hero-poster.png";

export function Hero() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src={heroImage}
          alt="Ultimate Couple Experience - Love, Harmony and Exponential Growth for Couple"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Event Info Bar */}
      <div className="bg-[#184C38] py-6 border-t-4 border-[#D7A753]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-[#F1E7D0]">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 text-[#D7A753]" />
              <div>
                <p className="text-sm opacity-80">Tanggal</p>
                <p className="text-[#D7A753]">22–23 November 2025</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-[#D7A753]" />
              <div>
                <p className="text-sm opacity-80">Lokasi</p>
                <p className="text-[#D7A753]">Yogyakarta</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-[#D7A753]" />
              <div>
                <p className="text-sm opacity-80">Durasi</p>
                <p className="text-[#D7A753]">2 Hari 1 Malam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
