const input = document.getElementById('commandInput');
const output = document.getElementById('output');
const terminalBody = document.getElementById('terminalBody');

const commands = {
  help: `Available commands:
- about
- skills
- projects
- contact
- clear`,

  about:
    'I am a developer with 2 years of experience in the tech industry, focusing on building high-performance, user-friendly, and well-designed mobile applications. My expertise includes various mobile technologies such as Flutter, Dart, and Native Android Java. Driven by a passion for learning and self-improvement, I am motivated to create innovative and impactful digital solutions. As the tech landscape continuously evolves, I keep up with the latest trends and advancements to deliver the best results in every project I undertake.',

  skills:
    'Flutter, dart, Android Native(Java), PHP/laravel or Codeigniter, SvelteKit, Node.js, Express.js,Typescript, REST APIs,Git, VS Code, Android Studio, Cloud Hosting/VPS',

  projects:
    `1. SPP Q'kiddies
2. Lapor Dewan
3. CSAI CRM WhatsApp`,

  contact:
    'Email: your@email.com\nGitHub: github.com/yourusername',
};

function addLine(text) {
  const line = document.createElement('div');

  line.className = 'line';
  line.textContent = text;

  output.appendChild(line);

  terminalBody.scrollTop = terminalBody.scrollHeight;
}

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();

    if (!command) return;

    addLine(`jeff@portfolio:~$ ${command}`);

    if (command === 'clear') {
      output.innerHTML = '';
      input.value = '';
      return;
    }

    const response =
      commands[command] || `Command not found: ${command}`;

    addLine(response);

    input.value = '';
  }
});
