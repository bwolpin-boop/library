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

## Architecture

This is an ESM component library (`"type": "module"`) targeting React 18 as a peer dependency — consumers provide their own React installation.

- **Vite** handles library bundling
- **Storybook** is the primary development and documentation environment
