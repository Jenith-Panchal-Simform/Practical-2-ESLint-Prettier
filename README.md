## Practical 2 Integrate ESLint and Prettier

    Integrating ESLint and Prettier in react using husky along with it also use .editorconfig

---

## Project Overview

This Projects how we can setup precommit hooks using husky for Prettier and ESLint,along with .editorconfig

### Installation Steps for setting the pre commit hook

1. Install Husky
   ```bash
   npm i husky
   ```
2. Install lint-staged
   ```bash
   npm i lint-staged
   ```
3. Install Prettier
   ```bash
   npm i prettier
   ```
4. Install ESLint
   ```bash
   npm i eslint
   ```
5. Install TypeScript + ESLint config
   ```bash
   npm install @eslint/js typescript typescript-eslint
   ```
6. Add the following to package.json:
   ```bash
    "lint-staged": {
   "src/**/*.{ts,tsx,html,css}": "prettier --write",
   "src/**/*.{ts,tsx}": "eslint"
   }`
   ```
7. Confirm changes by running:
   ```bash
   npx lint-staged
   ```
8. Initialize Husky:

```bash
npx husky-init
```

9. This will create a .husky folder. Inside the pre-commit hook, add:

```bash
npx lint-staged
```

10. A new script prepare:husky will be added under the scripts section in package.json.

---

## How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jenith-Panchal-Simform/Practical-2-ESLint-Prettier.git
   cd Practical-2-ESLint-Prettier
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Start Development Server**
   ```bash
   npm run dev
   ```

---

## Demo Link

- Demo Link: https://practical-2-eslint-prettier.pages.dev/
- Repository Link: https://github.com/Jenith-Panchal-Simform/Practical-2-ESLint-Prettier/
- Pull Request Link: https://github.com/Jenith-Panchal-Simform/Practical-2-ESLint-Prettier/pull/1
