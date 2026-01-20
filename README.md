# 🧶 Edijane Crochê - Arte Artesanal

> "Arte feita a mão, ponto a ponto, com muito amor e dedicação! "

Este projeto é um site de portfólio e catálogo digital desenvolvido para a **Edijane Crochê**, focado na exibição de bolsas e acessórios artesanais. O objetivo é apresentar os produtos de forma elegante e facilitar o contato de clientes diretamente pelo WhatsApp.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)

## 📋 Sobre o Projeto

O site funciona como uma vitrine virtual. Ele foi projetado com uma estética delicada (paleta de cores em tons de rosa e bordô) e foca na experiência do usuário móvel (Mobile First), dado que a maior parte do público acessa via celular.

### ✨ Funcionalidades Principais

* **Galeria de Produtos:** Exibição de produtos em grid responsivo (ajusta-se de 1 a 3 colunas dependendo da tela).
* **Integração Direta com WhatsApp:**
    * Cada produto possui um botão "Saiba mais".
    * Ao clicar, o script gera automaticamente uma mensagem personalizada com o **nome** e o **preço** do item específico para enviar ao vendedor.
* **Visualização em Lightbox:** Clique nas imagens da galeria para ampliá-las em um modal (zoom), permitindo ver detalhes dos pontos do crochê.
* **Menu Lateral Interativo (Sidebar):**
    * Pode ser aberto clicando na alça lateral ou arrastando (gesto de *swipe*) no mobile.
    * Navegação suave (Smooth Scroll) para as seções da página.
* **Design Responsivo:** Layout totalmente adaptável para celulares, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:**
    * Flexbox e CSS Grid para layout.
    * Animações e transições suaves.
    * Variáveis de cores e media queries.
* **JavaScript (Vanilla):**
    * Manipulação do DOM.
    * Lógica de gestos (Pointer Events) para o menu lateral.
    * Codificação de URL para mensagens do WhatsApp.
* **Bibliotecas e Fontes:**
    * [Font Awesome](https://fontawesome.com/): Ícones de redes sociais.
    * [Google Fonts](https://fonts.google.com/): Fontes *Great Vibes* (cursiva) e *Playfair Display* (serifada).

## 📂 Estrutura de Arquivos

```text
/
├── index.html      # Estrutura principal da página
├── style.css       # Estilos, cores e responsividade
├── script.js       # Lógica do menu, lightbox e botões WhatsApp
└── assets/         # Pasta contendo as imagens (logos e produtos)
