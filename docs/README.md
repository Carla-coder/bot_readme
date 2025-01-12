


# Bot Readme

## 📖 Descrição  
O **Bot Readme** é uma ferramenta automatizada que auxilia desenvolvedores na geração de arquivos README.md para seus projetos. Com ele, é possível criar uma documentação inicial com base em perguntas simples, economizando tempo e garantindo uma apresentação profissional para o repositório.

## 🛠️ Tecnologias Utilizadas  
- **Node.js**: Ambiente de execução para JavaScript.  
- **Inquirer.js**: Biblioteca para criar prompts interativos no terminal.  
- **JavaScript (ES6+)**: Utilizado com suporte ao módulo `import/export` através da configuração do tipo `module`.

## 📂 Estrutura de Pastas  
```bash
bot-readme/
├── generate-readme.js # Arquivo principal para geração do README
├── package.json # Configuração do projeto Node.js e dependências
└── node_modules/ # Diretório com as dependências instaladas
```

## 📦 Instalação  
Para utilizar o **Bot Readme**, siga os passos abaixo:  

1. **Clone este repositório**: 

   ```bash
   git clone https://github.com/Carla-coder/bot_readme.git
   cd bot_readme
   ```

2. **Instale as dependências necessárias**:

- Inicie o projeto:

```bash
npm inint -y
```

- Instale o pacote **inquirer**:

```bash
npm install inquirer
```

- Crie o arquivo do **bot**:

```bash
Salve o código abaixo em um arquivo chamado generate-readme.js


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
```

3. **Execute o bot: No terminal, execute o comando**:

```bash
node generate-readme.js
```

4. ▶️**Responda às perguntas**: O bot irá fazer perguntas sobre o projeto. Ao final, ele criará um arquivo README.md com as informações fornecidas.

 
- ✔ Escolha o modelo de README: Avançado (exemplo)
- ✔ Qual é o nome do seu projeto?
- ✔ Descreva seu projeto:
- ✔ Quais tecnologias você usou no projeto?
- ✔ Como instalar o projeto?
- ✔ Como usar o projeto?
- ✔ Digite a estrutura de pastas do projeto: backend/
  ├── app.js
  ├── routes/
  ├── models/
frontend/
  ├── index.html
  ├── css/
  └── js/
- ✔ Deseja incluir badges no README? Yes ou No
- ✔ Adicione o roadmap do projeto (opcional):
- ✔ Gostaria de incluir agradecimentos? (opcional):
- ✔ Escolha a licença do projeto: MIT
 
Responda cada pergunta com as informações desejadas.

O arquivo README.md será gerado automaticamente na raiz do projeto com base nas respostas fornecidas.

## 🔧 Configuração do Projeto

- **Configuração de Módulo**: O projeto utiliza o formato ES Modules, habilitado pela configuração "type": "module" no arquivo package.json.

### Dependências:

- **inquirer**: Gerencia os prompts interativos.
- Para adicionar mais dependências ou funcionalidades, basta ajustar o código e executar npm install [dependência].
- A versão mais recente do inquirer (9.x ou superior) usa módulo ES6, e o código precisa ser ajustado se estiver usando uma versão moderna. Verifique a versão instalada:

```bash
  npm list inquirer
```
- Ajuste para compatibilidade de ES6 ( se necessário): Se você estiver usando a versão 9.x ou superior do inquirer, precisará usar **import** em vez de **require**

- E adicione em seu package-json o módulo ES6

```json
{
  "type": "module"
}
```

- Rode o código novamente:

```bash
   node generate-readme.js
```

## 🌟 Funcionalidades 

- Suporte para modelos de README personalizados.
- Geração de seções adicionais, como "Badges", "Roadmap" e "Agradecimentos".
- Suporte a múltiplos formatos de licença.

## 💻 Desenvolvido por Carla-coder

