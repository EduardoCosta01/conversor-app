# Conversor de Moedas

Aplicacao mobile desenvolvida com React Native e Expo para converter valores entre moedas internacionais em tempo real, com base em taxa de cambio obtida por API externa.

## Resumo do projeto

O app permite selecionar a moeda de origem, definir a moeda de destino, informar um valor e calcular a conversao com apenas um toque. A interface foi organizada para uso rapido no celular, com botao de inversao de moedas, feedback de carregamento e exibicao de resultado com taxa aplicada.

## Funcionalidades

- Selecao de moeda de origem e destino (ex.: USD, BRL, EUR, GBP, JPY, CAD, AUD, CHF)
- Entrada de valor para conversao
- Consulta de taxa de cambio via API
- Conversao automatica do valor informado
- Exibicao do resultado e da taxa usada
- Botao para inverter moedas de origem/destino
- Indicador visual de carregamento durante a consulta

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript

## Como executar o projeto

### 1) Pre-requisitos

- Node.js instalado
- npm (normalmente ja vem com Node.js)
- Expo Go no celular (Android/iOS) ou emulador configurado

### 2) Instalar dependencias

```bash
npm install
```

### 3) Iniciar o app

```bash
npm start
```

Depois, escolha uma das opcoes no terminal:

- `a` para Android
- `i` para iOS (macOS)
- `w` para Web
- ou escaneie o QR Code com o Expo Go no celular

## Estrutura base

```text
conversor-app/
  src/
    components/
      Button/
      Input/
      ResultCard/
    constants/
      currencies.js
    services/
      api.js
    styles/
      colors.js
    utils/
      convertCurrency.js
  App.js
  App.styles.js
```

## Melhorias futuras sugeridas

- Historico das ultimas conversoes
- Validacao numerica mais completa para entrada de valor
- Tratamento de erros com mensagens mais especificas (offline, timeout, API indisponivel)
- Testes unitarios para utilitarios e componentes

