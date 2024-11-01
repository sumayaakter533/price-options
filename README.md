# React Install With Tailwind CSS

- `npm create vite@latest my-project -- --template react`
- `cd my-project`
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Add the paths to all of your template files in your `tailwind.config.js` file.

  ```js
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## Install DaisyUI

- `npm i -D daisyui@latest`
- Add daisyUI to `tailwind.config.js`:

  ```js
  module.exports = {
  //...
    plugins: ["daisyui"],
  }
  ```
