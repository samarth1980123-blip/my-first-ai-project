* {
  box-sizing: border-box;
}

:root {
  --bg: #08141d;
  --bg-2: #102a38;
  --panel: rgba(11, 22, 31, 0.8);
  --panel-alt: rgba(16, 42, 56, 0.9);
  --line: rgba(120, 190, 255, 0.28);
  --text: #eaf3ff;
  --muted: #a7b8cd;
  --accent: #8de0ff;
  --accent-2: #7ef0c1;
  --warning: #ffc563;
  --danger: #ff7e88;
  --shadow: rgba(0, 0, 0, 0.4);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top, rgba(125, 186, 255, 0.16), transparent 28%),
    linear-gradient(135deg, var(--bg), var(--bg-2));
  color: var(--text);
}

.game-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 8px;
  letter-spacing: 0.22em;
  font-size: 0.7rem;
  color: var(--accent);
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.1rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.status-pill {
  background: rgba(15, 36, 53, 0.85);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 18px;
  color: var(--accent-2);
  font-weight: 700;
  box-shadow: inset 0 0 16px rgba(126, 240, 193, 0.14);
}

.game-layout {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(260px, 1fr);
  gap: 22px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 18px 42px var(--shadow);
}

.primary-panel {
  padding: 18px;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  color: var(--muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.scene-card {
  background: linear-gradient(180deg, rgba(16, 42, 56, 0.8), rgba(12, 22, 30, 0.9));
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px 20px 14px;
  min-height: 240px;
}

.scene-card h2 {
  margin: 0 0 14px;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
}

.scene-card p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 1.02rem;
}

.scene-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--text);
  line-height: 1.8;
}

.choices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.choice-btn {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 14px;
  background: rgba(14, 30, 42, 0.9);
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
  min-height: 110px;
}

.choice-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(141, 224, 255, 0.8);
  background: rgba(18, 41, 55, 0.9);
}

.choice-btn .choice-label {
  display: block;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
}

.choice-btn .choice-detail {
  display: block;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.9rem;
}

.sidebar {
  padding: 18px 18px 12px;
}

.sidebar h3,
.sidebar h4 {
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-size: 0.76rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
}

.stat-box {
  padding: 14px 12px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(15, 26, 35, 0.75);
}

.stat-box label {
  display: block;
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 6px;
}

.stat-box strong {
  font-size: 1.4rem;
}

.inventory-box,
.log-box {
  margin-top: 22px;
}

#inventory {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

#inventory li {
  background: rgba(126, 240, 193, 0.1);
  border: 1px solid rgba(126, 240, 193, 0.35);
  border-radius: 999px;
  padding: 7px 10px;
  color: var(--accent-2);
  font-size: 0.85rem;
}

#log {
  margin-top: 10px;
  display: grid;
  gap: 10px;
}

.log-entry {
  background: rgba(10, 18, 26, 0.72);
  border-left: 3px solid var(--accent);
  border-radius: 10px;
  padding: 10px 12px;
  color: var(--text);
  font-size: 0.88rem;
  line-height: 1.5;
}

@media (max-width: 840px) {
  .game-layout {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
