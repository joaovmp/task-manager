# Task Manager

Este é um aplicativo simples de gerenciamento de tarefas que consiste em um backend construído com Nest.js e um frontend desenvolvido em React.js. O projeto utiliza o TypeORM para a camada de persistência, seguindo o padrão MVC (Model-View-Controller) para organizar a arquitetura.

## Tecnologias Utilizadas

### Backend (Nest.js)

- **Nest.js**: Framework Node.js para construção de aplicativos server-side altamente escaláveis e eficientes.

- **TypeORM**: ORM (Object-Relational Mapping) para Node.js e TypeScript, que oferece suporte a vários bancos de dados relacionais.

- **MVC (Model-View-Controller)**: Padrão de arquitetura utilizado para separar as responsabilidades do aplicativo em três partes principais: Model (Modelo), View (Visualização) e Controller (Controlador).

### Frontend (React.js)

- **React.js**: Biblioteca JavaScript de código aberto para construir interfaces de usuário.

- **Axios**: Biblioteca para fazer requisições HTTP do navegador ou Node.js.

- **Tailwind CSS**: Framework de design CSS utilizado para estilizar os componentes.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joaovmp/task-manager.git
    ```

2. Instale as dependências do frontend e do backend:

    ```bash
    cd task-manager/task-manager-client
    npm install
    cd ../task-manager
    npm install
    ```

## Execução

1. Execute o backend:

    ```bash
    cd task-manager
    npm run start
    ```

2. Execute o frontend:

    ```bash
    cd task-manager-client
    npm start
    ```

Acesse o aplicativo no seu navegador em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com novas funcionalidades, correções de bugs ou melhorias. Basta seguir estes passos:

1. Fork este repositório.
2. Crie uma nova branch com a sua feature: `git checkout -b feature/nova-feature`.
3. Faça o commit das suas mudanças: `git commit -m 'Adiciona nova feature'`.
4. Faça o push para a sua branch: `git push origin feature/nova-feature`.
5. Envie um pull request.
