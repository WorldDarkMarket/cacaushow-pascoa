# Cacau Show - Clone Adaptado para Next.js 16

Este é um clone adaptado da loja Cacau Show, desenvolvido em Next.js 16 com App Router, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Stack Tecnológica

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS 4 com shadcn/ui
- **Componentes**: shadcn/ui (Radix UI)
- **Ícones**: Lucide React
- **Animações**: Framer Motion
- **Gerenciamento de Estado**: Context API (Client-side)
- **Fontes**: Google Fonts (Playfair Display, Lora, Inter)

## ✨ Funcionalidades

- 🛒 Carrinho de compras com persistência no localStorage
- 👤 Sistema de autenticação (login/cadastro simulado)
- 🔍 Busca de produtos em tempo real
- ❤️ Sistema de favoritos
- 📱 Design responsivo (mobile-first)
- 🌓 Suporte a temas (light/dark)
- 🎨 Paleta de cores fiel ao Cacau Show
- ✨ Animações suaves e elegantes

## 🎨 Design

O projeto segue o princípio de "Elegância Clássica com Toques Modernos":

- **Paleta de Cores**: Marrom chocolate, dourado, creme e verde muted
- **Tipografia**: Playfair Display (títulos), Lora (textos), Inter (UI)
- **Layout**: Header fixo, hero banner carrossel, grid de produtos, footer completo

## 🛠️ Instalação

```bash
bun install
```

## 🏃 Desenvolvimento

```bash
bun run dev
```

O aplicativo estará disponível em http://localhost:3000

## 📦 Build para Produção

```bash
bun run build
bun run start
```

## 🔍 Verificação de Código

```bash
bun run lint
```

## 📦 Deploy na Vercel

### Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Projeto no GitHub (ou outro git provider)
3. Projeto de Node.js instalado

### Passos para Deploy

1. **Preparar o repositório**
   ```bash
   git add .
   git commit -m "Adaptado projeto Cacau Show para Next.js 16"
   git push origin main
   ```

2. **Importar na Vercel**
   - Acesse https://vercel.com/new
   - Clique em "Import" e selecione seu repositório
   - Configure as opções de build:
     - **Framework Preset**: Next.js
     - **Build Command**: `bun run build`
     - **Output Directory**: `.next`
     - **Install Command**: `bun install`

3. **Configurar Variáveis de Ambiente** (se necessário)
   - Adicione variáveis no painel da Vercel

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde a conclusão do build

5. **Após o Deploy**
   - A Vercel fornecerá uma URL (ex: https://cacaushow.vercel.app)
   - Você pode adicionar um domínio customizado nas configurações

### Configurações do `vercel.json`

O projeto já inclui um arquivo `vercel.json` com:

- Configuração de build
- Headers de segurança
- Região preferencial (iad1 - Virginia)
- Variáveis de ambiente padrão

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e tema
│   ├── layout.tsx           # Layout raiz com providers
│   └── page.tsx             # Página inicial
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   ├── Header.tsx           # Header com navegação
│   ├── Footer.tsx           # Footer com links
│   ├── HeroBanner.tsx       # Carrossel de banners
│   ├── ProductShowcase.tsx  # Vitrine de produtos
│   ├── CartDrawer.tsx       # Drawer do carrinho
│   ├── LoginDialog.tsx       # Modal de login
│   └── RegisterDialog.tsx   # Modal de cadastro
└── contexts/
    ├── AuthContext.tsx       # Contexto de autenticação
    ├── CartContext.tsx       # Contexto do carrinho
    ├── SearchContext.tsx    # Contexto de busca
    └── ThemeContext.tsx      # Contexto de tema
```

## 🎯 Personalização

### Cores

Edite `src/app/globals.css` para personalizar as cores:

```css
:root {
  --primary: #6BAE68;
  --secondary: #8B6F47;
  --accent: #D4AF37;
  /* ... */
}
```

### Produtos

Edite `src/components/ProductShowcase.tsx` para adicionar/modificar produtos.

### Banners

Edite `src/components/HeroBanner.tsx` para alterar os slides do carrossel.

## 📝 Licença

Este projeto é um clone educacional da loja Cacau Show. Todos os direitos reservados à Cacau Show.

## 🙏 Agradecimentos

- Cacau Show pela inspiração de design
- shadcn/ui pela biblioteca de componentes
- Next.js pelo excelente framework
- Tailwind CSS pelo sistema de estilização
