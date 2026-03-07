Todas as mudanças notáveis no projeto **SkyBoard** serão documentadas neste arquivo.

## [0.1.0] - 2026-03-07

### Adicionado
- Design inicial no Figma das telas de Autenticação, Home e ISS Tracking.
- Implementação da UI das telas de Auth e Home.
- Sistema de autenticação com **Google Sign-In** integrado ao **Firebase Auth**.
- Estrutura de navegação condicional (`RootNavigator`) para gerenciar o estado de Login vs. AppTabs.
- Configurações nativas iniciais para Android e iOS no `app.json`.
- Infraestrutura base do projeto (Navegação com React Navigation, ícones, gradientes e controle de imagens via Expo).

### Alterado
- Substituição dos ícones em imagem na Tab Bar por `expo-vector-icons` para melhorar a performance e harmonia do design.

### Corrigido
- Ajuste na tipagem de resposta do Google Sign-In (compatibilidade com v13+).