# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React component library for DolphinCare, built with Vite and documented with Storybook.

## Commands

```bash
npm run storybook        # Start Storybook dev server on port 6006
npm run build            # Build the library with Vite
npm run build-storybook  # Build static Storybook site
```

## Custom Skills (Slash Commands)

When the user types any of these, read the corresponding skill file and follow its instructions:

| Command | Skill file |
|---|---|
| `/new-component [Name]` | `.claude/skills/new-component.md` |
| `/style-guide-sync` | `.claude/skills/style-guide-sync.md` |
| `/figma-sync-check` | `.claude/skills/figma-sync-check.md` |
| `/all-components-overview` | `.claude/skills/all-components-overview.md` |
| `/story-check` | `.claude/skills/story-check.md` |
| `/token-audit` | `.claude/skills/token-audit.md` |
| `/download-figma-svg` | `.claude/skills/download-figma-svg.md` |
| `/storybook-naming` | `.claude/skills/storybook-naming.md` |

Always read the skill file first before taking any action.

## Architecture

This is an ESM component library (`"type": "module"`) targeting React 18 as a peer dependency — consumers provide their own React installation.

- **Vite** handles library bundling
- **Storybook** is the primary development and documentation environment
