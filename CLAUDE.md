# Bu mu Sen? — Proje Dokümantasyonu

Canlı URL: https://bu-mu-sen.vercel.app
GitHub: https://github.com/erhnysr/bu-mu-sen

## Teknik Stack
- Next.js 14.2.3
- Tailwind CSS
- Anthropic Claude API (claude-sonnet-4-6)
- Vercel deploy
- GitHub: erhnysr/bu-mu-sen

## Local Çalıştırma
cd ~/Documents/bu-mu-sen
npm run dev
Tarayıcıda: http://localhost:3000

## Değişiklik Deploy Etme
cd ~/Documents/bu-mu-sen
git add .
git commit -m "açıklama"
git push

## Proje Yapısı
- pages/index.js — Ana sayfa
- pages/quiz.js — 7 soruluk test
- pages/result.js — Sonuç sayfası
- pages/api/analyze.js — Claude API endpoint
- lib/questions.js — Sorular
- lib/characters.js — Karakterler
- .env.local — ANTHROPIC_API_KEY (gizli, GitHub'a gitmiyor)

## Önemli
- API key: console.anthropic.com (Erhan'ın hesabı, 5 dolar kredi)
- Her test ~0.001 dolar
- .env.local GitHub'a gitmiyor, Vercel'de environment variable olarak tanımlı
