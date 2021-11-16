<h1 align="center">
  API de Clientes
</h1>

## :rocket: Como executar

<ul>
  <li>Clonar o projeto e no diretório raiz executar o comando <strong>npm install</strong></li>
  <li>No diretório raiz, executar o comando <strong>docker-compose up</strong> (Caso dê conflito com a porta 5432, pare o serviço do postgres usando o comando <strong>sudo service postgresql stop</strong> no Linux e <strong>net stop postgresql-x64-9.3</strong> no Windows, e executar de novo o comando <strong>docker-compose up</strong>)</li>
  <li>Com o <strong>comando docker-compose up</strong> rodando, em outro terminal rodar as migrations utilizando o comando <strong>npx typeorm migration:run</strong></li>
  <li>Rodar o projeto com o comando <strong>npm run dev</strong></li>
  <li>Para acessar o swagger com as informações das rotas <link>http://localhost:3333/api-docs/</link> </li>
  <li>Em <strong>src/temp/insomnia__api-integration.json</strong> está o arquivo que pode ser importado no Insomnia para geração das rotas</li>
  <li>Gerar o token e passar para o header das outras rotas, as rotas só podem ser chamadas se for passado o token para o header</li>
  <li>Em <strong>src/temp/contacts-varejao.json</strong> está o arquivo .json que pode ser usado de exemplo para inserir os contatos</li>
</ul>

## :speech_balloon: Funcionalidades

<ul>
  <li>Cadastro de Contatos no banco de dados do cliente com validação para o nome e celular passada na rota</li>
  <li>Listagem dos Contatos Cadastrados</li>
  <li>Busca de contato por id</li>
  <li>Excluir contato por id</li>
</ul>

## :iphone: Recursos Aplicados

<ul>
  <li>Geração de token</li>
  <li>Banco rodando pela imagem do docker-compose</li>
  <li>Validação de cadastro</li>
  <li>SOLID</li>
</ul>

## ⌨️ Tecnologias

<ul>
  <li>TypeOrm</li>
  <li>Node</li>
  <li>PostgreSQL</li>
  <li>TypeScript</li>
  <li>jsonwebtoken</li>
  <li>Swagger</li>
  <li>Tysringe</li>
</ul>
