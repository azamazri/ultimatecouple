import { Shield, CheckCircle } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#D9D4C9] to-[#F1E7D0]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#184C38] to-[#2a6d50] rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-[#D7A753] relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D7A753] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D7A753] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-[#D7A753] p-4 rounded-full">
                <Shield className="w-12 h-12 text-[#184C38]" />
              </div>
            </div>

            <h2 className="text-[#D7A753] text-center mb-6 text-4xl md:text-5xl font-bold">
              Garansi Ketulusan & Kepuasan
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-[#F1E7D0] text-center text-lg leading-relaxed mb-4">
                Kami percaya pengalaman ini akan meninggalkan dampak yang nyata. Tapi jika setelah mengikuti seluruh rangkaian acara kamu merasa tidak mendapatkan makna atau perubahan apapun, kami akan mengembalikan <span className="text-[#D7A753]">100% investasi kamu</span>, tanpa syarat.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 text-[#D7A753]">
              <CheckCircle className="w-6 h-6" />
              <p className="text-lg italic">
                Ya, kami seyakinnya itu bahwa cinta dan kesadaran akan tumbuh di acara ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
