# NeckReset — Sourcing Raw Log (полный лог кандидатов)

**Дата:** 2026-07-11
**Продукт:** Cervical traction device, **каркасный «cradle»** (лежачий, пассивное вытяжение весом головы, регулировка угла) — **НЕ надувной**
**Retail-таргет:** $44.99 / $69.99 / $79 · **Landed-таргет:** ≤ $15 (margin ≥3x) · **Рынки:** UK/EU/US
**Курс для пересчёта:** ¥1 ≈ $0.14 (¥7.15 = $1)

---

## 0. Методологическая заметка (важно для оценки достоверности)

Прямой скрап листингов заблокирован анти-ботом (подтверждено в этой сессии):
- `alibaba.com/showroom/*` → 302 redirect на `error404.htm`
- `alibaba.com/product-detail/*` → пустое тело (JS-render)
- `*.en.alibaba.com` company overview → пустое тело
- `aliexpress.com/item/*` → HTTP 503 / пустое тело
- `1688.com/chanpin/*` → «punishment page»

**Fallback (по инструкции брифа):** данные собраны из индексированных сниппетов web-поиска + **Made-in-China.com** (карточки товара фетчатся корректно и показывают FOB/MOQ/годы/статус верификации). Точные цены Alibaba/1688 без залогина недоступны → помечено **«требуется запрос у продавца»**, не выдумано.

---

## 1. КЛЮЧЕВАЯ НАХОДКА РЫНКА (определяет рекомендацию)

Структура предложения по типам «cradle»:

| Тип | Регулировка угла | Цена FOB | Доступность | Проходит спеку NeckReset? |
|---|---|---|---|---|
| **Литой foam-wave** (RESTCLOUD-клон) | ❌ фиксированная кривизна | **$1.5–8** | 🟢 огромная | ⚠️ по цене/типу — да; по регулировке (фильтр 15.1) — **нет** |
| **Надувной airbag «3 уровня»** | ✅ (но воздухом+помпой) | $30–38 | 🟢 большая | ❌ отклонён (надувной) |
| **Жёсткий ABS-каркас с мех. регулировкой** | ✅ 2–3 положения механически | $ — треб. запрос | 🔴 узкая ниша | ✅ да — но supply тонкий, чаще OEM |

**Вывод:** дешёвый off-the-shelf cradle ($2–6) — это **литой foam без механической регулировки**. «Регулируемые» массово = **надувные** (отклонены). Жёсткий каркас с механической регулировкой угла (2–3 положения) — редкость, реалистичный путь = **OEM/ODM** или отдельный запрос котировок. Это прямо влияет на фильтр 15.1 (клейм регулировки в креативе должен существовать в товаре).

**Нюанс-надежда:** у Topmedi (кандидат #1) заявлен диапазон высоты сердечника **10.1–15 см** — возможно, это съёмная/двухвысотная вставка = частичная регулировка. Требует подтверждения (см. открытые вопросы).

**Заметка по референсам:** из трёх конкурентов заказчика — **KyroLabs CerviFlex по факту надувной носимый воротник (26°, помпа)**, не cradle; **VivoSleep — реальный padded cradle** (Glisson-loop, вытяжение через ремень). Т.е. часть «конкурентов cradle» на деле другой форм-фактор.

---

## 2. КАНДИДАТЫ — ПОЛНЫЙ СПИСОК (21 шт: 15 в работу + 6 отсев)

### A. Верифицированные с полной котировкой (Made-in-China, карточки прочитаны)

**#1 — GUANGZHOU TOPMEDI CO., LTD.**
- Продукт: Neck Shoulder Stretcher Relaxer Cervical Chiropractic Traction Massage Pillow (модель **TRA692**)
- FOB: **$4.00–6.00**/шт · MOQ: **100**
- Верификация: **Diamond Member с 2016** (~9 лет), Audited Supplier (сторонний аудит) · Guangdong
- Спека: PU (полиуретан), вес 290 г, габарит 25×17.5×12.5 см, высота сердечника **10.1–15 см**, цвета blue/black/pink, форма «wavy»
- Тип: литой foam-wave, кривизна фиксированная (регулировку уточнять — см. диапазон высоты)
- Источник: made-in-china.com (product cEkYUVTARrWl)

**#2 — HEFEI MERRYBODY SPORTS CO., LTD.**
- Продукт: EVA/TPE Foam Neck Stretcher / Neck & Shoulder Relaxer
- FOB: **$1.56–2.95**/шт · MOQ: **500**
- Верификация: **Diamond Member с 2008** (~18 лет!), Audited Supplier · Anhui
- Спека: TPE/PVC foam, эко-материалы; деталь по конкретной модели — ограниченная (каталожный вид)
- Тип: литой foam, фиксированный
- Источник: merrybody.en.made-in-china.com

**#3 — QINGDAO GOFAI RUBBER & PLASTIC PRODUCTS CO., LIMITED**
- Продукт: Neck Stretcher / Cervical Traction Device / Posture Corrector Chiropractic Pillow
- FOB: **$8.50** (50–999 шт) / **$7.50** (1000+ шт) · MOQ: **50** (самый низкий среди котированных)
- Верификация: **Diamond Member с 2018** (~7 лет), Audited Supplier, «High Repeat Buyers Choice» · Shandong
- Спека: Silicone Rubber / PU Foam
- Тип: литой, фиксированный
- Источник: gofairubber.en.made-in-china.com

**#4 — Dongguan Julisheng New Materials Technology Co., Ltd.** *(OEM/ODM-путь)*
- Продукт: Neck and Shoulder Stretcher and Relaxer (PU foam, кастом плотность)
- FOB: **требуется запрос** · MOQ: **требуется запрос** (заявлен «low MOQ»)
- Верификация: PU-foam фабрика, полный OEM/ODM (форма, размер, плотность, логотип, цвет, упаковка, разработка образца по чертежу) · Guangdong
- Контакт: keenhu@custompolyurethanefoam.com · +86-769-81866395 / +86-13686619354
- Тип: **под заказ** — можно заложить нужную геометрию/жёсткость; путь к соответствию фильтру 15.1
- Источник: custompolyurethanefoam.com

### B. Alibaba — названы, MOQ известен, цена по запросу

**#5 — Shijiazhuang Senxiao Medical Technology Co., Ltd.** — MOQ **1**, ISO-сертиф. производство, Hebei · цена: треб. запрос · senxiao.en.alibaba.com
**#6 — Huizhou Youmei Technology Co., Ltd.** — MOQ **1**, ~3 года на Alibaba, Guangdong (наколенники/массажёры/пояса) · цена: треб. запрос · umeitech.en.alibaba.com
**#7 — Xiamen Yiyuan Health Technology Co., Ltd.** — MOQ **1**, verified, Fujian · цена: треб. запрос
**#8 — Zhengzhou Cebing Trading Co., Ltd.** — neck pillow, MOQ **10**, Henan · цена: треб. запрос
**#9 — Zazayou Technology Co., Ltd.** — MOQ **1** · цена: треб. запрос
**#10 — Xiamen EMOKA Health Science & Technology Co., Ltd.** — MOQ **500**, Fujian · цена: треб. запрос

### C. Платформенные листинги — подтверждают существование товара и ценовые границы

**#11 — AliExpress item 1005002944689148** — Neck Shoulder Stretcher Cervical Traction Pillow — **$7.32** (−41%, ориг. ~$12.4), 1 шт, отгрузка CN. Арочный cradle. → верхняя граница dropship-цены.
**#12 — AliExpress item 1005004448714576** — Neck Shoulder Stretcher Cervical Chiropractic — цена на карточке (заблокирована), товар существует.
**#13 — eBay 256199822280 / 267095468680** — Neck & Shoulder Relaxer Cervical Traction — итог ~**$14.39–14.99** с доставкой (US/CN продавцы). → розничный потолок Ali-клона.
**#14 — 1688/Yiwugo «脖子靠枕» (Yiwu Yile Home Products и др.)** — от **¥16.5 (~$2.30)**, поддержка 一件代发 (dropship 1 шт), 48ч отгрузка. → пол цены 1688.
**#15 — RESTCLOUD (Amazon B07QSFJ8S2)** — брендовый архетип cradle, retail ~**$20–22**. → доказывает, что наш $44.99 требует сильного бренд-позиционирования (premium-надбавка ~2x к дженерику).

### D. ОТСЕВ — не тот тип (bench / electric / inflatable)

| # | Продавец | Продукт | Цена | Причина отсева |
|---|---|---|---|---|
| R1 | Henan Eminent Medical Devices | Стретчинг-**кровать** для коррекции позвоночника | $120–180, MOQ 3 | Не cradle; вес/габарит вне логистики |
| R2 | Guangdong Hongyang Medical | Электро-тракция + нагрев (My-S016c-E) | $5,802–7,252 | Электрический аппарат, не наш продукт |
| R3 | Guangzhou Umy Medical Equipment | Беспроводная электро-тракц. машина | $3,500–3,800 | Электрический аппарат |
| R4 | Yongkang Ruibu Industry & Trade | Bench cervical traction (скамья) | MOQ 200 | Форм-фактор «скамья», не cradle |
| R5 | Sichuan Shunchang Electronic Technology | Airbag-тракция | MOQ 150 | **Надувной** (отклонён спекой) |
| R6 | (Alibaba, безымянный) | Airbag support 3-level | $36.10–38.50, MOQ 5 | **Надувной** (отклонён спекой) |

---

## 3. ПРОГОН ЧЕРЕЗ 5 ГЕЙТОВ (по кандидатам A + релевантным B)

| Гейт | Topmedi #1 | Merrybody #2 | Gofai #3 | Julisheng #4 | Senxiao #5 |
|---|---|---|---|---|---|
| **1. Halal** (физ. товар, без спирта/свинины) | ✅ PU/пластик | ✅ TPE/EVA | ✅ силикон/PU | ✅ PU | ✅ |
| **2. Margin** (landed ≤$15 → ≥3x к $44.99) | ✅ FOB $4–6 → landed ~$8–11 | ✅ FOB $1.6–3 → landed ~$5–8 | ✅ FOB $7.5–8.5 → landed ~$11–14 (впритык) | ✅ ожид. $3–6 | ⚠️ треб. цену |
| **3. MOQ** (dropship 1 / опт ≤100) | ✅ 100 | ⚠️ 500 (>100, опт-only) | ✅ 50 | ⚠️ треб. запрос | ✅ 1 |
| **4. Verifiable seller** (>6 мес / верифиц.) | ✅ Diamond 9 лет, Audited | ✅ Diamond 18 лет, Audited | ✅ Diamond 7 лет, Audited | ⚠️ фабрика, аудит не подтв. | ✅ ISO, Alibaba |
| **5. Shipping** (UK/EU доступен, срок) | ⚠️ CN-origin, EU/US-склад не заявлен | ⚠️ CN-origin | ⚠️ CN-origin | ⚠️ CN-origin | ⚠️ CN-origin |

**Все 5 базовых гейтов** проходят Topmedi, Gofai, Merrybody (у Merrybody гейт MOQ — «опт-only», для пилота хуже). Senxiao проходит по MOQ/верификации, но цена неизвестна.

⚠️ **Доп-фильтр заказчика 15.1 (регулировка угла 2–3 положения)** — по умолчанию **НЕ проходит ни один литой-foam кандидат** (кривизна фиксированная). Проходит только: (а) Topmedi — **если** диапазон 10.1–15 см = дискретная регулировка (уточнить), или (б) OEM-версия через Julisheng/Topmedi. Это ключевой пункт для решения — вынесен в shortlist.

---

## 4. СКОРИНГ (0–100; веса: FOB 35 · верификация 20 · доставка 15 · спека 15 · кастом 10 · коммуникация 5)

| Продавец | FOB /35 | Вериф /20 | Доставка /15 | Спека /15 | Кастом /10 | Комм /5 | **Итог** |
|---|---|---|---|---|---|---|---|
| **Topmedi #1** | 30 | 18 | 9 | 14 | 7 | 3 | **81** |
| **Merrybody #2** | 34 | 19 | 9 | 9 | 7 | 3 | **81** |
| **Gofai #3** | 24 | 16 | 9 | 10 | 8 | 3 | **70** |
| **Julisheng #4** (OEM, провизорно) | 24* | 12 | 9 | 9 | 10 | 4 | **68*** |

\* Julisheng: FOB и часть баллов провизорны (цена по запросу). При хорошей котировке и подтверждённом аудите — топ-претендент на OEM-версию с регулировкой.

Разрыв Topmedi/Merrybody — ничейный по баллам; **Topmedi выше по MOQ (100 vs 500) и качеству спеки → рекомендуется #1**. Merrybody — лучший FOB и стаж, но MOQ 500 = только под уверенный опт.

---

## 5. ИСТОЧНИКИ

- Made-in-China: [Topmedi TRA692](https://medical-solutions.en.made-in-china.com/product/cEkYUVTARrWl/China-Neck-Shoulder-Stretcher-Relaxer-Cervical-Chiropractic-Traction-Device-Massage-Pillow-for-Pain.html) · [Gofai](https://gofairubber.en.made-in-china.com/product/KwYGjyxECWku/China-Neck-Stretcher-for-Pain-Relief-Trobing-Cervical-Neck-Traction-Device-for-Neck-Relax-Posture-Corrector-Cervical-Spine-Alignment-Chiropractic-Pillow-Shoulder.html) · [Merrybody](https://merrybody.en.made-in-china.com/product/xJmrbXSvYBVf/China-EVA-Foam-Neck-Stretcher-for-Neck-Pain-Relief-Neck-and-Shoulder-Relaxer.html) · [Julisheng OEM](https://www.custompolyurethanefoam.com/medical-pu-foam/neck-and-shoulder-relaxer/neck-and-shoulder-stretcher-and-relaxer.html)
- Alibaba (заблок. скрап, имена из выдачи): [showroom neck-stretcher](https://www.alibaba.com/showroom/neck-stretcher.html) · [Senxiao](https://senxiao.en.alibaba.com/) · [Youmei](https://umeitech.en.alibaba.com/)
- AliExpress: [item 1005002944689148 ($7.32)](https://www.aliexpress.com/item/1005002944689148.html) · [item 1005004448714576](https://www.aliexpress.com/item/1005004448714576.html)
- Референсы: [RESTCLOUD Amazon](https://www.amazon.com/Shoulder-Cervical-Traction-Alignment-Chiropractic/dp/B07QSFJ8S2) · [KyroLabs (надувной!)](https://www.kyrolabs.co/products/kyro-labs-cervical-traction-device) · [VivoSleep (cradle)](https://vivosleep.com/products/vivosleep-cervical-neck-traction-device)
- CJ Dropshipping: каталог Health/Beauty есть, точной карточки cradle не индексировано → **нужен sourcing request** к CJ.
