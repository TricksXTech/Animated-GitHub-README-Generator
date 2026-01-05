function generate() {
  const usernameEl = document.getElementById("username");
  alert(`u ; ${usernameEl}`);
  const nameEl = document.getElementById("name");
  const skillsEl = document.getElementById("skills");
  const typeEl = document.getElementById("type");
  const outputEl = document.getElementById("output");

  const u = usernameEl.value.trim();
  const n = nameEl.value.trim();
  const s = skillsEl.value.trim();
  const t = typeEl.value;

  if (!u || !n) {
    outputEl.value = "❌ Please fill all required fields";
    return;
  }

  const skillList = s
    ? s.split(",").map(x => `- ${x.trim()}`).join("\n")
    : "- (Add your skills)";

  let template = `
<h1 align="center">Hi 👋, I'm ${n}</h1>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?center=true&vCenter=true&lines=Welcome+to+my+GitHub;Open+Source+Developer;Freelancer+Ready" />
</p>

## 🚀 About Me
- GitHub: **@${u}**
- Profile Type: **${t}**

## 🛠 Skills
${skillList}

## 📊 GitHub Stats
<img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight" />

<img src="https://github-readme-streak-stats.herokuapp.com?user=${u}&theme=tokyonight" />
`;

  if (t === "freelancer") {
    template += `
## 💼 Freelance Services
- Website Development
- Bots & Automation
- API Integration
- Crypto / Web3 Tools

📩 Contact me for work!
`;
  }

  if (t === "gaming") {
    template += `
## 🎮 Gaming Profile
- BGMI / Mobile Gamer
- Streaming & Content Creation
`;
  }

  outputEl.value = template.trim();
}

function copy() {
  const outputEl = document.getElementById("output");
  outputEl.select();
  outputEl.setSelectionRange(0, 99999); // mobile support
  document.execCommand("copy");
  alert("README copied successfully!");
}
