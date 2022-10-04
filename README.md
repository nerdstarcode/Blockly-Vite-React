
# Blockly Vite-ReactJS

O projeto é um ponto de partida para criar aplicações com blockly no react.

O projeto react foi criado usando o Vite, caso o interesse o link para o getStartet está [aqui](https://vitejs.dev/guide/) 


## Primeiros passos

#### Passo 1: Preparando o terreno
Abra seu editor de código favorito e crie uma pasta onde o projeto será clonado

#### Passo 2: Clonar o repositório

```
  git clone https://github.com/nerdstarcode/Blockly-Vite-React.git
```

#### Passo 3: Instalar dependências

```
 npm install
```
#### Passo 4: Rodar o projeto

```
 npm run dev
```



## Documentação
Aqui vou lhe explicar onde você conseguirá encontrar o que e de onde partir para criar seu projeto
#### O componente [App](https://github.com/nerdstarcode/Blockly-Vite-React/blob/master/src/App.jsx)
É o centro de importação dos componentes, como costuma ser, nele  é chamado o componente [Workspace](https://github.com/nerdstarcode/Blockly-Vite-React/tree/master/src/components/Workspace)
#### O componente [Workspace](https://github.com/nerdstarcode/Blockly-Vite-React/tree/master/src/components/Workspace)
É onde se importa e onde se faz a exibição das funcionalidades do Blockly.
As importações
```
  import Category1Controller from '../../blocks/Category1/Controller'
  import Category2Controller from '../../blocks/Category2/Controller'
```
Essas duas importações são a base para montarmos a nossa [Toolbox](https://developers.google.com/blockly/guides/configure/web/toolbox)

A estrutura base dessas categorias pode ser encontrada na pasta [blocks/CategoryDefault/Controller.js](https://github.com/nerdstarcode/Blockly-Vite-React/blob/master/src/blocks/CategoryDefault/Controller.js)

| Propriedades      | Descrição                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| .Blocks           | Um Array para concentrar as importações de cada bloco                                                      |
| .category()       | Uma função que coleta as informações necessárias para a criação de cada bloco para organizalos na categoria|
| .import()         | Uma função que irá incorporar o código de cada bloco para que possam ser chamados                          |

No código disponibilizado na branch [master](https://github.com/nerdstarcode/Blockly-Vite-React), pode ser encontrado duas categorias com as importações feitas para servirem de exemplos, a [Category1](https://github.com/nerdstarcode/Blockly-Vite-React/tree/master/src/blocks/Category1) e a [Category2](https://github.com/nerdstarcode/Blockly-Vite-React/tree/master/src/blocks/Category2), lá tem um exemplo já feito de duas categorias com um bloco cada uma, qualquer dúvida pode mandar para esse [perfil no instagram](https://www.instagram.com/nerd_star_code/) que irei responder.

#### Exemplo de [Component](https://github.com/nerdstarcode/Blockly-Vite-React/blob/master/src/blocks/CategoryDefault/ComponentDefault.js)

| Propriedades      | Descrição                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| .Content           | É um objeto onde se define **"kind"**, que no nosso caso por padrão é **"block"** e o **type**, que é o nome do bloco|
| .Block             | É o código de definição do bloco. [saiba mais clicando aqui](https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools)|
| .Java              | É o código que ira gerar a "transpilação", é o código conseguido na parte "Generator Stub(s)" da developer tools. [saiba mais clicando aqui](https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools)|

Exemplos que estão no código podem ser encontrados nos componentes [Component](https://github.com/nerdstarcode/Blockly-Vite-React/blob/master/src/blocks/Category1/Component.js) e [BooleanComponent](https://github.com/nerdstarcode/Blockly-Vite-React/blob/master/src/blocks/Category2/BooleanComponent.js)

## Stack utilizada

**Front-end:** React, CSS

**Back-end:** Node

**Bibliotecas:** Blockly 

## Links das tecnologias utilizadas

 - [Vite](https://vitejs.dev/)
 - [React](https://reactjs.org/)
 - [Blockly](https://developers.google.com/blockly)
 - [Nodejs](https://nodejs.org/en/)

