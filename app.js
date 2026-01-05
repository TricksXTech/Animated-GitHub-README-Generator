function generate(){
  const u = username.value.trim();
  const n = name.value.trim();
  const s = skills.value.trim();
  const t = type.value;

  if(!u || !n){
    output.value = "❌ Please fill all required fields";
    return;
  }

  const skillBadges = s.split(",").map(
    x => `- ${x.trim()}`
  ).join("\n");

  let template = `
<h1 align="center">Hi 👋, I'm ${n}</h1>

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?center=true&vCenter=true&lines=Welcome+to+my+GitHub;Open+Source+Developer;Freelancer+Ready" />
</p>

## 🚀 About Me
- GitHub: **@${u}**
- Template Type: **${t}**

## 🛠 Skills
${skillBadges}

## 📊 GitHub Stats
<img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight" />

<img src="https://github-readme-streak-stats.herokuapp.com?user=${u}&theme=tokyonight" />
`;

  if(t === "freelancer"){
    template += `
## 💼 Freelance Services
- Website Development
- Bots & Automation
- API Integration
- Crypto / Web3 Tools

📩 Contact me for work!
`;
  }

  if(t === "gaming"){
    template += `
## 🎮 Gaming Profile
- BGMI / Mobile Gamer
- Streaming & Content Creation
`;
  }

  output.value = template;
}

function copy(){
  output.select();
  document.execCommand("copy");
  alert("README copied!");
}
