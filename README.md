# 🌌 SkyBoard

pt:
**SkyBoard** é um aplicativo mobile em desenvolvimento para amantes da astronomia e astrofotografia. O objetivo é fornecer ferramentas precisas para observação do céu, monitoramento de eventos astronômicos e gerenciamento de sessões de captura.

Objetivo:
O SkyBoard nasceu de uma necessidade pessoal: a frustração de ter que usar múltiplos aplicativos para cobrir todas as necessidades de um astrônomo amador. Desenvolvi este projeto para ser o hub definitivo para entusiastas do espaço. Com ele, você não precisa mais pular de app em app. O SkyBoard centraliza:

**Observação e Eventos**: Saiba exatamente o que está acontecendo no céu e não perca nenhum fenômeno.

**ISS Tracking e Satélites**: Acompanhe a órbita e a passagem da Estação Espacial e outros satélites de forma unificada.

**Comunidade**: Um espaço dedicado para compartilhar astrofotografias, trocar dicas e interagir com outros amantes da astronomia.

**Guia de Equipamentos**: Recomendações e curadoria das melhores marcas de telescópios em lojas confiáveis.

## 🚀 Funcionalidades Planejadas
1\. **Dashboard de Eventos**: Calendário dinâmico com notificações de eclipses, conjunções e chuvas de meteoros.

2\. **Rastreador de Astros e ISS**: Mapa em tempo real da Estação Espacial e coordenadas (Azimute/Altitude) de planetas. (N2YO API)

3\. **Índice de Seeing (Antoniadi)**: Algoritmo que traduz dados meteorológicos complexos em uma nota de estabilidade atmosférica.

4\. **Aba de Recomendações**: Curadoria de equipamentos com links de afiliados (Monetização Passiva).

5\. **Comunidade Social**: Feed de fotos/vídeos com metadados técnicos (equipamento usado) e links para redes sociais dos usuários.

6\. **IA Astro-Grader (Futuro)**: Sistema de análise de fotos para dar notas e dicas de melhoria.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) - Framework para apps nativos.
- [Expo](https://expo.dev/) - Plataforma de desenvolvimento e build.
- [Firebase](https://firebase.google.com/) - Autenticação e infraestrutura de backend.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança do código.
- [React Navigation](https://reactnavigation.org/) - Roteamento e navegação.

## 📦 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/JuniorGCY/SkyBoard-Mobile.git](https://github.com/JuniorGCY/SkyBoard-Mobile.git)

2. **Instale as dependências:**
   npm install

3. **Inicie o servidor de desenvolvimento:**
   npx expo start

4. **Execute no emulador ou dispositivo físico:**
   Pressione a para Android ou i para iOS.


## 🗺️ Planejamento e Design

Para acompanhar a evolução do SkyBoard e entender o processo criativo, você pode acessar:

* [**Protótipo no Figma**](https://www.figma.com/design/YHQnZHZC0feifBPGfbX6fk/SkyBoard?m=auto&t=Frw4QtaIZA0KslEc-1) - Design de interface e experiência do usuário.
* [**Planejamento no Trello**] - Roadmap de funcionalidades, bugs conhecidos e tarefas em progresso.

<details>
  <summary>📸 Clique para ver o quadro de planejamento</summary>
  <br />
  <img src="./assets/trello.png" alt="Quadro do Trello SkyBoard" width="100%">
</details>

<details>
  <summary>📸 Clique para ver o design inicial do app no React Native</summary>
  <br />
  <img src="./assets/home.png" alt="Print da tela home no emulador tela pequena" width="100%">
  <br />
  <img src="./assets/home2.png" alt="Print da tela home no emulador tela grande" width="100%">
</details>

🗺️ Roadmap de Desenvolvimento

**Fase 1**: MVP Útil

**Foco**: Entregar valor imediato com o menor esforço de backend.
**Telas**: Tela Auth, Home e ISS Tracker.
**Meta**: O usuário abre o app, faz registro ou login, e então e poderá saber quando ver a \*\*ISS\*\* no céu.

**Fase 2**: Planetas e Eventos

**Foco**: Mostrar quandos eventos astronômicos como: Planetas, chuvas de meteoros, eclipse e muito mais, serão visiveis.
**Telas**: Observar.
**Meta**: O usuário poderá descobrir os principais eventos e marcar na sua tela Home, o seu favorito.

**Fase 3**: Social e Engajamento

**Foco**: Retenção de usuários.
**Telas**: Aba de Comunidade e Perfil de Usuário.
**Lógica**: Autenticação (Google/Facebook) e Supabase para armazenamento de imagens.
**Social**: Deep linking para Instagram e TikTok.

**Fase 4**: Inteligência e Monetização

**Foco**: Transformar o app em uma ferramenta técnica.
**Telas**: Implementação do \*\*Índice de Seeing\*\* e a \*\*Aba de Compras\*\*.
**Meta**: Ajudar o usuário quais as melhores condições de observação e ajudar na escolha do Telescópio.


🛡️ Direitos Autorais
Este projeto é de uso pessoal e faz parte do meu portfólio de desenvolvimento mobile.
Todos os direitos reservados. A visualização do código é permitida para fins de aprendizado e avaliação técnica, mas a reprodução, modificação ou redistribuição de partes ou do todo não está autorizada sem permissão prévia.

Beta em breve!




EN:
**SkyBoard** It is a mobile application under development for astronomy and astrophotography enthusiasts. The goal is to provide precise tools for observing the sky, monitoring astronomical events, and managing capture sessions.

Objective:

SkyBoard was born out of a personal need: the frustration of having to use multiple apps to cover all the needs of an amateur astronomer. I developed this project to be the ultimate hub for space enthusiasts. With it, you no longer need to jump from app to app. SkyBoard centralizes:

**Observation and Events**: Know exactly what's happening in the sky and don't miss any phenomena.

**ISS Tracking and Satellites**: Track the orbit and passage of the Space Station and other satellites in a unified way.

**Community**: A dedicated space to share astrophotographs, exchange tips, and interact with other astronomy lovers.

**Equipment Guide**: Recommendations and curation of the best telescope brands in reliable stores.


## 🚀 Planned Features

1. **Events Dashboard**: Dynamic calendar with notifications for eclipses, conjunctions, and meteor showers.

2. **Astrological and ISS Tracker**: Real-time map of the Space Station and coordinates (Azimuth/Altitude) of planets. (N2YO API)'
'
3. **Seeing Index (Antoniadi)**: An algorithm that translates complex meteorological data into an atmospheric stability score.

4. **Recommendations Tab**: Curated selection of equipment with affiliate links (Passive Monetization).

5. **Social Community**: Feed of photos/videos with technical metadata (equipment used) and links to users' social networks.

6. **AI Astro-Grader (Future)**: Photo analysis system to provide ratings and improvement tips.

## 🛠️ Technologies Used

- [React Native](https://reactnative.dev/) - Framework for native apps.

- [Expo](https://expo.dev/) - Development and build platform.

- [Firebase](https://firebase.google.com/) - Authentication and backend infrastructure.

- [TypeScript](https://www.typescriptlang.org/) - Static typing for greater code security.

- [React Navigation](https://reactnavigation.org/) - Routing and navigation.

## 📦 Installation and Execution

To run the project locally, follow the steps below:

1. **Clone the repository:**


git clone [https://github.com/JuniorGCY/SkyBoard-Mobile.git](https://github.com/JuniorGCY/SkyBoard-Mobile.git)

2. **Install the dependencies:**

npm install

3. **Start the development server:**

npx expo start

4. **Run on the emulator or physical device:**

Press a for Android or i for iOS.


## 🗺️ Planning and Design

To follow the evolution of SkyBoard and understand the creative process, you can access:

* [**Prototype in Figma**](https://www.figma.com/design/YHQnZHZC0feifBPGfbX6fk/SkyBoard?m=auto&t=Frw4QtaIZA0KslEc-1) - User interface and experience design.
* [**Planning in Trello**] - Roadmap of features, known bugs, and tasks in progress.

<details>
  <summary>📸 Click to view the planning board.</summary>
  <br />
  <img src="./assets/trello.png" alt="Quadro do Trello SkyBoard" width="100%">
</details>

<details>
  <summary>📸 Click to see the initial app design in React Native</summary>
  <br />
  <img src="./assets/home.png" alt="Screenshot of the home screen on the small screen emulator" width="100%">
  <br />
  <img src="./assets/home2.png" alt="Screenshot of the home screen on the emulator large screen" width="100%">
</details>


🗺️ Development Roadmap

**Phase 1**: Useful MVP

**Focus**: Deliver immediate value with minimal backend effort.
**Screens**: Auth screen, Home screen, and ISS Tracker.
**Goal**: The user opens the app, registers or logs in, and then can see when the ISS is visible in the sky.

**Phase 2**: Planets and Events

**Focus**: Show when astronomical events such as planets, meteor showers, eclipses, and more will be visible.
**Screens**: Observe.
**Goal**: The user can discover the main events and mark their favorite on their Home screen.

**Phase 3**: Social and Engagement

**Focus**: User retention.
**Screens**: Community tab and User Profile.
**Logic**: Authentication (Google/Facebook) and Subbase for image storage.
**Social**: Deep linking to Instagram and TikTok.

**Phase 4**: Intelligence and Monetization

**Focus**: Transforming the app into a technical tool.
**Screens**: Implementation of the *Seeing Index* and the *Purchases Tab*.
**Goal**: Helping the user determine the best viewing conditions and assisting in telescope selection.




🛡️ Copyright Notice
This project is for personal use and is part of my mobile development portfolio.

All rights reserved. Viewing the code is permitted for learning and technical evaluation purposes, but reproduction, modification, or redistribution of parts or the whole is not authorized without prior permission.

Beta coming soon!