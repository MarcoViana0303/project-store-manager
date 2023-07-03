<h4 align="center">
  <br /><br />
  <img alt="CRUD" src="./crud.png" />
  <br /><br />
  Esta é a primeira API que eu desenvolvi utilizando a arquitetura MSC (model-service-controller)!

A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Utilizei o banco de dados MySQL para a gestão de dados. Além disso, a API é RESTful.
</h4>

## Instalando Dependências
### Com Docker
> Backend

* Suba os containeres: 
```bash
docker-compose up -d
``` 

* Em seguida abra o terminal interativo do container: 
```bash
docker exec -it store_manager bash
``` 

* Instale as dependências dentro do container: 
```bash
npm install
```
> Para rodar a API 

* Rode o seguinte comando dentro do container: 
```bash
npm run debug
```
> Testes

* Dentro do terminal do container:
```bash
npm test
``` 
* Para rodar os testes unitários: 
```bash
npm run test:mocha
```

### Sem Docker

* Instale as dependências [Caso existam]
```bash
npm install
``` 

* Execute a aplicação com 
```bash
npm start
```

Ou: 

```bash
npm run debug
```

> Testes

* Rode o comando:
```bash
npm test
``` 

* Para rodar os testes unitários:
```bash
npm run test:mocha
```

## Feedback

Encontrou algum erro ou está com alguma dúvida? Não deixe de entrar em contato comigo!


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marco-viana2022/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://marcoviana.dev@gmail.com/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://marcoviana-dev.vercel.app/)
