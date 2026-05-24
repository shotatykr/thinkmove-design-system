#!/usr/bin/env node

const path = require("path");
const pptxgen = require("pptxgenjs");

const root = path.resolve(__dirname, "../../..");
const base = path.join(root, "examples", "slide-tastes");
const out = path.join(base, "thinkmove-slide-taste-patterns.pptx");

const slides = [
  "quiet-proposal",
  "diagnostic-cockpit",
  "evidence-case",
  "workshop-guide",
  "keynote-narrative",
];

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "ThinkMove";
pptx.subject = "ThinkMove slide taste pattern previews";
pptx.title = "ThinkMove Slide Taste Patterns";
pptx.company = "ThinkMove";
pptx.lang = "ja-JP";
pptx.theme = {
  headFontFace: "Hiragino Sans",
  bodyFontFace: "Hiragino Sans",
  lang: "ja-JP",
};
pptx.defineLayout({ name: "THINKMOVE_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "THINKMOVE_WIDE";

for (const name of slides) {
  const slide = pptx.addSlide();
  slide.background = { color: "FAFBFC" };
  slide.addImage({
    path: path.join(base, "previews", `${name}.png`),
    x: 0,
    y: 0,
    w: 13.333,
    h: 7.5,
  });
}

pptx.writeFile({ fileName: out });

