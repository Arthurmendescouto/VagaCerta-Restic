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
-[Expo versão 51 no celular](https://expo.dev/go?sdkVersion=51&platform=android&device=true )
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
   npx expo start

## **Conexão com a API**

Para o app funcionar corretamente, a API do projeto deve estar rodando. Siga os passos abaixo para configurar a API em outro repositório:

1. Clone o repositório da API:
   ```bash
   git clone https://github.com/Arthurmendescouto/API-vagaCerta.git

2. Siga as instruções do repositório da API para configurá-la e iniciá-la.

3. Configure o arquivo `api.ts` no diretório `services`. Atualize a propriedade `baseURL` para usar o IPv4 da sua máquina. Para descobrir o IPv4:

   - **No Windows**, abra o prompt de comando e digite:
     ```bash
     ipconfig
     ```
    - **No macOS/Linux**, abra o terminal e digite:
    ```bash
    ifconfig

4. Substitua `<seu-endereco-da-api>` no arquivo `api.ts` pelo seu IPv4 seguido da porta 3000. Por exemplo:

   ```javascript
   const api = axios.create({
       baseURL: 'http://192.168.0.100:3000', // Substitua pelo seu IPv4
   });

## **Contato e Suporte**

Se você tiver dúvidas ou encontrar problemas, sinta-se à vontade para entrar em contato:

- **E-mail**: [contato@seuprojeto.com](mailto:contato@seuprojeto.com)
- **WhatsApp**: +55 11 91234-5678

## **Contribuindo**

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.

2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-nova-feature

3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"

4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature

5. Abra um Pull Request.

## **Licença**

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
