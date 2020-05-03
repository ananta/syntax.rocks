---
title: "React Hooks useContext() example"
tags: ["react"]
published: true
date: "2020-05-04"
---

---

> In this tutorial we will be setting up a basic react application with two pages sharing a common context.

## 1. Setup A Basic React Project

we will be creating a basic react app bootstraped with `create-react-app`

Let's create a project and implement a basic navigation with `react-router-dom`

```
npx create-react-app basic-context
cd basic-context
yarn add react-router-dom
```

create two files: `src/pages/home.js` && `src/pages/profile.js`

So, App.js will be like this

```
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </div>
    </Router>
  );
}

export default App;

```

`src/pages/home.js` will be like this:

```
import React from "react";

export function Home() {
  return <h1>Home</h1>;
}

```

`src/pages/profile.js` will be like this:

```
import React from "react";

export function Profile() {
  return <h1>Profile</h1>;
}

```

## 2. Let's Get Started With useContext() hook

create a new file `src/context/user.js`

Let's create a basic context component with initial value null. You can add any value to it to represent an initial value.

```
import { createContext } from "react";

const UserContext = createContext(null);

export { UserContext };

```

Let's wrap our component to be connected with this context with provider of `src/context/user.js`

```
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Profile } from "./pages/profile";

import { UserContext } from "./context/user";

function App() {
  const [user, setUser] = useState("Not Logged In");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

```

We will be passing user & setUser() from parent component to our child components.

We are importing our `UserContext` and wrapping our `Route`s with the provider of `UserContext`

Let's Update src/pages/home.js to:

```
import React, { useContext } from "react";
import { UserContext } from "../context/user";

export function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <h2>{user}</h2>
      <button onClick={() => setUser("Logged In!")}>Login</button>
    </div>
  );
}
```

&& Update src/pages/profile.js to:

```
import React, { useContext } from "react";
import { UserContext } from "../context/user";

export function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Profile</h1>
      <h2>{user}</h2>
    </div>
  );
}

```

Start the project and click the Login button in homepage. It should update the `user` context in `src/pages/profile.js` too!
