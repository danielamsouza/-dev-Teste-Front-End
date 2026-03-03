# Painel de Gestão de Alunos - Desafio Front-End

## Sobre o Projeto
Este projeto foi desenvolvido como resolução de um desafio técnico para a vaga de Front-End. Trata-se de uma aplicação *Single Page* (SPA) construída inteiramente com **Vanilla JavaScript**. 

O objetivo principal da aplicação é demonstrar o domínio sobre o consumo assíncrono de dados, manipulação intensiva do Document Object Model (DOM), mutabilidade de estado em memória e integração com bibliotecas de terceiros via CDN.

## Funcionalidades Implementadas

- **Consumo de API Simulado:** Leitura e *parsing* assíncrono de arquivos `.json` locais utilizando a *Fetch API* (`async/await`).
- **Renderização Dinâmica:** Construção de tabelas e contêineres de seleção (`<select>`) injetados dinamicamente no DOM em tempo de execução.
- **Filtragem Cruzada de Dados:** Algoritmo de busca e filtro utilizando lógica booleana e *short-circuit evaluation* para cruzar chaves estrangeiras (`degreeId` e `classId`).
- **Mutabilidade de Estado:** Edição de dados de alunos diretamente na memória *Heap* da aplicação, refletindo as alterações no estado global e disparando o re-render visual.
- **Geração Algorítmica de Massa de Dados:** Função geradora iterativa que sintetiza +300 registros simulados utilizando a interface `Math` para distribuição pseudoaleatória, demonstrando controle sobre loops estruturais.
- **Visualização de Dados (DataViz):** Integração com a biblioteca **Chart.js** acoplada à interface genérica `<canvas>`, gerando gráficos de barras responsivos baseados na agregação quantitativa de instâncias.

## Tecnologias e Conceitos Utilizados

- **HTML5 Semântico:** Estruturação correta de nós, atributos de acessibilidade (`lang`, `for`) e preparo de âncoras para injeção de DOM.
- **JavaScript (ECMAScript 6+):**
  - **Higher-Order Functions:** Uso extensivo de `Array.prototype` (`.forEach`, `.filter`, `.find`) para evitar loops imperativos e priorizar a imutabilidade em leituras.
  - **Template Literals:** Para interpolação segura de strings e marcação HTML.
  - **Event-Driven Architecture:** Gerenciamento de interações do usuário através de `Event Listeners` estritos.
- **Chart.js (v4.x):** Renderização visual via Web API (Canvas 2D Context).

## Como Executar o Projeto Localmente

Devido à política de segurança CORS (Cross-Origin Resource Sharing) dos navegadores modernos, a `Fetch API` não pode consumir arquivos JSON locais através do protocolo `file://`. É necessário rodar a aplicação através de um servidor local.

1. Clone este repositório:[https://github.com/danielamsouza/-dev-Teste-Front-End]
2. Abra a pasta do projeto no seu editor de código (ex: VS Code).
3. Utilize uma extensão como o **Live Server** para emular um servidor HTTP local na porta `5500`.
4. A aplicação estará disponível em: `http://127.0.0.1:5500/index.html`

## Autor

**Daniel Augusto**
Desenvolvedor focado em Engenharia Front-End e Análise de Sistemas.
