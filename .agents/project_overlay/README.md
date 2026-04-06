# Project Overlay

This directory is the repo-local overlay for the shared `ai-agent-kit` skill library.

Use it to keep project-specific instructions separate from the shared cross-repo skill source of truth.

Recommended usage:

- Put repo-specific routing notes in `repo_skill_preferences.md`.
- Add extra operational rules, architecture constraints, or sensitive-path notes as separate Markdown files here.
- Keep these files focused on this repository only. Shared workflows and reusable skills should stay in `ai-agent-kit`.

The integration script creates this directory so each repository can stay thin while still benefiting from the shared skill library.
