# Frontend for the CRUD App

### About

This will be a single page app, where one can add/delete/update people from the database.
Hence, we will be using the 'create-react-app' toolchain.

Further, we will be using [redux](https://react-redux.js.org/) to manage the state of the app.

- [Frontend Deployed on GitHub](http://ayushxx7.github.io/crud-frontend)

Note:

- [Backend Repo](https://github.com/ayushxx7/crud)
- [Backend Deployed @ Heroku](https://crud-person-node.herokuapp.com/persons)

### To Test Locally

```
cd people
npm install
npm start
```

- This should open up the Dashboard on `localhost:3000`

### To Deploy to GitHub Pages

```
npm run deploy
```

### Tech Stack

| Tech                       | Use Case                                          |
| -------------------------- | ------------------------------------------------- |
| `React`                    | UI/UX                                             |
| `Redux`                    | State Management                                  |
| `react-bootstrap`          | render forms, buttons and cards                   |
| `react-bootstrap-editable` | render Editable component for updating Profession |
| `react-toastify`           | show notifications after success or failure       |
| `axios`                    | make API calls to backend                         |
| `redux-devtools-extension` | connect with redux devtools extension             |

### References

[React.js - Create new React App](https://reactjs.org/docs/create-a-new-react-app.html)
[Connect React with Redux](https://react-redux.js.org/introduction/basic-tutorial#links)
[Building a Full Stack App](https://www.youtube.com/watch?v=GieYIzvdt2U&list=PLillGF-RfqbbRA-CIUxlxkUpbq0IFkX60&index=2)
[Django + React App](https://www.valentinog.com/blog/drf/#Django_REST_with_React_Django_and_React_together)
[Redux](https://www.youtube.com/watch?v=CVpUuw9XSjY)
[Setting State using Dynamic Keys](https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name)
[Align Delete Button](https://stackoverflow.com/questions/6632340/place-a-button-right-aligned)
[Deploying React App to Github Pages](https://github.com/gitname/react-gh-pages)

### Explore

[Next.js](https://nextjs.org/learn/basics/create-nextjs-app/setup)
[Client Side Rendering vs Server Side Rendering](https://www.toptal.com/front-end/client-side-vs-server-side-pre-rendering)
