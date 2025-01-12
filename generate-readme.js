
import fs from 'fs';
import inquirer from 'inquirer';

async function generateReadme() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Escolha o modelo de README:',
        choices: ['Padrão', 'Avançado', 'Minimalista'],
        default: 'Padrão',
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'Qual é o nome do seu projeto?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Descreva seu projeto:',
      },
      {
        type: 'input',
        name: 'technologies',
        message: 'Quais tecnologias você usou no projeto?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Como instalar o projeto?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Como usar o projeto?',
      },
      {
        type: 'input',
        name: 'structure',
        message: 'Digite a estrutura de pastas do projeto:',
        default: 'backend/\n  ├── app.js\n  ├── routes/\n  ├── models/\nfrontend/\n  ├── index.html\n  ├── css/\n  └── js/',
      },
      {
        type: 'confirm',
        name: 'addBadges',
        message: 'Deseja incluir badges no README?',
        default: true,
      },
      {
        type: 'input',
        name: 'roadmap',
        message: 'Adicione o roadmap do projeto (opcional):',
      },
      {
        type: 'input',
        name: 'acknowledgments',
        message: 'Gostaria de incluir agradecimentos? (opcional):',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Escolha a licença do projeto:',
        choices: ['MIT', 'Apache 2.0', 'GPL v3.0', 'BSD 3-Clause', 'Nenhuma'],
        default: 'MIT',
      },
    ]);

    const { template, projectName, description, technologies, installation, usage, structure, addBadges, roadmap, acknowledgments, license } = answers;

    // Gerar seções adicionais
    const badgesSection = addBadges
      ? `## 🏆 Badges\n![Version](https://img.shields.io/badge/version-1.0.0-blue)\n![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-green)\n`
      : '';

    const roadmapSection = roadmap ? `## 🗺️ Roadmap\n${roadmap}\n` : '';
    const acknowledgmentsSection = acknowledgments ? `## 💖 Agradecimentos\n${acknowledgments}\n` : '';
    const licenseSection = license !== 'Nenhuma' ? `## 📝 Licença\nEste projeto está licenciado sob a licença **${license}**.\n` : '';

    // Gerar README com base no modelo
    const templates = {
      'Padrão': `
# ${projectName}

## 📖 Descrição
${description}

## 🛠️ Tecnologias Utilizadas
${technologies}

## 📂 Estrutura de Pastas
\`\`\`
${structure}
\`\`\`

## 📦 Instalação
\`\`\`
${installation}
\`\`\`

## ▶️ Como Usar
${usage}

${badgesSection}
${roadmapSection}
${acknowledgmentsSection}
${licenseSection}
      `,
      'Avançado': `
# ${projectName}

## 📖 Descrição
${description}

## 🏆 Badges
${badgesSection}

## 🛠️ Tecnologias Utilizadas
${technologies}

## 📂 Estrutura de Pastas
\`\`\`
${structure}
\`\`\`

## 📦 Instalação
\`\`\`
${installation}
\`\`\`

## ▶️ Como Usar
${usage}

## 🗺️ Roadmap
${roadmapSection}

## 💖 Agradecimentos
${acknowledgmentsSection}

## 📝 Licença
${licenseSection}
      `,
      'Minimalista': `
# ${projectName}

${description}

## Tecnologias
${technologies}

## Como Usar
${usage}
      `,
    };

    const readmeContent = templates[template];

    fs.writeFileSync('README.md', readmeContent.trim());
    console.log('README.md gerado com sucesso!');
  } catch (error) {
    console.error('Erro ao gerar README:', error);
  }
}

generateReadme();

