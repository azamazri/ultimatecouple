import { Award, Heart, Briefcase } from "lucide-react";
import facilitatorImage from "@/assets/facilitator-photo.jpg";

export function Facilitator() {
  return (
    <section className="py-20 px-4 bg-[#184C38] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D7A753] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D7A753] opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[#D7A753] mb-6 text-4xl md:text-5xl font-bold">
            Our Fasilitator:
          </h2>
        </div>

        <div className="bg-[#F1E7D0] rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-[#D7A753]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D7A753] rounded-2xl transform rotate-3"></div>
                <img
                  src={facilitatorImage}
                  alt="Satia Pradana"
                  className="relative rounded-2xl w-full max-w-md object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-[#184C38]">
              <h3 className="text-3xl md:text-4xl mb-6 text-[#184C38]">
                Satia Pradana
              </h3>
              <ul className="space-y-4 text-lg md:text-xl">
                <li className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-[#D7A753] flex-shrink-0 mt-1" />
                  <span>Founder of Bisnishack Group</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#D7A753] flex-shrink-0 mt-1" />
                  <span>Founder of Media @kepalakeluarga.id</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#D7A753] flex-shrink-0 mt-1" />
                  <span>
                    Penulis Buku Cara Bahagia Membangun Superteam dan Couple
                    Life Alignment Specialist
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
