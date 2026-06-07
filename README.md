# Bu mu Sen? 🎭

Kişiliğini analiz eden, sana en uygun film/dizi karakterini bulan web uygulaması.

## Kurulum

```bash
npm install
```

## .env.local dosyasına API key ekle

```
ANTHROPIC_API_KEY=sk-ant-...
```

## Çalıştır

```bash
npm run dev
```

Tarayıcıda aç: http://localhost:3000

## Deploy (Vercel)

```bash
git init
git add .
git commit -m "ilk commit"
git remote add origin GITHUB_REPO_URL
git push -u origin main
```

Sonra vercel.com'da GitHub repoyu bağla, ANTHROPIC_API_KEY environment variable olarak ekle.
