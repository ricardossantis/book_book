# Project: BookBook

A empresa BookBook está com uma ideia ousada para competir de frente com grandes players do mercado de vendas de Livros físicos e eBook. Trata-se de um projeto chamado BookBook, o qual será uma rede social voltada para consumidores de livros. Futuramente, a empresa BookBook pretende usar as informações dos usuários para oferecer a venda de livros. Mas por ora, a empresa BookBook quer apenas um MVP para validar o produto.

## User History

- **user is logout**

  - menu
    - login
      - **user is login**
    - register

- **user is login**
  - menu
    - timeline
      - books reads
        - feedbacks
          - profile
            - users info
            - graph/chart
            - users shelf's
    - shelf
      - wishlist
        - add to reading
      - reading
        - add to read
      - read
        - create feedbacks
    - search book
      - search
      - pagination
      - book preview
    - options
      - user profile
        - user info
        - books read
        - give feedbacks
      - logout
        - **user is logout**

## Link Vercel

- https://projeto-bookbook.vercel.app/login

- **Note: this project is create by [Luis Cazuriaga](https://www.linkedin.com/in/luis-cazuriaga-49b9201a2/), [Christopher William](https://www.linkedin.com/in/christopher-william-4363321a5/), [Ricardo Souza](https://www.linkedin.com/in/ricardodesantis/) e [Maicon Lourenço](https://www.linkedin.com/in/maiconlourenco/), see more about!**

## Learn More About [Kenzie Academy](https://kenzie.com.br/)

Somos uma escola norte-americana que veio para o Brasil com o objetivo de ofertar ensino de qualidade para quem deseja trabalhar na área da tecnologia. Temos como foco o aprendizado do aluno, desde o nível técnico de um programador full stack, até soft-skills para entrar no mercado de trabalho.



// 1 - fazer updateBook com os api.put's , lembrar de tirar o set auth -FEITO
//  2 - fazer as desconstruções - ALGUMAS
// 3 - colocar na prateleira/perfil o id na rota,FEITO 
// 3.2 -  quando reinicia server da pra entrar nos menus com id undefined
// 3.1 -  tirar os dois useEffects e passar o id do usuario no shelves REVER COM JOÃO
// 4 - mudar os estilos na timeline DESCONSTRUIR - AINDA NÃO
// 5 - OLHAR AS MUDANÇAS DO SEARCH -Feito - perguntar para maicon
//6 - APLICAR ARROW FUNCTION EM TUDO - feito


alterar o reducer para helper - feito

ERROS Econtrados

1 - quando usar palavras que não existem na api separadamente da erro - FEITO
2 - totalItems no search - solucionando alguns bugs
3 -  bug do useInfo  getBooks - se id undefined não faz requisição