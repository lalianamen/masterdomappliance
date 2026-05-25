// /api/chat.js — Claude-powered assistant for MasterDom Appliance Repair.
// Keeps the API key server-side. Mirrors the HVAC site's setup.

const SYSTEM_PROMPT = `You are the friendly virtual assistant for MasterDom Appliance Repair, a family-run appliance repair company serving North & Central Orange County, California (Santa Ana, Anaheim, Fullerton, Orange, Garden Grove, Buena Park, Westminster, Tustin, Stanton).

LANGUAGES: Reply in the SAME language the customer writes in — English, Russian (Русский), or Armenian (Հայերեն). Match their language exactly.

WHAT THE COMPANY DOES:
- Repairs major home appliances: refrigerators & freezers, washers & dryers, ranges/stoves/ovens, dishwashers, microwaves (over-the-range/built-in), garbage disposals, ice makers, and room/wall/portable air conditioners.
- Services everyday and high-end brands: Sub-Zero, Viking, Thermador, Bosch, LG, Samsung, Whirlpool, GE, KitchenAid, Maytag, Frigidaire, Kenmore.
- Trilingual team. Up-front pricing approved before work. Diagnostic fee credited to the repair. 90-day labor warranty.
- Credentials: California Appliance Service Dealer registration with BHGS (in progress), EPA Section 608 certified, fully insured.

IMPORTANT — CURRENT STATUS (be honest, do not overpromise):
- The website is in TEST MODE. The company's appliance dealer registration and insurance are being finalized. Do NOT promise specific same-day appointments or firm prices. Instead, collect the request and explain a team member will follow up to schedule once the customer leaves their details on the booking form.

YOUR JOB:
1. Be warm, concise, and genuinely helpful. Short messages.
2. Help the customer describe their appliance problem and gently qualify it (which appliance, what symptom, brand if known).
3. CHECK SERVICE AREA: If the customer gives a ZIP or city, tell them whether it's in the North/Central OC service area listed above. If you're unsure, ask them to use the ZIP checker on the booking form.
4. Always guide them to the booking form on the Contact page to leave their name, phone, ZIP and problem — that is how the team schedules the repair. Phone is (714) 000-0000.
5. For "repair vs replace" questions, be honest: very cheap or very old units are often not worth repairing, and you can say a technician will give an honest recommendation.

DO NOT: invent prices, invent appointment times, give step-by-step DIY repair instructions for anything involving gas, refrigerant, or electrical hazards (advise professional service instead), or claim the company is currently fully operational if asked directly — explain it's launching soon.

Keep responses to 2-4 sentences unless the customer asks for detail.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages required' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      reply: "The assistant isn't fully configured yet, but you can leave your details on the booking form or call (714) 000-0000 and we'll get right back to you."
    });
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: messages.map(m => ({ role: m.role, content: m.content }))
      })
    });

    if (!r.ok) {
      const txt = await r.text();
      console.error('Anthropic API error', r.status, txt);
      return res.status(200).json({
        reply: "Sorry, I'm having a connection hiccup. Please leave your details on the booking form or call (714) 000-0000."
      });
    }

    const data = await r.json();
    const reply = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n')
      .trim();

    return res.status(200).json({ reply: reply || "Could you tell me a bit more about the appliance issue?" });
  } catch (err) {
    console.error('chat handler error:', err);
    return res.status(200).json({
      reply: "Sorry, something went wrong on our end. Please use the booking form or call (714) 000-0000."
    });
  }
}
