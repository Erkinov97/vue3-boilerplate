<div align="center">
<a href="https://vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://router.vuejs.org/logo.svg" width="80" alt="Vue Logo" /></a>
<a href="https://www.typescriptlang.org/" target="blank" style="margin: 0 1rem;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343" width="80" alt="Typescript Logo" /></a>
<a href="https://vitejs.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vitejs.dev/logo.svg" width="80" alt="Vite 3 Logo" /></a>
<a href="https://pinia.vuejs.org/" target="blank" style="margin: 0 1rem;"><img src="https://pinia.vuejs.org/logo.svg" width="50" alt="Pinia Logo" /></a>
<a href="https://vue-i18n.intlify.dev/" target="blank" style="margin: 0 1rem;"><img src="https://vue-i18n.intlify.dev/vue-i18n-logo.svg" width="90" alt="Vue i18n Logo" /></a>

<br><br>

[![license](https://img.shields.io/github/license/Erkinov97/vue3-boilerplate)](LICENSE)
[![repo-size](https://img.shields.io/github/repo-size/Erkinov97/vue3-boilerplate)](repo-size)
[![last-commit](https://img.shields.io/github/last-commit/Erkinov97/vue3-boilerplate)](last-commit)
[![release](https://img.shields.io/github/release/Erkinov97/vue3-boilerplate)](release)

<h1>✨ Vue Boilerplate ✨</h1>
</div>

The boilerplate of Vue v3, Typescript, Vite, Vue Router, Pinia, Axios, Tailwind CSS, and Vue i18n for buildings efficient, faster, maintainable, and scalable for enterprise applications.

### 📚 Table of Contents

- [❓ What's Included?](#-whats-included)
- [🖇️ Core Dependencies](#️-core-dependencies)
- [🗂️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [💡 Scripts](#-scripts)
- [📝 License](#-license)

## ❓ What's Included?

- [ ] Authentication: Provides a secure login system for users.
- [ ] Authorization: Implements role-based access control to manage user permissions.
- [ ] Multiple Language: Supports localization and enables users to switch between different languages.
- [ ] Theme (Light/Dark/System): Offers a choice of light, dark, or system-based theme for a personalized user experience.
- [ ] Form Validation: Includes form validation functionality to ensure data integrity and improve user experience.
- [ ] Error Handling: Handles and displays error messages in a user-friendly manner.
- [ ] API Integration: Integrates with external APIs to fetch data and provide dynamic content.
- [ ] Responsive Design: Ensures the application is optimized for various screen sizes and devices.
- [ ] Testing: Includes a test suite with unit tests and integration tests for reliable code quality.
- [ ] Documentation: Provides comprehensive documentation to guide developers and users.

## 🖇️ Core Dependencies

[&#8593; Back to top](#-table-of-contents)

| Library      | Version                                                                 | Description                                                                                        |
| ------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Vue          | ![Vue](https://img.shields.io/badge/%5E3.4.21-blue.svg)                 | A progressive JavaScript framework for building user interfaces.                                   |
| Vite         | ![Vite](https://img.shields.io/badge/%5E^5.2.0-blue.svg)                | Next-generation frontend build tooling for fast and efficient development.                         |
| Typescript   | ![Typescript](https://img.shields.io/badge/%5E^5.2.2-blue.svg)           | A superset of JavaScript that enhances the development experience with static typing.              |
| Vue Router   | ![Vue Router](https://img.shields.io/badge/%5E^4.3.0-blue.svg)           | Official router for Vue.js, used for managing application routes.                                  |
| Vue i18n     | ![Vue i18n](https://img.shields.io/badge/%5E9.13.1-blue.svg)            | Internationalization plugin for Vue.js applications, enabling multi-language support.              |
| Pinia        | ![Pinia](https://img.shields.io/badge/%5E2.1.7-blue.svg)                | An intuitive store for Vue.js applications, providing centralized state management.                |
| Axios        | ![Axios](https://img.shields.io/badge/%5E1.6.8-blue.svg)                | Promise-based HTTP client for making API requests.                                                 |
| Tailwind CSS | ![Tailwind CSS](https://img.shields.io/badge/%5E3.4.3-blue.svg)         | A utility-first CSS framework for rapid UI 
development.                                   |
| Vite-Plugin-Vue-Devtools | ![ Vite-Plugin-Vue-Devtools](https://img.shields.io/badge/%5E3.4.3-blue.svg)         | The next iteration of Vue DevTools.                                     |

## 🗂️ Project Structure

```
├── public/
│   ├── assets
│   │   ├── fonts
|   |   └── images
│   └── favicon.ico
├── src
│   ├── assets
│   │   ├── images
│   │   └── styles
│   ├── components
│   │   ├── ui
│   │   └── ...
│   ├── constants
│   ├── http
│   │   ├── axios
│   │   └── index.ts
│   ├── layouts
│   │   ├── MainLayout.ts
│   │   └── ...
│   ├── locales
│   │   ├── en
│   │   ├── ru
│   │   └── uz
│   ├── router
│   │   ├── index.ts
│   │   ├── routes.ts
│   │   └── ...
│   ├── services
│   ├── types
│   ├── utils
│   ├── App.ts
│   └── main.ts
├── package.json
└── ...
.
```

## 🚀 Getting Started

### Prerequisites

[&#8593; Back to top](#-table-of-contents)

1. [Node Js](https://nodejs.org/en/) version `v20.10.0`. The current Long Term Support (LTS) release is an ideal starting point.
2. [Visual Studio Code](https://code.visualstudio.com/download). Visual Studio Code is the free and open-sourced code editor. It is one of the top most editor used especially for JavaScript application development.

   **Recommended Plugin for VSCode**

   - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
   - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
   - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### Installation

[&#8593; Back to top](#-table-of-contents)

1.  Clone this repository to your computer:

    ```sh
    https://github.com/Erkinov97/vue3-boilerplate.git
    cd vue3-boilerplate
    code .
    ```

2.  From the project's root directory, install the required packages (dependencies):

    ```sh
    pnpm install
    ```
    or
    ```sh
    pnpm i
    ```

3.  Create environment files:

    ```sh
    cp .env.example .env
    ```

4.  Set up the environment variables.

5.  To run the app on your local machine:

    ```sh
    pnpm dev
    ```

7.  Build for production

    ```sh
    pnpm build
    ```


## 💡 Scripts

[&#8593; Back to top](#-table-of-contents)

The following scripts are available:

| Script         | Action                                                    |
| -------------- | --------------------------------------------------------- |
| `pnpm install` | Installs the project dependencies.                        |
| `pnpm dev`     | Runs the application in development mode.                 |
| `pnpm build`   | Builds the production-ready optimized bundle.             |
| `pnpm preview` | Starts the preview server using Vite.                     |
| `pnpm lint`    | Runs ESLint to lint the project files and fix any issues. |
| `pnpm format`  | Formats the source code using Prettier.                   |

## 📝 License

This project is licensed under the [MIT](./LICENSE) License.
