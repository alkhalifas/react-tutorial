# React + TypeScript + Vite

## Section 1. Getting Started with NPM

- NPM: Node Package Manager
- Equivalent to Pip for Python
- Useful for creating packages from templates
- Useful for installing packages [Link](https://www.npmjs.com/)

Getting Started:
1. Install nodejs on your local computer [Link](https://nodejs.org/en/download)
2. Confirm your installation by checking the version of npm:
   
        npm --version

3. Create your react application:

        npm create vite@latest my-react-app --template react

When prompted, select React, JavaScript

4. Install the dependencies:

        cd my-react-app
        npm install
   
5. Start the application:
   
        npm run dev


## Section 2. Vite for React:


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Section 3: Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Section 4: What is React

- React is a declarative and flexible javascript framework
- React combines Javascript, HTML, and CSS into a single space
- You can learn more about Javascript here [Link](https://www.w3schools.com/js/)
- Focuses on creating UI components (small pieces of code)
- More efficient to maintain and scale your UI
- React documentation can be found here [Link](https://react.dev/)

## Section 5: Single Page Applications

- SPA: Single Page Application
- Website that loads the content once
- Many famous websites are built via SPA using React [Shopify](https://www.shopify.com/)


## Section 6: Stateful Application

- React is a stateful application
- Maintains state on a component level
- Props vs State:
   - Props are similar to arguments in a function
   - State is more like a components memory
- Always think about where your state should live
- Counter Example

## Section 7: Routing

- Routing is an important component that lets you navigate between pages

      npm install react-router-dom

- Routes let us have multiple pages in our single page application
- Gives the user the illusion that these pages are loading for the first time
- Let us add the following files in our application
    - /src/containers/Home.jsx
    - /src/containers/Page1.jsx
    - /src/containers/Page2.jsx

- Add the following code in Home.jsx:

  import React from 'react';
  import {Link} from "react-router-dom";

        const Home = () => {
        return (
            <div style={{justifyContent: 'center'}}>
                <h2>Home Page</h2>
                <div>
                    <Link to={"/"}>
                        <button>
                            Home
                        </button>
                    </Link>
                    <Link to={"/page1"}>
                        <button>
                            Page1
                        </button>
                    </Link>
                    <Link to={"/page2"}>
                        <button>
                            Page2
                        </button>
                    </Link>
                </div>
            </div>
            );
        };
        
        export default Home;

- In App.tsx, let us add the following code:

        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/page1" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
            </Routes>
        </Router>

## Section 8: Styling and MUI

- We can adjust style using css files
- CSS can be governed within the application itself
- There are pros and cons to each approach
- Best practice is to reuse CSS via classes within your CSS files
- Notice that there is an App.css file

- Luckily, there exists some libraries such as Material UI to help us [Link](https://mui.com/material-ui/getting-started/installation/)
  
      npm install @mui/material @emotion/react @emotion/styled

- Lets go ahead and change the button component in the Home.tsx file to
      
      Before <button></button>
  
      After: <Button variant="contained"></Button>


## Section 9: State and Components with DateTime

- Components are useful because they are easy to recycle
- A feature that will be used in multiple places should be abstracted as a component
- Components can be imported multiple times

- Let us go ahead and create a DateTime component, which we will place in the components section
- Add the following code in that new page:
  
      import  React, { useState , useEffect } from 'react'
      
      export const DateTime = () => {
      
          let [date,setDate] = useState(new Date());
      
          useEffect(() => {
              let timer = setInterval(()=>setDate(new Date()), 1000 )
              return function cleanup() {
                  clearInterval(timer)
              }
      
          });
      
          return(
              <div>
                  <p> Time : {date.toLocaleTimeString()}</p>
                  <p> Date : {date.toLocaleDateString()}</p>
              </div>
          )
      }
      
      export default DateTime

- We can import that code as showed in App.tsx

## Section 10: API Calls within React

- You will often need to fetch data from external sources like databases
- We can use 'fetch' to make get requests
- We will accomplish this using useEffect hooks
- Effect hooks let us perform side effects in functional components
- Let us try to fetch some sample data from here [Link](https://jsonplaceholder.typicode.com/posts)

