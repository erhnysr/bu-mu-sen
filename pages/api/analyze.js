import Anthropic from "@anthropic-ai/sdk";
import { characters } from "../../lib/characters";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { answers, lang = "tr" } = req.body;

  const prompt = `Sen bir kişilik analizi uzmanısın. Kullanıcının verdiği cevaplara göre aşağıdaki karakter listesinden EN UYGUN olanı seç ve neden seçtiğini açıkla.

Kullanıcının cevapları:
${JSON.stringify(answers, null, 2)}

Mevcut karakterler:
${characters.map(c => `- ${c.id}: ${c.name} (${c.show}) - Özellikler: ${c.traits.join(", ")}`).join("\n")}

SADECE JSON formatında yanıt ver, başka hiçbir şey yazma:
{
  "characterId": "karakter_id",
  "matchPercent": 85,
  "reason": "${lang === "tr" ? "Türkçe kısa açıklama (2 cümle)" : "Short English explanation (2 sentences)"}"
}`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      messages: [{ role: "user", content: prompt }],
    });

    const text = message.content[0].text.trim();
    const clean = text.replace(/```json|```/g, "").trim();
    const result = JSON.parse(clean);
    const character = characters.find(c => c.id === result.characterId);

    res.status(200).json({ ...result, character });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analiz yapılamadı" });
  }
}
