import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  const { lang = "tr" } = router.query;
  const [result, setResult] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("result");
    if (data) setResult(JSON.parse(data));
    else router.push("/");
  }, []);

  if (!result) return null;

  const { character, matchPercent, reason } = result;

  function share() {
    const text = lang === "tr"
      ? `Ben ${character.name} karakteriyim! %${matchPercent} eşleşme 🎭 bumussen.vercel.app`
      : `I am ${character.name}! ${matchPercent}% match 🎭 bumussen.vercel.app`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert(lang === "tr" ? "Panoya kopyalandı!" : "Copied to clipboard!");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Arka plan rengi karaktere göre */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ background: `radial-gradient(circle at center, ${character?.color || "#333"}, transparent 70%)` }} />

      <div className="z-10 text-center max-w-lg">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
          {lang === "tr" ? "Senin Karakterin" : "Your Character"}
        </p>

        {/* Emoji büyük */}
        <div className="text-8xl mb-6">{character?.emoji}</div>

        {/* Eşleşme yüzdesi */}
        <div className="text-gray-400 text-sm mb-2">%{matchPercent} {lang === "tr" ? "eşleşme" : "match"}</div>

        {/* Karakter adı */}
        <h1 className="text-5xl md:text-6xl font-black mb-2">{character?.name}</h1>
        <p className="text-gray-500 text-lg mb-8">{character?.show}</p>

        {/* Açıklama */}
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          {character?.description?.[lang] || character?.description?.tr}
        </p>

        {/* AI'ın özel yorumu */}
        {reason && (
          <p className="text-gray-500 text-sm italic mb-10">"{reason}"</p>
        )}

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={share}
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition"
          >
            {lang === "tr" ? "Paylaş 🔗" : "Share 🔗"}
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 border border-gray-600 text-gray-400 font-bold rounded-full hover:border-white hover:text-white transition"
          >
            {lang === "tr" ? "Tekrar Dene" : "Try Again"}
          </button>
        </div>
      </div>
    </main>
  );
}
