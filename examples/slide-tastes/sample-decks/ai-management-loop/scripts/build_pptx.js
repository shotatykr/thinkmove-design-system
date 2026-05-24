#!/usr/bin/env node

const path = require("path");
const pptxgen = require("pptxgenjs");

const root = path.resolve(__dirname, "../../../../..");
const base = path.join(root, "examples", "slide-tastes", "sample-decks", "ai-management-loop");
const out = path.join(base, "ai-management-loop.pptx");

const files = [
  "slide-01-cover.png",
  "slide-02-profile.png",
  "slide-03-diagnostic.png",
  "slide-04-source.png",
  "slide-05-draft.png",
  "slide-06-decision.png",
  "slide-07-learn.png",
];

const pptx = new pptxgen();
pptx.defineLayout({ name: "THINKMOVE_WIDE", width: 13.333, height: 7.5 });
pptx.layout = "THINKMOVE_WIDE";
pptx.author = "ThinkMove";
pptx.company = "ThinkMove";
pptx.subject = "AI Management Loop deck sample";
pptx.title = "AI Management Loop";
pptx.lang = "ja-JP";
pptx.theme = {
  headFontFace: "Hiragino Sans",
  bodyFontFace: "Hiragino Sans",
  lang: "ja-JP",
};

for (const file of files) {
  const slide = pptx.addSlide();
  slide.background = { color: "FAFBFC" };
  slide.addImage({
    path: path.join(base, "slides", file),
    x: 0,
    y: 0,
    w: 13.333,
    h: 7.5,
  });
}

pptx.writeFile({ fileName: out });

