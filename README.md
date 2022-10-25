# Soccer Championship API

<details>
 <summary>:brazil: Versão em Português</summary>
  
## Objetivo
  Criar uma api feita em Typescript e MySQL (Sequelize) para alimentar o frontend do portal de um campeonato de futebol imaginário entre times brasileiros. Ela consegue prover os resultados de partidas, editar o placar de partidas em andamento, calcular estatísticas de cada time e selecionar jogos de fora ou dentro de casa.
  A api segue uma arquitetura REST, em camadas MSC, contando com POO e princípios de SOLID. Ela também conta com testes de integração para cobrir o código (70%+).
  
## Desafios
 - Desenvolver funcionalidades de uma api utilizando Programação Orientada a Objetos.
 - Conectar o backend com o frontend da aplicação
 - Fazer testes de integração pela primeira vez
  
## Observações
 - O frontend foi desenvolvido pronto pela Trybe, só precisei construir o backend
 - A aplicação é monorepo, ou seja, tanto o back quanto o frontend estão no mesmo repositório
 - Assim como o frontend, o arquivo docker-compose foi desenvolvido pela Trybe. Entretando eu configurei os ambos Dockerfiles
  
## Executando a aplicação
 Em /soccer-championship-api/app rode:
```
npm run compose:up
```
  
Após os containeres serem criados e o healthcheck terminar:
  Acesse http://localhost:3000
  Ou então entre em /soccer-championship-api/app/frontend e rode
```
npm start
```
 Uma vez rodando, pelo navegador, faça o login e acesse a plataforma pelas seguintes credenciais:
 ```
  login: Admin
  senha: secret_admin
 ```

Caso deseje remover os containeres, rode:
```
npm run compose:down
```
## Rotas
### Login 
| Requisição | URL                                  |
| ---------- | ------------------------------------ |
| `POST`     | http://localhost:3001/login          |
| `GET`      | http://localhost:3001/login/validate |


### Teams
| Requisição | URL                             |
| ---------- | ------------------------------- |
| `GET`      | http://localhost:3001/teams     |
| `GET`      | http://localhost:3001/teams/:id |

### Matches

| Requisição | URL                                      |
| ---------- | ---------------------------------------- |
| `GET`      | http://localhost:3001/matches            |
| `POST`     | http://localhost:3001/matches            |
| `PATCH`    | http://localhost:3001/matches/:id        |
| `PATCH`    | http://localhost:3001/matches/:id/finish |

### Leaderboard

| Requisição | URL                                    |
| ---------- | -------------------------------------- |
| `GET`      | http://localhost:3001/leaderboard/     |
| `GET`      | http://localhost:3001/leaderboard/home |
| `GET`      | http://localhost:3001/leaderboard/away |

<br />

</details>
<details open> 
<summary>:us: English Version</summary>

## Objective
  Create an api made with Typescript and MySQL (Sequelize) to feed the frontend of a site about an imaginary soccer championship with Brazilian teams. It's able to provide the results of the matches, edit the score of matches in progress, calculate the stats of every team and select home and away games.
  The api follows the REST architecture, with MSC layers, having OOP and SOLID principles. It also counts with integration tests to cover the code (70%+).
  
## Challenges
 - Develop an api using OOP
 - Connect the front and backend of the application
 - Make integration tests for the first time
  
## Observations
 - The frontend was developed by Trybe, I developed only the backend
 - It's a monorepo application, in other words both front and back are in the same repository
 - Just like the frontend the docker-compose was made by Trybe. However, I configured both Dockerfiles

## Running the application

In /soccer-championship-api/app run:
```
npm run compose:up
```
  
After the containers were created and the healthcheck finishes:
  Access http://localhost:3000
  Or enter in /soccer-championship-api/app/frontend and run
```
npm start
```
 Once the application is running, on your browser, log in the platform with these credentials:
 ```
  login: Admin
  password: secret_admin
 ```

In case you want to remove the containeres, run:
```
npm run compose:down
```

<br />

## Endpoints

### Login

| Request | URL                                  |
| ------- | ------------------------------------ |
| `POST`  | http://localhost:3001/login          |
| `GET`   | http://localhost:3001/login/validate |

### Teams

| Request | URL                             |
| ------- | ------------------------------- |
| `GET`   | http://localhost:3001/teams     |
| `GET`   | http://localhost:3001/teams/:id |

### Matches

| Request | URL                                      |
| ------- | ---------------------------------------- |
| `GET`   | http://localhost:3001/matches            |
| `POST`  | http://localhost:3001/matches            |
| `PATCH` | http://localhost:3001/matches/:id        |
| `PATCH` | http://localhost:3001/matches/:id/finish |

### Leaderboard

| Request | URL                                    |
| ------- | -------------------------------------- |
| `GET`   | http://localhost:3001/leaderboard/     |
| `GET`   | http://localhost:3001/leaderboard/home |
| `GET`   | http://localhost:3001/leaderboard/away |

</details>

  
