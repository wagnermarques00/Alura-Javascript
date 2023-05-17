## Executando o JSON Server

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode verificar a versão instalada do Node.js executando o comando `node -v` no terminal.
2. No diretório raiz do seu projeto, verifique se o arquivo `db.json` existe e está populado com os dados desejados.
3. Abra o terminal e navegue até o diretório raiz do seu projeto.
4. Execute o seguinte comando para iniciar o JSON Server e fazer com que ele assista o arquivo `db.json`:

```
shellCopy code
json-server --watch db.json
```

1. O JSON Server será iniciado e estará disponível em `http://localhost:3000`.

Agora você pode fazer solicitações HTTP para a API REST falsa usando as rotas definidas no arquivo `db.json`. Por exemplo, para obter todos os vídeos, faça uma solicitação GET para `http://localhost:3000/videos`.

Certifique-se de manter o terminal aberto enquanto estiver usando o JSON Server. Ele fornecerá informações sobre as solicitações recebidas e outras mensagens úteis.

Espero que isso ajude você a executar o JSON Server e utilizar o arquivo `db.json` existente neste projeto!