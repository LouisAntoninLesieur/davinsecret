# Davinsecret

<img src="https://i.imgur.com/SU3VYuO.png" alt="DAVINSECRET BANNER" width="800"/>

*<span style="color:rgb(84, 48, 92)">**Davinsecret**</span> is an NPM package that allows you to quickly generate a JWT Secret in the .env file at the root of your project.*

## Table of Contents

- 🌟 Features
- 📦 Installation
- 📖 Usage
  - 💻 When installed globally
  - 🌐 With npx
  - 💾 With npm
- 🎮 Other commands
- 📄 License
- ✍🏻 Author

## 🌟 Features

- **Secure**: No display. No leak. Your secret is directly stored in your .env file. Only you can access it.
- **Quickly generate a JWT Secret**: Generate a JWT Secret in the .env file at the root of your project *(<span style="color:rgb(84, 48, 92)">**Davinsecret**</span> creates a .env file for you at the root of your project if it does not exist)*.
- **Customizable secret size**: Choose the number of bytes you want for your secret.
- **Documentation**: Access the <span style="color:rgb(84, 48, 92)">**Davinsecret**</span> documentation directly in your console.
- **Easy to use**: Use the package with npx or npm.

## 📦 Installation

We recommend to install <span style="color:rgb(84, 48, 92)">**Davinsecret**</span> globally, or to use it with npx (see [Usage](#usage)).

```bash
npm install -g davinsecret
```

## 📖 Usage

### 💻 When installed globally:

```bash
davin secret <bytes>
# or, shorter
davin s <bytes>
```

### 🌐 With npx:

```bash
npx davinsecret secret <bytes>
# or, shorter
npx davinsecret s <bytes>
```

### 💾 With npm:

Note : you will need to write a dedicated script in your `package.json` to use the `davin` command.

```json
  "scripts": {
    "davin": "davinsecret"
  }
```

Then, you can use the following command :

```bash
npm run davin secret <bytes>
# or, shorter
npm run davin s <bytes>
```

**bytes**: The number of bytes you want to generate for your secret.

## 🎮 Other commands

`dotenv` | `dot` : Check if dotenv dependency is installed in your project. If not, guides you to install it.

`doc` | `d`: Open the Davinsecret's documentation in your console.

## 📄 License

MIT

## ✍🏻 Author

Louis-Antonin Lesieur