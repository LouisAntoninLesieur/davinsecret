# Davinsecret

<img src="https://i.imgur.com/SU3VYuO.png" alt="DAVINSECRET BANNER" width="800"/>

*<span style="color:rgb(84, 48, 92)">**Davinsecret**</span> is an NPM package that allows you to quickly generate a JWT Secret in the .env file at the root of your project.*

## Table of Contents

- 🌟 [Features](#🌟-features)
- 📦 [Installation](#📦-installation)
- 📖 [Usage](#📖-usage)
  - 🌐 [With npx](#🌐-with-npx)
  - 💾 [With npm](#💾-with-npm)
- 🎮 [Other commands](#🎮-other-commands)
- 📄 [License](#📄-license)
- ✍🏻 [Author](#✍🏻-author)

## 🌟 Features

- **Quickly generate a JWT Secret**: Generate a JWT Secret in the .env file at the root of your project *(<span style="color:rgb(84, 48, 92)">**Davinsecret**</span> creates a .env file for you at the root of your project if it does not exist)*.
- **Customizable secret size**: Choose the number of bytes you want for your secret.
- **Documentation**: Access the documentation of the package directly in your console.
- **Easy to use**: Use the package with npx or npm.

## 📦 Installation

We recommend to install <span style="color:rgb(84, 48, 92)">**Davinsecret**</span> globally, or to use it with npx (see [Usage](#usage)).

```bash
npm install -g davinsecret
```

## 📖 Usage

### 🌐 With npx:

```bash
npx davinsecret s <bytes>
```

### 💾 With npm:

```bash
davin secret <bytes>
# or, shorter
davin s <bytes>
```

**bytes**: The number of bytes you want to generate for your secret.

## 🎮 Other commands

`doc` | `d`: Open the Davinsecret's documentation in your console.

## 📄 License

MIT

## ✍🏻 Author

Louis-Antonin Lesieur