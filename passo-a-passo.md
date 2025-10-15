# Passo a passo para montar um site estático com mkdocs-material

Este documento descreve, de forma enxuta e ordenada, os passos básicos para criar um site estático usando MkDocs com o tema Material. Inclui comandos essenciais, recomendações e dicas para evitar problemas comuns.

## Sumário rápido

1. Preparar repositório
2. Criar e ativar ambiente virtual
3. Instalar MkDocs e tema
4. Configurar arquivos principais
5. Criar conteúdo (pasta `docs`)
6. Build e deploy

## Passos detalhados

1. Preparar o repositório

     - Criar o repositório no GitHub (ou outro provedor).
     - Clonar no VS Code:

         ```bash
         git clone <url-do-repo>
         cd <nome-do-repo>
         code .
         ```

2. Criar e ativar ambiente virtual (recomendado)

     - No VS Code, instale a extensão Python (se ainda não tiver).
     - Crie um ambiente virtual no diretório do projeto:

         ```bash
         python3 -m venv .venv
         source .venv/bin/activate   # macOS / Linux (zsh/bash)
         # .venv\Scripts\activate  # Windows (PowerShell/CMD)
         ```

     - No VS Code: abra a Command Palette (Cmd+Shift+P) e selecione "Python: Select Interpreter" → "Enter interpreter path" → escolha `.venv` (ou use a opção de criar ambiente).

3. Instalar MkDocs e o tema Material

     - Instale o MkDocs e o tema Material:

         ```bash
         pip install mkdocs mkdocs-material
         ```

     - Instale plugins opcionais conforme necessidade (ex.: navegação, imagem):

         ```bash
         pip install mkdocs-awesome-nav
         pip install "mkdocs-material[imaging]"
         ```

4. Adicionar e configurar arquivos principais

     - Adicione um arquivo `mkdocs.yml` na raiz do projeto. Exemplo mínimo:

         ```yaml
         site_name: "Nome do Site"
         theme:
             name: material
         nav:
             - Home: index.md
         ```

     - Adicione um `.gitignore` apropriado (por exemplo, ignorar `.venv`, `site/`, e arquivos temporários).

     - Se estiver reutilizando de outro projeto, verifique assets (CSS/JS) e ajuste caminhos.

5. Criar diretório `docs` e conteúdo

     - Crie a pasta `docs` e adicione `index.md` como a página inicial:

         ```bash
         mkdir docs
         echo "# Início\n\nBem-vindo ao site." > docs/index.md
         ```

     - Para navegação maior, crie um arquivo `_nav.yml` ou configure `nav:` diretamente em `mkdocs.yml`.

6. Build, testar e publicar

     - Rodar o servidor de desenvolvimento (visualização local):

         ```bash
         mkdocs serve
         ```

     - Gerar o site estático:

         ```bash
         mkdocs build
         ```

     - Fazer commit e enviar para o repositório:

         ```bash
         git add .
         git commit -m "Inicial site mkdocs"
         git push origin <branch>
         ```

     - Deploy para GitHub Pages (opcional):

         ```bash
         mkdocs gh-deploy
         ```

## Dicas e notas

- Use `.venv` para isolar dependências e não poluir o Python global.
- Verifique a documentação dos plugins que instalar — alguns exigem configurações extras no `mkdocs.yml`.
- Teste o site localmente com `mkdocs serve` antes de fazer deploy.
- Para assets estáticos (CSS/JS/imagens), coloque em `docs/assets/` e referencie nos templates ou `mkdocs.yml`.
