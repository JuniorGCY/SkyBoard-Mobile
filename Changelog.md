# Changelog - SkyBoard
Todas as mudanças notáveis no projeto **SkyBoard** serão documentadas neste arquivo.

## Fase 1

## [0.2.0] - Sprint 2: Rastreamento, GPS e Mapa (2026-03-21)

### Adicionado
- **Rastreamento de Satélites:** O aplicativo agora rastreia ativamente a Estação Espacial Internacional (ISS), o Telescópio Hubble e a Estação Chinesa (Tiangong).
- **Mapas Interativos:** Integração com o Google Maps para mostrar a posição exata do usuário e dos satélites no globo em tempo real.
- **Localização por GPS:** O aplicativo agora consegue ler o GPS do celular do usuário para centralizar o mapa e aprimorar os cálculos.
- **Busca Inteligente de Cidades:** Nova barra de pesquisa que converte o nome de qualquer cidade digitada em coordenadas matemáticas instantaneamente.
- **Banco de Dados Offline (WatermelonDB):** O aplicativo agora guarda dados no próprio celular. Isso economiza requisições de internet e permite calcular de forma mais rápida e independente onde os satélites estão e vão estar.
- **Memória Inteligente do App (Estado Global):** Criado um "cofre" virtual (Zustand) que guarda a localização do usuário e a compartilha com todas as telas, deixando o aplicativo mais rápido e sem falhas de recarregamento.
- **Melhorias Visuais e de Experiência (UX):**
  - Adicionado botão prático de "Limpar" (X) na barra de pesquisa.
  - Criada uma tela amigável (com ícone de telescópio) para informar o usuário quando não houver passagens visíveis de satélites nos próximos dias, evitando a sensação de tela "quebrada".
  - Marcador azul personalizado no mapa para destacar a base (localização) do usuário.

### Modificado
- **Organização Visual (Componentização):** As telas de rastreamento e detalhes foram divididas em componentes menores. Isso deixa o aplicativo mais leve, rápido e fácil de atualizar no futuro.
- **Navegação Livre no Mapa:** A câmera do mapa agora foca no satélite ao abrir, mas permite que o usuário arraste e explore o globo livremente sem que a tela fique "puxando" o mapa de volta à força.
- **Ordem de Passagem no Céu:** A lista de horários dos satélites agora é ordenada com precisão matemática (Tempo Universal), garantindo que os eventos apareçam na ordem exata que vão acontecer.
- **Nova Arquitetura do Projeto:** O código foi reestruturado e dividido por "funcionalidades" (features). Isso prepara o SkyBoard para crescer e receber novas ferramentas de forma extremamente organizada (projeto escalável).

### Corrigido
- **Correção de Processamento em Segundo Plano:** Resolvido um erro técnico estrutural, garantindo que os dados de localização e APIs sejam processados sem travar a interface do usuário.



## [0.1.0] - Sprint 1: Início (2026-03-07)

### Adicionado
- **Design:** Criação da identidade visual e layout (Figma) das telas de Login, Início e Rastreamento.
- **Telas Funcionais:** Construção visual inicial das telas no código do aplicativo.
- **Login Seguro:** Sistema de entrada no aplicativo utilizando a conta do Google (integrado com o sistema de segurança Firebase).
- **Controle de Acesso:** Sistema invisível que direciona o usuário para a tela de Login ou direto para o aplicativo, dependendo se ele já possui um acesso salvo.
- **Base do Aplicativo:** Configurações iniciais essenciais para o aplicativo rodar perfeitamente tanto em Android quanto em iOS.
- **Infraestrutura Visual:** Adição do sistema de navegação entre as abas, ícones padronizados e cores dinâmicas (gradientes).

### Alterado
- **Melhoria de Performance Visual:** Troca de ícones baseados em imagens pesadas por ícones vetorizados na barra inferior, deixando o aplicativo mais rápido e com o design mais harmonioso.

### Corrigido
- **Ajuste no Login:** Correção na comunicação técnica com os servidores do Google para garantir que a entrada do usuário funcione sem instabilidades.