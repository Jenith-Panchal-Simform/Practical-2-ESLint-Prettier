function App() {
  return (
    <>
      <h1>This is a file created by Jenith Panchal</h1>
      <h1>Steps to Setup Husky, Lint-Staged, Prettier, and ESLint</h1>

      <p>
        1. Run <code>npm i husky</code>
      </p>
      <p>
        2. Run <code>npm i lint-staged</code>
      </p>
      <p>
        3. Run <code>npm i prettier</code>
      </p>
      <p>
        4. Run <code>npm i eslint</code>
      </p>
      <p>
        5. Run <code>npm install @eslint/js typescript typescript-eslint</code>
      </p>
      <p>
        6. Add the following to <code>package.json</code>:
      </p>

      <pre>
        {`"lint-staged": {
  "src/**/*.{ts,tsx,html,css}": "prettier --write",
  "src/**/*.{ts,tsx}": "eslint"
}`}
      </pre>

      <p>
        7. Confirm the changes by running <code>npx lint-staged</code>
      </p>
      <p>
        8. Run <code>npx husky-init</code>
      </p>
      <p>
        9. This will create a new folder <code>.husky</code> locally. Inside
        that, write <code>npx lint-staged</code>
      </p>
      <p>
        10. In <code>package.json</code>, under the <code>scripts</code> tag, a
        new line <code>prepare:husky</code> will be added
      </p>
    </>
  );
}
export default App;