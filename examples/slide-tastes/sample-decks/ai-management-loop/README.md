# AI Management Loop Deck Sample

`examples/slide-tastes/few-shot.md` の方向性で作った連続資料サンプル。

- Taste: Diagnostic Cockpit + Workshop Guide
- Worldview: 実務密度のある冷静な共感
- Generation: GPT-image2 via imagegen
- Logo: official `assets/logo.png` composited top-right after generation
- Profile: official `assets/profile/toyokura-shota.jpg` composited into slide 02

## Slides

1. Cover
2. Self Introduction
3. Diagnostic
4. Source
5. Draft
6. Decision
7. Learn

## Outputs

- [`contact-sheet.png`](contact-sheet.png)
- [`ai-management-loop.pptx`](ai-management-loop.pptx)
- [`slides/`](slides/)

## Rebuild

```bash
python3 examples/slide-tastes/sample-decks/ai-management-loop/scripts/compose_deck.py
NODE_PATH=/path/to/node_modules node examples/slide-tastes/sample-decks/ai-management-loop/scripts/build_pptx.js
```

