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
    'Hi, I am Jeff. A developer focused on networking, backend systems, and modern web development.',

  skills:
    'HTML, CSS, JavaScript, React, Node.js, Linux, Networking, MikroTik',

  projects:
    `1. RT/RW Net Management System
2. Terminal Portfolio Website
3. Network Monitoring Dashboard`,

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
