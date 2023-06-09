# pokemapa-api

API para o app PokéMapa, desenvolvido para o trabalho da disciplina de Tópicos Especiais de Informática na FATEC de Itu, SP.

Disponível em: https://pokemapa-api.vercel.app/

<hr />

## Como executar o projeto utilizando Docker

```bash
# Clone o projeto
git clone https://github.com/splorg/pokemapa-api.git

# Entra na pasta do projeto
cd pokemapa-api

# Executa o docker-compose
docker compose up -d
```
Acesse a API em `http://localhost:3000/`

## Como executar o projeto localmente
É necessário o Node.js instalado e um banco de dados MongoDB disponível.

1. Clone o repositório
2. Na pasta raíz do projeto, execute o comando ```npm install```
3. Crie um arquivo .env com as variáveis de ambiente, seguindo o exemplo do arquivo .env.template:
```bash
DATABASE_URI=<string de conexão para um banco de dados MongoDB>
PORT=<porta em que o servidor será exposto>
```
4. Execute o comando `npm start`

Você pode agora acessar a API em localhost na porta que você definiu no .env (se não definir uma porta, será utilizada a 3000).
