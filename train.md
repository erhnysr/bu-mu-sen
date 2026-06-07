# Bu mu Sen? — Proje Bağlamı

## Proje Nedir?
"Bu mu Sen?" kullanıcının kişiliğini 7 soruyla analiz eden ve en uygun film/dizi karakterini bulan bir web uygulamasıdır.

## Teknik Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- AI: Claude API (Anthropic)
- Deploy: Vercel
- Dil: Türkçe + İngilizce

## Kullanıcı Akışı
1. Kullanıcı siteye girer
2. 7 kişilik soruya cevap verir (çoktan seçmeli)
3. AI cevapları analiz eder
4. Kullanıcıya en uygun karakter açıklamasıyla gösterilir
5. Sonuç sosyal medyada paylaşılabilir

## Sorular (7 adet)
1. Bir hafta sonu için ideal planın ne?
2. Zor bir kararla karşılaştığında ne yaparsın?
3. Arkadaşların seni nasıl tanımlar?
4. En büyük korkun nedir?
5. Hayatta en çok neye değer verirsin?
6. Bir süper gücün olsa ne olurdu?
7. İlk tepkin genellikle ne olur?

## Karakter Havuzu (20+ karakter)
- Walter White (Breaking Bad)
- Tony Stark (Marvel)
- Hermione Granger (Harry Potter)
- The Joker (DC)
- Daenerys Targaryen (GoT)
- Sherlock Holmes
- Forrest Gump
- Elizabeth Bennet (Pride & Prejudice)
- Don Draper (Mad Men)
- Tyrion Lannister (GoT)
- ve daha fazlası...

## Tasarım Vizyonu
- Karanlık, sinematik tema
- Film afişi hissi
- Animasyonlu geçişler
- Paylaşılabilir sonuç kartı (OG image)

## Dosya Yapısı
- pages/index.js — Ana sayfa
- pages/quiz.js — Soru sayfası
- pages/result.js — Sonuç sayfası
- pages/api/analyze.js — AI analiz endpoint
- components/ — UI bileşenleri
- lib/questions.js — Soru veritabanı
- lib/characters.js — Karakter veritabanı
