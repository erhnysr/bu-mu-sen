import { useState } from "react";
import { useRouter } from "next/router";
import { questions } from "../lib/questions";

export default function Quiz() {
  const router = useRouter();
  const { lang = "tr" } = router.query;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  async function handleAnswer(option) {
    const newAnswers = [...answers, { question: current + 1, trait: option.trait, answer: option[lang] || option.tr }];

    if (current + 1 < questions.length) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    } else {
      setLoading(true);
      try {
        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: newAnswers, lang }),
        });
        const data = await res.json();
        localStorage.setItem("result", JSON.stringify(data));
        router.push({ pathname: "/result", query: { lang } });
      } catch (e) {
        alert("Bir hata oluştu, tekrar dene.");
        setLoading(false);
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="text-6xl mb-8 animate-spin">🎭</div>
        <p className="text-gray-400 text-lg">
          {lang === "tr" ? "Karakterin analiz ediliyor..." : "Analyzing your character..."}
        </p>
      </div>
    );
  }

  if (!q) return null;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800">
        <div className="h-full bg-white transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-xl w-full">
        <p className="text-gray-500 text-sm mb-8 text-center">
          {current + 1} / {questions.length}
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center leading-snug">
          {q[lang] || q.tr}
        </h2>

        <div className="space-y-4">
          {q.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(opt)}
              className="w-full text-left px-6 py-4 border border-gray-700 rounded-xl hover:border-white hover:bg-white hover:text-black transition-all duration-200 text-gray-300 hover:text-black font-medium"
            >
              {opt[lang] || opt.tr}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
