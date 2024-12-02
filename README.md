# **Vaga Certa - App Mobile**

Um aplicativo mobile desenvolvido em React Native que permite gerenciar cadastros de usuários, consultar vagas abertas e encerradas, adicionar ou atualizar usuários, e entrar em contato com recrutadores via WhatsApp. 

---

## **Índice**

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Conexão com a API](#conexão-com-a-api)
- [Contato e Suporte](#contato-e-suporte)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## **Visão Geral**

O **Vaga Certa** é um aplicativo que conecta usuários a vagas de emprego e permite gerenciar cadastros diretamente em um dispositivo móvel. Ele utiliza **Axios** para comunicação com a API e **Async Storage** para armazenamento local das credenciais do usuário, como e-mail e senha.

Para o aplicativo funcionar corretamente, é necessário rodar a API no repositório [API Vaga Certa](https://github.com/Arthurmendescouto/API-vagaCerta).

---

## **Funcionalidades**

- **Listagem de vagas**:
  - Vagas abertas e encerradas.
- **Gerenciamento de usuários**:
  - Adicionar, atualizar e buscar cadastros de usuários.
- **Autenticação**:
  - Armazena e-mail e senha do usuário usando **Async Storage** para facilitar o login.
- **Contato com recrutadores**:
  - Envio de mensagens via WhatsApp diretamente pelo app.

---

## **Pré-requisitos**

Antes de rodar o projeto, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão recomendada: 16.x ou superior)
- [Yarn](https://yarnpkg.com/) (instalado globalmente)

---

## **Instalação**

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Acesse o diretório do projeto:
   ```bash
   cd seu-repositorio

3. Instale o Yarn globalmente:
   ```bash
   npm install --global yarn

4. Instale as dependências do projeto:
   ```bash
   yarn install

5. Certifique-se de que a API está rodando. Veja Conexão com a API para mais detalhes.

## **Uso**

1. Inicie o ambiente de desenvolvimento do React Native:
   ```bash
   yarn start

2. Para rodar no Android:
   ```bash
   yarn android

3. Para rodar no iOS (apenas em sistemas macOS com Xcode configurado):
   ```bash
   yarn ios

4. Para rodar no iOS (apenas em sistemas macOS com Xcode configurado):

## **Conexão com a API**

Para o app funcionar corretamente, a API do projeto deve estar rodando. Siga os passos abaixo para configurar a API:

1. Clone o repositório da API:
   ```bash
   git clone https://github.com/Arthurmendescouto/API-vagaCerta.git

2. Siga as instruções do repositório da API para configurá-la e iniciá-la.

3. Certifique-se de que a API está acessível no endereço configurado no Axios dentro do app. O endereço pode ser configurado no arquivo:
   ```javascript
   const api = axios.create({
       baseURL: 'http://<seu-endereco-da-api>:<porta>', // Altere conforme necessário
   });
