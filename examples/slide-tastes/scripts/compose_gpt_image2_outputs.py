#!/usr/bin/env python3
"""Composite official logo onto GPT-image2 slide previews and build contact sheet."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[3]
BASE = ROOT / "examples" / "slide-tastes"
RAW = BASE / "raw" / "gpt-image2"
PREVIEWS = BASE / "previews"
CONTACT = BASE / "contact-sheet.png"
LOGO = ROOT / "assets" / "logo.png"

BG = "#fafbfc"
INK = "#0a1628"
BODY = "#475569"
RING = "#d8e0e8"

SLIDES = [
    ("quiet-proposal", "Quiet Proposal"),
    ("diagnostic-cockpit", "Diagnostic Cockpit"),
    ("evidence-case", "Evidence Case"),
    ("workshop-guide", "Workshop Guide"),
    ("keynote-narrative", "Keynote Narrative"),
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


def paste_logo(slide: Image.Image) -> Image.Image:
    canvas = slide.convert("RGBA")
    logo = Image.open(LOGO).convert("RGBA")
    target_w = int(canvas.width * 0.085)
    target_h = int(logo.height * target_w / logo.width)
    logo = logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
    alpha = logo.getchannel("A").point(lambda value: int(value * 0.9))
    logo.putalpha(alpha)
    x = canvas.width - target_w - int(canvas.width * 0.055)
    y = int(canvas.height * 0.032)
    canvas.alpha_composite(logo, (x, y))
    return canvas.convert("RGB")


def build_previews() -> list[Path]:
    PREVIEWS.mkdir(parents=True, exist_ok=True)
    outputs: list[Path] = []
    for slug, _title in SLIDES:
        src = RAW / f"{slug}.png"
        dst = PREVIEWS / f"{slug}.png"
        preview = paste_logo(Image.open(src))
        preview.save(dst, quality=95)
        outputs.append(dst)
    return outputs


def build_contact_sheet(previews: list[Path]) -> None:
    thumb_w, thumb_h = 640, 360
    sheet = Image.new("RGB", (1440, 1510), BG)
    d = ImageDraw.Draw(sheet)
    d.text((70, 50), "Slide Taste Patterns", font=font(44, "bold"), fill=INK)
    d.text((70, 112), "GPT-image2 previews generated via imagegen. Official logo: top-right.", font=font(24), fill=BODY)
    paste_logo(sheet)
    positions = [(70, 180), (730, 180), (70, 610), (730, 610), (70, 1040)]
    for (path, (_slug, title), (x, y)) in zip(previews, SLIDES, positions):
        img = Image.open(path).convert("RGB")
        thumb = img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        sheet.paste(thumb, (x, y))
        d.rounded_rectangle([x, y, x + thumb_w, y + thumb_h], radius=14, outline=RING, width=2)
        d.text((x, y + thumb_h + 14), title, font=font(24, "bold"), fill=INK)
    sheet.save(CONTACT, quality=95)


def main() -> None:
    previews = build_previews()
    build_contact_sheet(previews)
    print(f"composited {len(previews)} GPT-image2 previews")


if __name__ == "__main__":
    main()
