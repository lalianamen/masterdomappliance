# MasterDom Appliance Repair — Setup & Launch Guide

Трёхъязычный сайт (EN / RU / HY) для записи на ремонт техники в Ориндж Каунти.
Чистый статичный сайт + serverless-функции Vercel. Сборка не требуется.

---

## 1. Структура файлов

```
index.html              — сайт (главная, услуги, о нас, зона, контакты)
app.js                  — логика: языки, ZIP-фильтр, UTM, отправка заявок, чат
api/lead.js             — приём заявки и пересылка в Google Таблицу
api/chat.js             — чат-ассистент (через Claude API)
google-sheets-setup.gs  — код для вставки в вашу Google Таблицу
vercel.json             — заголовки безопасности / кэш
robots.txt, sitemap.xml — для поисковиков
```

---

## 2. Что нужно заменить (плейсхолдеры)

| Что | Где | Сейчас стоит |
|---|---|---|
| **Домен** | `index.html` (og:url, canonical, hreflang, schema), `robots.txt`, `sitemap.xml` | `masterdomappliance.com` |
| **Телефон** | `index.html` (шапка, контакты, футер, кнопки звонка), `app.js`, `api/chat.js` | `(714) 000-0000` → `tel:+17140000000` |
| **Email** | `index.html` (блок контактов, футер) | `hello@masterdomappliance.com` |
| **Номер регистрации BHGS** | `index.html` блок About + футер | сейчас «оформляется» |

Поиск/замена телефона: замените и читаемый вид `(714) 000-0000`, и tel-ссылку `+17140000000`.
Рекомендация: возьмите **местный номер 714 или 657** — это сигнал «свои» для OC.

---

## 3. Подключение Google Таблицы (ваша существующая)

Заявки с формы шлются в `api/lead.js`, а он пересылает их в вашу таблицу через
Google Apps Script. Один раз настроить:

1. Откройте вашу Google Таблицу → **Extensions → Apps Script**.
2. Удалите содержимое, вставьте весь код из `google-sheets-setup.gs`, сохраните.
3. Сверху нажмите ▶ и запустите функцию **`setupHeaders`** один раз
   (авторизуйте доступ). Появится вкладка **«Leads»** с готовыми колонками.
4. **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy → скопируйте **Web app URL**.
5. Этот URL положите в Vercel как переменную окружения `APPS_SCRIPT_URL` (см. ниже).

Колонки в таблице (под аналитику и автоматизацию):
`Timestamp · Trade · Service · Name · Phone · Address · ZIP · Zone Status ·
Language · Message · Source · Medium · Campaign · Form Source · Page URL · Referrer`

- **Trade** = всегда `Appliance` (когда добавите HVAC-сайт-близнец — он будет слать `HVAC` в ту же таблицу; одна таблица на оба трейда).
- **Zone Status** = `in` (в зоне) или `out` (вне зоны, но заявку сохраняем).
- **Source / Medium / Campaign** = откуда пришёл клиент (YouTube, Facebook, TikTok, Instagram, X, Google) — берётся из UTM-меток или реферера автоматически.

---

## 4. Переменные окружения в Vercel

Project → Settings → Environment Variables:

| Переменная | Значение | Зачем |
|---|---|---|
| `APPS_SCRIPT_URL` | Web app URL из шага 3 | заявки падают в таблицу |
| `ANTHROPIC_API_KEY` | ваш ключ Anthropic | работает чат-ассистент |

Без `APPS_SCRIPT_URL` сайт не сломается — заявки просто пишутся в логи Vercel.
Без `ANTHROPIC_API_KEY` чат вежливо отправит клиента на форму/телефон.

---

## 5. UTM-метки для рекламы (чтобы видеть, что работает)

Ставьте метки на ссылки в рекламе — и в таблице сразу видно источник:

```
https://masterdomappliance.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=fridge_spring
https://masterdomappliance.com/?utm_source=tiktok&utm_medium=video&utm_campaign=washer
https://masterdomappliance.com/?utm_source=google&utm_medium=cpc&utm_campaign=oven_oc
```

Если меток нет, сайт сам определит соцсеть по реферреру (facebook, tiktok,
instagram, youtube, twitter/x, google), иначе пишет `direct`.

Через 3–4 недели по колонкам **Source** + **Zone Status** будет видно, какой
канал и какой район дают больше качественных заявок — это и есть ваша личная
статистика по OC.

---

## 6. Зона обслуживания (ZIP-фильтр)

Список ZIP — в начале `app.js` (`SERVICE_ZIPS`). Сейчас это север/центр OC:
Santa Ana, Anaheim, Fullerton, Orange, Garden Grove, Buena Park, Westminster,
Tustin, Stanton. Чтобы расширить зону — просто добавьте ZIP в этот массив.

Логика «сначала проверь»: клиент вводит ZIP → если в зоне, форма открывается
(зелёное сообщение); если нет — мягкое сообщение, но заявку всё равно сохраняем
с пометкой `out`.

---

## 7. Перевод из тест-режима в боевой (после активации регистрации)

1. Удалите блок `<div class="test-banner">...</div>` в `index.html`.
2. В `app.js` в функции `submitForm` замените строку с `t.modalText` на `t.modalTextLive`
   (текст «спасибо» без упоминания тестового режима — он уже готов в словаре).
3. В блоке About и футере впишите реальный номер регистрации BHGS.
4. Снимите фразы «оформляется / in progress / ընթացքում» в текстах About/футера/чата.

---

## 8. Деплой

1. Залейте папку в Git-репозиторий (или прямо в Vercel).
2. В Vercel: New Project → импортируйте репозиторий → Deploy.
   Фреймворк: **Other**. Build command — пусто. Output — корень.
3. Привяжите домен. Готово.

---

## 9. На потом (по желанию)

- **Заявки из чата в таблицу.** Сейчас чат — разговорный (помогает и ведёт на
  форму), а структурированные заявки идут с формы. Можно научить ассистента
  по готовности отдавать заявку JSON-ом, который `app.js` отправит в `/api/lead`
  с пометкой `form_source: 'chat'` — колонка под это уже есть.
- **Google Business Profile с адресом в OC** — нужен для локального ранжирования
  именно по Ориндж Каунти (отдельная задача после запуска).
- **og-image.png** — добавьте картинку превью для соцсетей в корень.
