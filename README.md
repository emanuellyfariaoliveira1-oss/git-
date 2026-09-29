# Descrição
Uma empresa precisa desenvolver uma pequena aplicação para auxiliar no controle de seu inventário de patrimônio. Atualmente, os registros dos itens são mantidos de forma manual, dificultando a inclusão, consulta, alteração e exclusão das informações.

Para solucionar esse problema, a equipe de desenvolvimento decidiu criar um backend simples de gerenciamento de inventário, responsável por disponibilizar operações de CRUD (Create, Read, Update e Delete).

Nesta primeira versão do sistema, não será necessário utilizar um banco de dados. Os dados deverão ser armazenados temporariamente em um arquivo JSON, simulando uma base de dados.


---
* JSON
```JSON
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,<img width="1517" height="470" alt="Captura de tela 2026-09-29 100141" src="https://github.com/user-attachments/assets/1ab86979-e564-439a-911e-545d6d922c6b" />
<img width="1629" height="438" alt="Captura de tela 2026-09-29 100248" src="https://github.com/user-attachments/assets/9371b150-b690-4af6-bce7-4f3bedef2419" />

    "item": "celular",
    "local": "Laboratório 03",
    "dataRegistro": "2023-02-05",
    "valor": 1500,
    "patrimonio": "PAT-00126"
  }
]
```

* Tecnologias
  ---
  * node.js
  * JavaScript
  * JSON

* passo de instalação
  ```
  npm install
  npm run dev

  ```
---

* Rotas
  
  * get http://localhost:3000/
  * post http://localhost:3000/
  * put http://localhost:3000/
  * delete http://localhost:3000/

***

* Delete

<img width="1629" height="438" alt="Captura de tela 2026-09-29 100248" src="https://github.com/user-attachments/assets/cf11caa2-0c90-4483-a8ae-3492c0a06dd2" />


* Get

<img width="1517" height="470" alt="Captura de tela 2026-09-29 100141" src="https://github.com/user-attachments/assets/58718c24-2079-4fbe-b4b6-2b278f0b38a8" />

  
* Put
  
<img width="1601" height="566" alt="Captura de tela 2026-09-29 100107" src="https://github.com/user-attachments/assets/80a69f26-665d-41e6-bcb8-1f28849a58d5" />



* Post
<img width="1470" height="514" alt="Captura de tela 2026-09-29 100131" src="https://github.com/user-attachments/assets/ffb898b1-11ec-4e51-8d9b-405c774e8be4" />
