# 00 — Universal Craft Rules (наш свод)

Единая точка входа в craft-слой. Применяется к **любому** UGC-промпту — статичному (Nano Banana)
и видео (Seedance / Kling / Veo) — ДО модельной специфики.

Источники (MIT, `smixs/visual-skills`): `universal-rules.md`, `image-golden-rules.md`,
`image-prompt-framework.md`, `dramaturgy.md`. Модельные файлы читаем поверх этого.

Честная пометка: ярлыки «SLCT» и «entity limits» — наши шорткаты, дословно в MIT-репо их нет.
Ниже каждый принцип привязан к реальному разделу-первоисточнику.

---

## ⚑ БЛОК 1 — IMPERFECTION (обязателен для любого UGC-промпта)

Цель: убить «вылизанный» рекламный вид, добавить достоверность реального телефонного кадра.
Вставляй этот блок в каждый UGC-промпт (в описание камеры/атмосферы, не в негативы).

```text
IMPERFECTION LAYER:
- slight motion blur on moving hand/object (handheld feel, not tripod-clean)
- mild overexposure where daylight hits the surface (blown highlight on the edge)
- fine sensor grain / low-light noise in shadows
- subtle lens distortion at frame edges (phone wide-angle)
- off-center framing — subject sits slightly left/right of center, not perfectly composed
- soft focus falloff at the very edges, sharp on the product
```

Правила применения:
- Дозируй: это «лёгкая» несовершенность, а не разрушение кадра. Продукт остаётся читаемым и в фокусе.
- Для видео motion blur завязывай на конкретное движение (U5 — одно доминирующее движение на шот).
- Не превращай в tag-спам: вписывай фразами в описание сцены, а не списком ключей (см. U4 ниже).

## ⚑ БЛОК 2 — SKIN-REALISM (обязателен, если в кадре человек)

Цель: живая кожа вместо пластикового «AI-лица». Вставляй **3–4 подсказки inline** прямо в описание
человека (не отдельным блоком — модель лучше связывает признаки с субъектом внутри его описания).

Пул подсказок (бери 3–4 под контекст):
- `visible skin pores on nose and cheeks`
- `uneven skin tone, slight redness around the nose`
- `faint under-eye shadows, natural tiredness`
- `natural skin sheen / light oiliness on forehead (not matte-perfect)`
- `fine facial hair catching the light`
- `a few blemishes / freckles left un-retouched`

Пример inline-вставки:
> «...a woman in her early 30s holding the bottle — **visible pores on her cheeks, uneven skin tone
> with slight redness near the nose, faint under-eye shadows** — smiling at the product...»

Обоснование: `image-prompt-framework.md` §Cinematic Verbose (micro-textures: "visible pores on skin")
+ `universal-rules.md` §1 (Details Law).

---

## Ключевые принципы (свод, с привязкой к источнику)

### P1. Weight-at-start + скелет промпта  ← *твой «SLCT»*
`universal-rules.md` U1 (Universal prompt skeleton) + U2 (Weight-at-start).
Первые 30–40% токенов получают больше внимания модели. Порядок слоёв:
**Субъект → Действие → Сцена → Камера/объектив → Свет → Стиль/палитра → Звук → Формат → Continuity.**
Субъект и действие — в начале, стилевые модификаторы — в конце.
(Image-аналог слотов: `image-prompt-framework.md` §Universal Elements.)

### P2. Positive framing — без негативов  ← *твой «без negatives»*
`image-golden-rules.md` §2. Описывай что ХОЧЕШЬ, а не чего не хочешь. Модель понимает присутствие
лучше отсутствия.
- ✅ «empty street» вместо ❌ «street with no cars»
- ✅ «clean background» вместо ❌ «no clutter»
Негативные ограничения — только если модель их официально поддерживает (U1, последний слой).

### P3. Spatial explicitness — явная геометрия кадра  ← *твой «spatial explicitness»*
`image-golden-rules.md` §5 (Be Specific: position) + `nano-banana.md` (spatial logic / grounding).
Позицию задавай точно: «right third, bleeding off edge», «centered upper third», «occupies <10% of frame».
Никаких размытых «где-то справа». Для видео — одна доминирующая камера-мува на шот (U5).

### P4. Entity limits — не перегружай кадр сущностями  ← *наш шорткат*
Опора: `universal-rules.md` U8 (No contradictions) + U5 (один primary-move). Прямого правила
«N сущностей» в MIT-репо нет — практическое следствие: чем больше несвязанных объектов/лиц/действий,
тем сильнее attribute bleed и артефакты. Держи один главный субъект + один продукт + одну среду.
Противоречия убивают кадр («still pond» + «flowing water» = артефакт).

### P5. Real-world references — культурные/временные якоря  ← *твой «real-world references»*
`image-golden-rules.md` §World Knowledge Anchors. Вместо описания каждой детали дай якорь, модель
дозаполнит аутентичный мир:
- Era: «Tokyo, 1982» → неоновый Shinjuku, аналоговая электроника
- Cultural: «Ukiyo-e print of {scene}»
- Genre/линза: «Roger Deakins lighting», «Wes Anderson palette»
Правила: якорь = high-level steering (не заменяет промпт); **не стакай два genre-anchor** (= каша);
era/cultural сильнее у GPT Image, у NB опирайся на явные описания.

### P6. Show, don't tell + concrete detail
`universal-rules.md` U3 + U9 + §1 (Details Law). Эмоции не рендерятся — рендерятся тела и факты.
❌ «he is happy» → ✅ «his eyes crinkle, he grips the box tighter, exhales a short laugh».
Каждый шот несёт ≥3 конкретных факта: (1) средовое давление (свет/погода/поверхность),
(2) физическое микро-действие, (3) звуковой/визуальный мотив.

### P7. Natural language, не tag-спам
`universal-rules.md` U4 + `image-golden-rules.md` §4. Пиши цельными фразами, как бриф живому оператору.
❌ «cool product, neon, 8k, cinematic» → ✅ полное предложение сцены.

### P8. Финальный кадр (для видео)
`universal-rules.md` U11. Каждый клип обязан иметь чёткий финальный фрейм — модель использует его как
эмоциональную точку назначения. «Ends on the product resting in her palm, morning light on the label».

---

## Чеклист-аудит перед отправкой промпта (U12)
1. Есть ли IMPERFECTION-блок? (да/нет)
2. Если есть человек — вшиты ли 3–4 skin-realism подсказки inline? (да/нет)
3. Subject+action в начале (weight-at-start)? Стиль — в конце?
4. Все ограничения сформулированы позитивно (P2)?
5. Позиции/геометрия заданы явно (P3)?
6. Один главный субъект + продукт + среда, без противоречий (P4)?
7. Каждый шот несёт ≥3 конкретных факта (P6)? Нет слов «cinematic/beautiful/stunning»?
8. (Видео) Назван финальный кадр (P8)?
