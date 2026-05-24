# GPT-image2 Prompt Set

This file records the `imagegen` prompts used to create the slide taste previews.
The images in `../raw/gpt-image2/` were generated through the built-in imagegen route, then the official ThinkMove logo was composited into `../previews/`.

Common constraints used across all prompts:

- 16:9 ThinkMove branded presentation slide style preview
- GPT-image2-generated full slide image
- Not HTML, not CSS, not a browser screenshot
- Keep the top-right corner calm and empty for the real ThinkMove logo
- Do not draw, invent, or write any logo
- Use white/near-white, navy, slate, teal, and tiny orange only
- Use polished consulting-deck composition with shadow-as-border cards

## Quiet Proposal

Pattern: proposal/company/sales document.  
Text: `採用する前に。外注する前に。` / `止まっている判断を、横で一緒に動かす。` / support cards for 現状, 判断, 次の一手.

## Diagnostic Cockpit

Pattern: diagnosis/audit/report.  
Text: `診断結果サマリー` / KPI cards for Organic CV, CTA Click, Fix Priority / priority map / next action table.

## Evidence Case

Pattern: case study/result report.  
Text: `記事を増やす前に、判断の詰まりをほどいた。` / Claim / Evidence / Action.

## Workshop Guide

Pattern: training/workshop/practical guide.  
Text: `AIに任せる前に、判断材料を渡す。` / four steps / Exercise / Facilitator note.

## Keynote Narrative

Pattern: LT/seminar/thought slide.  
Text: `施策は回っている。` / `でも、判断だけが止まっている。` / `AIで全部を自動化するのではなく、人間の一次情報と判断を増幅する。`

