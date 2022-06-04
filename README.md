# Padrões de Projeto - GoF

Este repositório guarda as implementações dos padrões de projetos.

Os vídeos descrevendo os padrões estão publicados em [Padrões de Projeto (Design Patterns - GoF)](https://www.youtube.com/watch?v=MqddY6Ochkc&list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H).

Repositório com código original em: [luizomf - Design Patterns Typescript](https://github.com/luizomf/design-patterns-typescript).

## Lista de Aulas

- ✔️ Padrões de Projeto (Design Patterns - GoF) - Introdução - Parte 1/45
- ✔️ Padrões de Projeto - UML Básico - Parte 2/45
- ✔️ Padrões de Projeto - Configurando um projeto TypeScript - Parte 3/45
- ✔️ Singleton Teoria - Padrões de Projeto - Parte 4/45
- ✔️ Singleton Prática - Padrões de Projeto - Parte 5/45
- ✔️ Builder Teoria - Padrões de Projeto - Parte 6/45
- ✔️ Builder Prática - Padrões de Projeto - Parte 7/45
- ✔️ Prototype Teoria - Padrões de Projeto - Parte 8/45
- ✔️ Prototype Prática - Padrões de Projeto - Parte 9/45
- ✔️ Factory Method Teoria - Padrões de Projeto - Parte 10/45
- ✔️ Factory Method Prática - Padrões de Projeto - Parte 11/45
- ✔️ Abstract Factory Teoria - Padrões de Projeto - Parte 12/45
- ✔️ Abstract Factory Prática - Padrões de Projeto - Parte 13/45
- ✔️ Composite Teoria - Padrões de Projeto - Parte 14/45
- ✔️ Composite Prática - Padrões de Projeto - Parte 15/45
- ✔️ Adapter Teoria - Padrões de Projeto - Parte 16/45
- ✔️ Adapter Prática - Padrões de Projeto - Parte 17/45
- ✔️ Bridge Teoria - Padrões de Projeto - Parte 18/45
- ✔️ Bridge Prática - Padrões de Projeto - Parte 19/45
- ✔️ Decorator Teoria - Padrões de Projeto - Parte 20/45
- ✔️ Decorator Prática - Padrões de Projeto - Parte 21/45
- ✔️ Façade Teoria e Prática - Padrões de Projeto - Parte 22/45
- ✔️ Proxy Teoria - Padrões de Projeto - Parte 23/45
- ✔️ Proxy Prática - Padrões de Projeto - Parte 24/45
- ✔️ Flyweight Teoria - Padrões de Projeto - Parte 25/45
- ✔️ Flyweight Prática - Padrões de Projeto - Parte 26/45
- ✔️ Strategy Teoria - Padrões de Projeto - Parte 27/45
- ✔️ Strategy Prática - Padrões de Projeto - Parte 28/45
- ✔️ Command Teoria - Padrões de Projeto - Parte 29/45
- ✔️ Command Prática - Padrões de Projeto - Parte 30/45
- ✔️ Memento Teoria - Padrões de Projeto - Parte 31/45
- ✔️ Memento Prática - Padrões de Projeto - Parte 32/45
- ✔️ State Teoria - Padrões de Projeto - Parte 33/45
- ✔️ State Prática - Padrões de Projeto - Parte 34/45
- Mediator Teoria - Padrões de Projeto - Parte 35/45
- Mediator Prática - Padrões de Projeto - Parte 36/45
- Chain Of Responsibility Teoria - Padrões de Projeto - Parte 37/45
- Chain Of Responsibility Prática - Padrões de Projeto - Parte 38/45
- Template Method Teoria - Padrões de Projeto - Parte 39/45
- Template Method Prática - Padrões de Projeto - Parte 40/45
- Observer Teoria - Padrões de Projeto - Parte 41/45
- Observer Prática - Padrões de Projeto - Parte 42/45
- Iterator Teoria - Padrões de Projeto - Parte 43/45
- Iterator Prática - Padrões de Projeto - Parte 44/45
- Visitor Prática e Teoria - Padrões de Projeto - Parte 45/45

## Outros

**Seletor para pegar nome de todas as aulas da playlist**

```js
const playlist = document.querySelectorAll(
  '#contents > ytd-playlist-video-renderer > div:nth-child(2) > div > div > h3',
);

const playlistTitles = Array.from(playlist)
  .map((item) => item.innerText)
  .join('\n');
```
