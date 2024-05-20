
# Desafio em Angular/Spring

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Este projeto especificamente trata-se do Angular desenvolvido em spring/boot.

## Índice
- [Sobre](#sobre)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre
Você está trabalhando em um projeto de uma aplicação web usando Java (Spring) no
back-end e angular no front-end. Sua tarefa é criar a funcionalidade de cadastro de
usuários com asseguintes regras:

API de Back-end (Java/ Spring):
• Crie uma API RESTful em Java para processar o registro de usuários.
• Valide os dados recebidos da solicitação, incluindo a confirmação de senha.
• Armazene os usuários registrados em um banco de dados PostgreSQL.
• Retorne uma resposta apropriada para o front-end. (por exemplo, sucesso ou
erro).

Página de Cadastro (Angular):
• Crie uma página de registro de usuário com os seguintes campos:
• Nome (obrigatório, mínimo de 3 caracteres, máximo de 50 caracteres).
• E-mail (obrigatório, deve ser um e-mail válido).
• Senha (obrigatória, mínimo de 6 caracteres, máximo de 20 caracteres).
• Confirmação de Senha (obrigatória e deve coincidir com a senha).
Validações (Angular):
• Exiba mensagens de erro apropriadas quando os campos não atenderem às
regras especificadas acima.
• Desabilite o botão de envio enquanto houver erros de validação

## Instalação
1. Clone o repositório:
   ```sh
 https://github.com/marcosgsilva/desafioangular.git](https://github.com/marcosgsilva/desafioangular.git)#

Rodar dentro do projeto: npm i
  

# requisitos
1. Ter instalando no minimo a versão do Node 18, você pode instalar via nvm que é um excelente gerenciador de versão do Node.
2. Ter Instalado o angular/cli versão 17 ou usar o npx para instalar os packages.
3. Utilizar o VSCode ou qualquer outra IDE para desenvolvimento.

## Uso
1. Rodar a aplicação

```
   npx ng serve
```
2. Para abrir o Navegador
 ```
   http://localhost:4200
```

Segue resultado da tela de Cadastro

![Captura de tela de 2024-05-20 18-27-12](https://github.com/marcosgsilva/desafioangular/assets/12539016/5375a825-a411-42a8-bb9e-1e03453b2dbd)