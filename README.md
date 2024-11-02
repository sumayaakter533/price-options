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
    plugins: [require("daisyui")],
  }
  ```

NOTE: If *`require`* is giving warning then to remove the warning there are 2 method -

- Method-1: Add `node:true` to `eslint.config.js`

  ```js
  // eslint.config.js
  env: {
          browser: true,
          node: true,
        }
  ```

  ```js
    // tailwind.config.js
    export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },

    plugins: [require("daisyui")],
    };
  ```

- Method-2: Replace require with import

  ```js
  // tailwind.config.js
  import daisyui from 'daisyui';

  export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [daisyui],
  };
  ```

## Apply prettier custom rule in React project

- `npm install --save-dev prettier`
- add the following rules in `.prettierrc` file in root

  ```json
  {
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": true,
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "always"
  }
  ```

## Add Font Awesome

```node
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome`
```

```jsx
// App.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <FontAwesomeIcon icon={faHome}
  )
}
```

***NOTE:** Add other icons like this one.*

---

### Add Prop Validation

- `npm install prop-types`
