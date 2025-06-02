# ⚠️ **Legacy Alerts Tutorial - Outdated Version**

**This tutorial uses Dialect's legacy v2 alerts stack which is now outdated.** 

For the latest version of Dialect's alerts stack and up-to-date documentation, please visit **[docs.dialect.to](https://docs.dialect.to)**.

We recommend using our latest stack for new projects. This repository is maintained for reference and learning purposes.

---

# Legacy Alerts Tutorial

A Next.js web app demonstrating integration with Dialect's legacy v2 alerts system on Solana.

## 📺 Video Tutorial

For a complete walkthrough of this integration, watch our detailed tutorial:

[![Dialect Alerts Integration Tutorial](https://img.youtube.com/vi/aPLaXqEkzJY/0.jpg)](https://www.youtube.com/watch?v=aPLaXqEkzJY)

**[▶️ Watch: Dialect Alerts Integration Tutorial](https://www.youtube.com/watch?v=aPLaXqEkzJY)**

## Prerequisites

- Node.js v18.18.0 or higher
- npm, pnpm, or yarn

## 🚀 Quick Start

### 1. Clone the Repository

```shell
git clone https://github.com/solana-developers/solana-templates
cd solana-templates/legacy-alerts-tutorial
```

### 2. Install Dependencies

```shell
npm install
# or
pnpm install
# or
yarn install
```

### 3. Environment Setup

Create your environment file:

```shell
cp .env.example .env
```

Update the `.env` file with your public key that was used to register the app with Dialect's services.

### 4. Start Development Server

```shell
npm run dev
# or
pnpm dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`.

## 🔐 App Registration

If you haven't registered your app with Dialect yet:

1. Visit **[dashboard.dialect.to](https://dashboard.dialect.to)** to register your application
2. **Important**: Create a new wallet/keypair specifically for this purpose
   - This key will be used to send messages to your users
   - **Don't use your daily hot wallet** for security reasons
   - Store this keypair securely and never expose it publicly

## 📁 Project Structure

```
├── src/
│   ├── app/          # Next.js app directory
│   └── components/   # React components
├── public/           # Static assets
└── package.json      # Dependencies and scripts
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learn More

- **[Dialect Documentation](https://docs.dialect.to)** - Latest alerts stack documentation
- **[Dialect Dashboard](https://dashboard.dialect.to)** - App registration and management
- **[Video Tutorial](https://www.youtube.com/watch?v=aPLaXqEkzJY)** - Step-by-step integration guide

## 🆕 Using create-solana-dapp (Alternative Setup)

You can also start a new project based on this template using the [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp) tool:

```shell
# npm
npx create-solana-dapp --template gh:solana-developers/solana-templates/templates/legacy-alerts-tutorial

# pnpm
pnpx create-solana-dapp --template gh:solana-developers/solana-templates/templates/legacy-alerts-tutorial

# yarn
yarn create solana-dapp --template gh:solana-developers/solana-templates/templates/legacy-alerts-tutorial
```

---

**Note**: This is a legacy example. For production applications, please use the latest Dialect alerts stack documented at [docs.dialect.to](https://docs.dialect.to).
