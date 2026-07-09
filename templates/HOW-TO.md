# HOW-TO — как собрать промпт: playbook (угол) + craft (рендер) → модель

Мост между тремя слоями движка. Читается вместе с `/playbook/INDEX.md` и `/craft/00-universal-craft.md`.

## Три слоя (держим раздельно)
1. **СТРАТЕГИЯ/УГЛЫ** → `/playbook/` — ЧТО говорим и КОМУ (угол, JTBD, PAS/AIDA, оффер). Моё, наружу не идёт.
2. **CRAFT** → `/craft/` — КАК отрендерить убедительно (модельная специфика + universal-craft). MIT, `smixs/visual-skills`.
3. **МОДЕЛИ** → Seedance / Veo / Kling / Sora / Nano Banana (позже, через KIE). Сейчас промпты собираем, вызовы НЕ делаем.

## Конвейер сборки (7 шагов)
1. **Товар → JTBD** (`playbook §1.5`): выпиши функциональную/эмоциональную/социальную работу + тревоги найма.
2. **Выбери угол** (`playbook §3.4`): клетка матрицы «аудитория × драйвер». Один угол = один креатив.
3. **Копи-каркас** (`playbook §3.3`): PAS для холодного трафика, AIDA для полного сценария, BAB для lifestyle, FAB для блока фич.
4. **Craft-скелет по модели**: image → `craft/nano-banana.md` (Subject+Action+Location+Composition+Style);
   видео → `craft/seedance.md` (6-step или 11-block).
5. **Вклей обязательные блоки** из `craft/00-universal-craft.md`: IMPERFECTION (всегда) + SKIN-REALISM (если есть человек).
6. **Прогони чеклист-аудит U12** (низ `00-universal-craft.md`): weight-at-start, позитивные формулировки, явная геометрия, ≥3 факта/шот.
7. **ХАЛЯЛЬ/ЧЕСТНОСТЬ-ФИЛЬТР** (`playbook §15.5`, блоки А–Д) — по готовому промпту. Один провал = доработка ДО генерации.

> Правило движка: **ни один промпт не уходит в модель без пройденного фильтра §15.5.**

---

# Пример А — статичный image-ad (Nano Banana)

**Товар:** многоразовый роликовый съёмник шерсти для дивана (reusable pet-hair remover). Реальный товар, реальное свойство: липкий валик снимает шерсть и надевается обратно, моется водой.

**Слой 1 — стратегия (из playbook):**
- JTBD (`§1.5`): функциональная — убрать шерсть с дивана за секунды; эмоциональная — не стыдно перед гостями; социальная — «у меня чисто, хоть и кот».
- Угол (`§3.4`): аудитория = владельцы кошек/собак, живущие с диваном; драйвер = боль «шерсть повсюду перед приходом гостей».
- Каркас = **PAS** (`§3.3`): Problem (диван в шерсти) → Agitate (гости через час) → Solve (валик за 10 сек).
- Оффер честный: показываем то, что валик реально делает. Никаких «стоп покупать липкие ролики-одноразки».

**Слой 2 — craft:** `nano-banana.md` (Subject+Action+Location+Composition+Style, без mm-чисел) + IMPERFECTION + SKIN-REALISM (в кадре рука/человек) + text-rendering для оффера + позитивный фрейминг + явная геометрия (`00-universal-craft` P2, P3).

**Готовый промпт (Nano Banana, 4:5, e-commerce hero):**
```
Create a realistic lifestyle product photo for a pet-hair remover ad.

A woman in her early 30s runs a reusable lint-style roller over a grey fabric
sofa cushion, lifting a visible clump of cat hair onto the roller. Her hand and
forearm are in frame — visible skin pores on the back of the hand, uneven skin
tone, faint natural sheen, a few fine hairs catching the light. A calm ginger
cat sits on the far right third of the frame, slightly out of focus.

Setting: bright living room, soft daylight from a window on the left, mild
overexposure where the light hits the sofa arm. Fine sensor grain in the shadows,
subtle wide-angle lens distortion at the edges, slightly off-center framing.
The roller and the cleaned strip of sofa are the sharpest elements.

Text: "10 seconds. Fur gone." in heavy blocky sans-serif, white, lower third,
left-aligned. Small line below: "washable · reusable" in thin weight, #e0e0e0.

Composition: sofa fills lower-left two thirds, empty clean space upper right for
the text to breathe. Mood: effortless, honest, everyday.
Format: 4:5.
```

**Прогон honesty/halal-фильтра §15.5:**
- **А Правда:** ✅ демо показывает то, что товар реально делает (снимает шерсть); «10 seconds» — реалистично для валика, не завышенный клейм; нет фейковых before/after, нет выдуманных отзывов.
- **Б Деньги:** ✅ в креативе нет цен/скидок/BNPL — нечего проверять; зачёркнутых цен нет.
- **В Срочность:** ✅ никаких таймеров/«осталось 1» — их нет в кадре.
- **Г Достоинство:** ✅ нет стыда/страха/эксплуатации; «не стыдно перед гостями» подано как выгода, не унижение; визуал скромный (женщина одета обычно) — подходит под халяль-рынок.
- **Д Комплаенс:** ✅ нет брендов/лицензионных персонажей/IP; товар-дженерик; порода кота не брендирована; текст оригинальный.
- **Вердикт: ПРОШЁЛ.** Можно генерить.

---

# Пример Б — 8-сек UGC-видео (угол → still → i2v)

**Товар:** тот же съёмник шерсти. Формат UGC: «сняла на телефон, показываю подруге».

**Слой 1 — стратегия:**
- Угол (`§3.4`): аудитория = мама-хозяйка кошки; драйвер = экономия времени + «перед гостями».
- Каркас = **PAS** сжатый в 8 сек: 0–2с Problem (шерсть крупным планом) → 2–4с Agitate (взгляд на часы/дверь) → 4–8с Solve (валик очищает + довольное лицо).
- Хук первых 2–3 сек (`§3.1`): стоп-скролл = крупный план дивана в шерсти + рука тянется.

**Слой 2 — craft, двухэтапно:**

### Этап 1 — STILL (первый кадр, Nano Banana)
Генерим стартовый кадр для i2v. Тот же craft, вертикаль 9:16, момент «рука с валиком у дивана в шерсти»:
```
Create a vertical UGC-style phone photo (9:16).
A woman's hand holds a reusable pet-hair roller just above a grey sofa cushion
covered in cat hair. Visible pores and natural skin sheen on the hand, a couple
of fine hairs on the wrist. Handheld phone look: slight motion blur, mild
overexposure near the window, fine grain, off-center framing, edges soft.
Bright living room, daylight from the left. The furry sofa fills the lower frame.
Mood: candid, real, "filmed on a phone". Format: 9:16.
```

### Этап 2 — I2V (оживление, Seedance, 6-step)
**Правило i2v (`seedance.md §13`): НЕ описываем то, что уже видно на кадре — только движение и камеру.** Иначе identity drift.
```
Motion. The hand rolls the pet-hair roller down the sofa cushion in one smooth
pass, lifting a visible clump of fur; then the woman glances up toward the door
and gives a small satisfied nod.
Camera. Handheld, slight natural shake, starts tight on the roller then tilts up
to her face on the final beat. Wide phone framing.
Lighting. Same daylight from the left, mild highlight bloom on the sofa arm.
Environment. Living room, quiet.
Audio. soft roller peel sound, faint room tone, no music.
Style. authentic UGC phone footage, not polished.
Final image. ends on her face, a quick genuine half-smile, the clean strip of
sofa visible beside her.
```
(IMPERFECTION уже вшит в still и в motion/camera; final-image названо — `00-universal-craft` P8.)

**Прогон honesty/halal-фильтра §15.5:**
- **А Правда:** ✅ один проход валика реально поднимает шерсть — демо честное, не постановочный трюк с другим предметом; «satisfied nod» — эмоция, не клейм; никаких выдуманных цифр.
- **Б Деньги:** ✅ в ролике нет оффера/цены (оффер — на лендинге, отдельным фильтром).
- **В Срочность:** ✅ взгляд на дверь = реальный бытовой контекст (гости), не фейковый таймер/«распродажа заканчивается».
- **Г Достоинство:** ✅ нет стыда/давления; женщина одета скромно, поведение достойное — халяль-рынок ок; товар делает обещанное.
- **Д Комплаенс:** ✅ нет брендов/музыки с правами (audio = room tone, «no music»); нет health-клеймов; нет чужого IP.
- **Вердикт: ПРОШЁЛ.** Можно отдавать в i2v.

---

## Быстрый шаблон-рыба (копируй под новый товар)
```
ТОВАР: <...>  · реальное свойство: <...>
JTBD (§1.5): функц <...> / эмоц <...> / соц <...> · тревоги: <...>
УГОЛ (§3.4): аудитория <...> × драйвер <...>
КАРКАС (§3.3): PAS | AIDA | BAB | FAB
МОДЕЛЬ: Nano Banana (image) | Seedance (video)
--- craft: скелет модели + IMPERFECTION + SKIN-REALISM + U12-аудит ---
ПРОМПТ: <...>
--- ФИЛЬТР §15.5 ---
А Правда: · Б Деньги: · В Срочность: · Г Достоинство: · Д Комплаенс:
ВЕРДИКТ: ПРОШЁЛ / ДОРАБОТКА
```
