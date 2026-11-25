# FreeAgentHub

Vitrine de jogadores de Valorant que estão como **free agent**, ou seja, sem time. Cada jogador tem um card com função, elo e agentes principais, para que times e coaches encontrem a peça que falta na line-up.

Projeto desenvolvido como prova prática da disciplina **Laboratório de Desenvolvimento Web** (Ciência da Computação — CESUPA): uma aplicação **SPA (Single Page Application)** feita com **React**.

## Tecnologias

- [React](https://react.dev/) (criado com `create-react-app`)
- [React Router DOM](https://reactrouter.com/) para a navegação entre páginas sem recarregar
- CSS Modules para estilos isolados por componente

## Funcionalidades

- Navegação entre 4 páginas (Início, Jogadores, Sobre e Contato) sem recarregar a página
- Navbar com destaque da aba ativa e rodapé presentes em todas as páginas
- Card de jogador reutilizável, que recebe os dados via props
- Formulário de contato (simulação, sem servidor)

## Como rodar

É preciso ter o [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/isacllr/freeagent-hub.git
cd freeagent-hub
npm install
npm start
```

O projeto abre em `http://localhost:3000`.

## Estrutura

```
src/
├── index.js            # ponto de entrada: renderiza o App dentro do BrowserRouter
├── index.css           # estilos globais (reset, fonte, cor de fundo)
├── App.js              # Navbar + rotas + Rodape
├── assets/jogadores/   # imagens dos jogadores
├── components/
│   ├── Navbar/         # menu de navegação
│   ├── Rodape/         # rodapé
│   └── CardJogador/    # card reutilizável do jogador
└── pages/
    ├── Home/           # rota "/"
    ├── Jogadores/      # rota "/jogadores"
    ├── Sobre/          # rota "/sobre"
    └── Contato/        # rota "/contato"
```

Cada componente e cada página tem o seu próprio arquivo `.module.css`.

## Conceitos aplicados

- **SPA com React Router:** o `BrowserRouter` conecta a aplicação à URL, o `Routes` escolhe qual `Route` mostrar e o `NavLink` troca de página sem recarregar.
- **Componentização e props:** a página Jogadores (pai) envia os dados para o `CardJogador` (filho), que os recebe por desestruturação. O mesmo componente é usado várias vezes com dados diferentes.
- **Imagens locais:** as fotos são importadas com `import` e passadas como prop.
- **CSS Modules:** o `index.css` guarda só o que é global; os estilos de cada componente ficam isolados no seu `.module.css` e são aplicados com `className={styles.nomeDaClasse}`.

## Autor

**Isac Lopes Rego** — [github.com/isacllr](https://github.com/isacllr)

---

Projeto acadêmico, sem vínculo com a Riot Games. Os jogadores exibidos são fictícios.
