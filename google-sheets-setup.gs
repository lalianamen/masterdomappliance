/**
 * MasterDom Appliance Repair — Google Sheet lead receiver
 * ----------------------------------------------------------------
 * Paste this into YOUR EXISTING Google Sheet:
 *   1. Open the Sheet → Extensions → Apps Script
 *   2. Delete whatever is there, paste ALL of this, Save.
 *   3. Run setupHeaders() once (top toolbar ▶) and authorize when asked.
 *      This creates a tab called "Leads" with the right column headers.
 *   4. Deploy → New deployment → type "Web app"
 *        - Execute as: Me
 *        - Who has access: Anyone
 *      Click Deploy, copy the Web app URL.
 *   5. Put that URL into Vercel as the env var APPS_SCRIPT_URL (see SETUP.md).
 *
 * Each lead posted from the website is appended as a new row.
 * Columns match exactly what the site sends (form + chat).
 */

var SHEET_NAME = 'Leads';

var HEADERS = [
  'Timestamp', 'Trade', 'Service', 'Name', 'Phone', 'Address', 'ZIP',
  'Zone Status', 'Language', 'Message',
  'Source', 'Medium', 'Campaign', 'Form Source', 'Page URL', 'Referrer'
];

function setupHeaders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  sheet.clear();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) { sheet = ss.insertSheet(SHEET_NAME);
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
      sheet.setFrozenRows(1);
    }

    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      d.timestamp || new Date().toISOString(),
      d.trade || 'Appliance',
      d.service || '',
      d.name || '',
      d.phone || '',
      d.address || '',
      d.zip || '',
      d.zone_status || '',
      d.language || '',
      d.message || '',
      d.source || '',
      d.medium || '',
      d.campaign || '',
      d.form_source || '',
      d.page_url || '',
      d.referrer || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: lets you open the Web app URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('MasterDom Appliance lead endpoint is live.');
}
