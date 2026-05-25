// /api/lead.js — receives a lead and forwards it to your existing Google Sheet
// via a Google Apps Script Web App URL stored in the APPS_SCRIPT_URL env var.
//
// Why through Apps Script: it lets us append rows to a Sheet you already own
// without putting any Google credentials in the website code.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const lead = req.body || {};

  // Basic shape guard — we still accept partials so we never drop a real lead.
  const row = {
    timestamp: lead.timestamp || new Date().toISOString(),
    trade: lead.trade || 'Appliance',
    service: lead.service || '',
    name: lead.name || '',
    phone: lead.phone || '',
    address: lead.address || '',
    zip: lead.zip || '',
    zone_status: lead.zone_status || '',     // in | out
    language: lead.language || '',
    message: lead.message || '',
    source: lead.source || 'direct',
    medium: lead.medium || 'none',
    campaign: lead.campaign || 'none',
    form_source: lead.form_source || 'form', // form | chat
    page_url: lead.page_url || '',
    referrer: lead.referrer || ''
  };

  const url = process.env.APPS_SCRIPT_URL;

  // If the Sheet isn't wired up yet, log and still return success so the
  // customer experience is never blocked. Check Vercel logs to see leads.
  if (!url) {
    console.log('[LEAD] (no APPS_SCRIPT_URL set yet) ->', JSON.stringify(row));
    return res.status(200).json({ ok: true, stored: false });
  }

  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row)
    });
    if (!r.ok) {
      console.error('[LEAD] Apps Script responded', r.status);
      return res.status(200).json({ ok: true, stored: false }); // don't block customer
    }
    return res.status(200).json({ ok: true, stored: true });
  } catch (err) {
    console.error('[LEAD] forward error:', err);
    // Never fail the customer; log for retry/inspection.
    console.log('[LEAD] FALLBACK ->', JSON.stringify(row));
    return res.status(200).json({ ok: true, stored: false });
  }
}
