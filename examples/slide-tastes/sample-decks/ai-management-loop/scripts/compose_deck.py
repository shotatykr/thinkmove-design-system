#!/usr/bin/env python3
"""Compose official assets onto the AI Management Loop GPT-image2 deck."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[5]
BASE = ROOT / "examples" / "slide-tastes" / "sample-decks" / "ai-management-loop"
RAW = BASE / "raw" / "gpt-image2"
SLIDES = BASE / "slides"
CONTACT = BASE / "contact-sheet.png"
LOGO = ROOT / "assets" / "logo.png"
PROFILE = ROOT / "assets" / "profile" / "toyokura-shota.jpg"

FILES = [
    ("slide-01-cover.png", "01 Cover"),
    ("slide-02-profile.png", "02 Self Introduction"),
    ("slide-03-diagnostic.png", "03 Diagnostic"),
    ("slide-04-source.png", "04 Source"),
    ("slide-05-draft.png", "05 Draft"),
    ("slide-06-decision.png", "06 Decision"),
    ("slide-07-learn.png", "07 Learn"),
]


def font_path(weight: str) -> str:
    candidates = {
        "regular": [
            "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc",
            "/System/Library/Fonts/Helvetica.ttc",
        ],
        "bold": [
            "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc",
            "/System/Library/Fonts/Helvetica.ttc",
        ],
    }
    for candidate in candidates[weight]:
        if Path(candidate).exists():
            return candidate
    return "/System/Library/Fonts/Helvetica.ttc"


def font(size: int, weight: str = "regular") -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(font_path(weight), size)


def clean_logo_area(img: Image.Image) -> None:
    """Remove GPT-image2's occasional logo placeholder frame before compositing the real logo."""
    w, h = img.size
    x1, y1 = int(w * 0.795), 0
    x2, y2 = w, int(h * 0.150)

    patch = Image.new("RGBA", (x2 - x1, y2 - y1), (255, 255, 255, 255))
    mask = Image.new("L", patch.size, 0)
    ImageDraw.Draw(mask).rectangle((0, 0, patch.width, patch.height), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(7))
    img.paste(patch, (x1, y1), mask)


def paste_logo(img: Image.Image) -> None:
    w, h = img.size
    logo = Image.open(LOGO).convert("RGBA")
    target_w = int(w * 0.085)
    target_h = int(logo.height * target_w / logo.width)
    logo = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
    alpha = logo.getchannel("A").point(lambda value: int(value * 0.9))
    logo.putalpha(alpha)
    x = w - target_w - int(w * 0.055)
    y = int(h * 0.034)
    img.alpha_composite(logo, (x, y))


def paste_profile(img: Image.Image) -> None:
    w, h = img.size
    # Coordinates match the blank photo card generated on slide 02.
    box = (int(w * 0.620), int(h * 0.150), int(w * 0.895), int(h * 0.610))
    x1, y1, x2, y2 = box
    bw, bh = x2 - x1, y2 - y1
    photo = Image.open(PROFILE).convert("RGBA")
    fitted = ImageOps.fit(photo, (bw, bh), method=Image.Resampling.LANCZOS, centering=(0.50, 0.30))
    mask = Image.new("L", (bw, bh), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, bw, bh), radius=18, fill=255)
    layer = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
    layer.alpha_composite(fitted)
    layer.putalpha(mask)
    img.alpha_composite(layer, (x1, y1))


def compose_slides() -> list[Path]:
    SLIDES.mkdir(parents=True, exist_ok=True)
    outputs: list[Path] = []
    for filename, _title in FILES:
        img = Image.open(RAW / filename).convert("RGBA")
        clean_logo_area(img)
        if filename == "slide-02-profile.png":
            paste_profile(img)
        paste_logo(img)
        out = SLIDES / filename
        img.convert("RGB").save(out, quality=95)
        outputs.append(out)
    return outputs


def build_contact(slides: list[Path]) -> None:
    thumb_w, thumb_h = 480, 270
    gap = 28
    top = 150
    sheet_w = 1080
    rows = 4
    sheet_h = top + rows * (thumb_h + 62) + gap
    sheet = Image.new("RGB", (sheet_w, sheet_h), "#fafbfc")
    d = ImageDraw.Draw(sheet)
    d.text((54, 42), "AI Management Loop", font=font(42, "bold"), fill="#0a1628")
    d.text((54, 98), "7-slide GPT-image2 deck sample / Diagnostic Cockpit + Workshop Guide taste", font=font(22), fill="#475569")

    positions = []
    for idx in range(len(slides)):
        row = idx // 2
        col = idx % 2
        positions.append((54 + col * (thumb_w + gap), top + row * (thumb_h + 62)))

    for path, (_filename, title), (x, y) in zip(slides, FILES, positions):
        img = Image.open(path).convert("RGB").resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        sheet.paste(img, (x, y))
        d.rounded_rectangle([x, y, x + thumb_w, y + thumb_h], radius=12, outline="#d8e0e8", width=2)
        d.text((x, y + thumb_h + 14), title, font=font(22, "bold"), fill="#0a1628")
    sheet.save(CONTACT, quality=95)


def main() -> None:
    slides = compose_slides()
    build_contact(slides)
    print(f"composited {len(slides)} slides")


if __name__ == "__main__":
    main()
