## O que temos aqui?

Este é um projeto Base para uma design system agnóstica de tecnologia, utilizando de MonoRepo.

O objetivo é definir uma estrutura base pensando em build, minificação, estrutura de exportação e uma estrutura bem básica para que possa ser reaproveitada no maior número de tecnologias possíveis

Estrutura
Este projeto é estruturado como um MonoRepo (um mesmo espaço de trabalho com vários projetos. não é simplesmente alocar vários projetos no mesmo repositório, mas sim declarar junto, como dependências)
- tokens: 
    Definição: Tem como objetivo declarar todos os tokens compartilhados na design system como forma de padronização. 
    Aqui estamos incluindo cores, fontes, tamanho de fonte, espessura da fonte, espaçamento, etc.
    Podemos também declarar aqui padrões como box-shadow, tempo de animação... 
- ts-config: 
    Definição: Apenas uma config global do typescript para todos os pacotes
- eslint-config:
    Definição: Apenas uma config global do eslint para todos os pacotes
- docs: 
    Definição: Projeto com Storybook para importar e documentar os componentes de nosso design system
- react-example:
    Definição: Exemplo de uma biblioteca de componente sendo declarada na estrutura monorepo
