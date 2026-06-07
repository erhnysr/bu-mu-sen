import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [lang, setLang] = useState("tr");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Arka plan efekti */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="z-10 text-center px-6 max-w-2xl">
        {/* Dil seçici */}
        <div className="flex justify-center gap-4 mb-12">
          <button onClick={() => setLang("tr")} className={`text-sm px-4 py-1 rounded-full border transition ${lang === "tr" ? "border-white text-white" : "border-gray-600 text-gray-500"}`}>TR</button>
          <button onClick={() => setLang("en")} className={`text-sm px-4 py-1 rounded-full border transition ${lang === "en" ? "border-white text-white" : "border-gray-600 text-gray-500"}`}>EN</button>
        </div>

        {/* Başlık */}
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
          {lang === "tr" ? "Kişilik Testi" : "Personality Quiz"}
        </p>
        <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none" style={{ fontFamily: "'Georgia', serif" }}>
          {lang === "tr" ? "Bu mu\nSen?" : "Is This\nYou?"}
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          {lang === "tr"
            ? "7 soruyu cevapla, hangi efsanevi karakter olduğunu öğren."
            : "Answer 7 questions, discover which iconic character you are."}
        </p>

        <button
          onClick={() => router.push({ pathname: "/quiz", query: { lang } })}
          className="group relative px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          {lang === "tr" ? "Başla →" : "Start →"}
        </button>

        <p className="text-gray-600 text-sm mt-8">
          {lang === "tr" ? "7 soru · 2 dakika · Ücretsiz" : "7 questions · 2 minutes · Free"}
        </p>
      </div>
    </main>
  );
}
