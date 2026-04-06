# AGENTS.md

<!-- ai-agent-kit:begin -->
## ai-agent-kit Shared Skills

This repository consumes the shared `ai-agent-kit` Codex plugin so the same cross-repo skill library is available here without copying the library into this repository.

- Shared plugin root: `/home/shxu6388/plugins/ai-agent-kit`
- Home marketplace entry: `/home/shxu6388/.agents/plugins/marketplace.json`
- Installed bundle: `full`
- Keep repo-specific guidance in `.agents/project_overlay/repo_skill_preferences.md`.
- Add extra repo-only rules, hotspots, and handoff notes under `.agents/project_overlay/`.
- Prefer the shared skill library for common workflows instead of creating duplicate local skills.

Refresh this integration from the shared source repo with:
`python3 /home/shxu6388/ai-agent-kit/scripts/integrate_shared_skill_library.py /home/shxu6388/full-stack-demo-portfolio/orbit-assist-widget`
<!-- ai-agent-kit:end -->
