import "../src/Button/styles/main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  Story => (
    <main id="app">
      <Story />
    </main>
  )
];
