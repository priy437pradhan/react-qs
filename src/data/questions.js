export const questions = [
  {
    id: 1,
    category: "Basics",
    question: "What is React?",
    answer: "React is an open-source JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile applications. React allows you to create reusable UI components that manage their own state.",
    difficulty: "beginner"
  },
  {
    id: 2,
    category: "Basics",
    question: "What are the key features of React?",
    answer: `Key features of React include:
    - Virtual DOM for better performance
    - JSX syntax
    - Component-based architecture
    - Unidirectional data flow
    - React Native for mobile development
    - Strong community support`,
    difficulty: "beginner"
  },
  {
    id: 3,
    category: "Components",
    question: "What is a component in React?",
    answer: "A component in React is a reusable, self-contained block of code that encapsulates both structure and behavior, representing a part of the user interface. Components can be functional or class-based, with each having its own state and lifecycle methods.",
    difficulty: "beginner"
  },
  {
    id: 4,
    category: "State & Props",
    question: "What is the difference between state and props?",
    answer: "Props are read-only attributes passed from parent to child components to configure them, while state is a local data store within a component that can change over time. State is managed within the component and can be updated with the setState function.",
    difficulty: "beginner"
  },
  {
    id: 5,
    category: "Lifecycle",
    question: "What are React lifecycle methods?",
    answer: "React lifecycle methods are special functions that get called at different stages of a component's existence. Examples include componentDidMount, componentDidUpdate, and componentWillUnmount. They allow developers to control behavior at various points in the component lifecycle.",
    difficulty: "intermediate"
  },
  {
    id: 6,
    category: "Hooks",
    question: "What are React Hooks?",
    answer: "React Hooks are functions that let you use state and other React features in functional components. Examples include useState for state management, useEffect for side effects, and useContext for accessing context data.",
    difficulty: "intermediate"
  },
  {
    id: 7,
    category: "Performance",
    question: "How does the Virtual DOM work?",
    answer: "The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize updates. When a state change occurs, React updates the Virtual DOM first, then calculates the difference between the new and old versions, and finally applies only the necessary changes to the real DOM.",
    difficulty: "intermediate"
  },
  {
    id: 8,
    category: "Router",
    question: "What is React Router, and why is it used?",
    answer: "React Router is a library for routing in React applications. It allows developers to handle different URLs and display specific components based on the route, enabling single-page applications to have a more dynamic user experience.",
    difficulty: "intermediate"
  },
  {
    id: 9,
    category: "Redux",
    question: "What is Redux, and how does it work?",
    answer: "Redux is a state management library commonly used with React. It provides a centralized store for managing application state. Components dispatch actions to update the state, and reducers specify how the state should change in response.",
    difficulty: "advanced"
  },
  {
    id: 10,
    category: "Testing",
    question: "What is Jest, and how is it used in testing React applications?",
    answer: "Jest is a JavaScript testing framework commonly used with React. It allows developers to write and run unit tests to ensure code behaves as expected. Jest is known for its easy setup and is often used alongside the Enzyme library for testing React components.",
    difficulty: "advanced"
  },
  {
    id: 11,
    category: "Performance",
    question: "What are some common techniques for optimizing performance in React?",
    answer: "Performance optimization techniques in React include memoization (e.g., React.memo), lazy loading components with React.lazy, using useCallback and useMemo hooks to prevent unnecessary re-renders, and minimizing the size of bundled files.",
    difficulty: "advanced"
  },
  {
    id: 12,
    category: "Hooks",
    question: "Explain useState and useEffect hooks with examples.",
    answer: `useState is a hook for adding state to functional components, while useEffect handles side effects like data fetching or updating the DOM. 
    Example:
    - useState: const [count, setCount] = useState(0);
    - useEffect: useEffect(() => { document.title = count; }, [count]);`,
    difficulty: "beginner"
  },
  {
    id: 13,
    category: "Advanced",
    question: "Explain the Context API in React.",
    answer: "The Context API is a feature in React that allows data to be shared across components without passing props manually at every level. It's especially useful for managing global state, such as themes or user authentication data.",
    difficulty: "advanced"
  },
  {
    id: 14,
    category: "State & Props",
    question: "Can you explain the difference between controlled and uncontrolled components?",
    answer: "Controlled components have their state managed by React via props and setState, while uncontrolled components rely on the DOM to handle their own state. Controlled components offer more predictable data flow and validation capabilities.",
    difficulty: "intermediate"
  },
  {
    id: 15,
    category: "Basics",
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML elements in JavaScript and place them in the DOM. JSX makes it easier to visualize the structure of the UI and is transformed into JavaScript calls by Babel.",
    difficulty: "beginner"
  },
  {
    id: 16,
    category: "Components",
    question: "What is the difference between class components and functional components?",
    answer: "Class components are ES6 classes that can hold and manage their own state and lifecycle methods, while functional components are simpler, stateless components defined as functions. With the introduction of Hooks, functional components can also manage state and side effects.",
    difficulty: "beginner"
  },
  {
    id: 17,
    category: "State & Props",
    question: "How can you lift state up in React?",
    answer: "Lifting state up involves moving the state to the nearest common ancestor of components that need access to it. This allows shared state management between sibling components. The parent component holds the state and passes it down as props to the children.",
    difficulty: "intermediate"
  },
  {
    id: 18,
    category: "Hooks",
    question: "What is the purpose of the useReducer hook?",
    answer: "The useReducer hook is an alternative to useState for managing complex state logic in React. It allows you to manage state transitions using a reducer function, making it easier to handle multiple state variables or more intricate state updates.",
    difficulty: "intermediate"
  },
  {
    id: 19,
    category: "Performance",
    question: "What is React.memo and when would you use it?",
    answer: "React.memo is a higher-order component that memoizes a component's output. It prevents unnecessary re-renders by only re-rendering the component if its props change. This is useful for optimizing performance in functional components.",
    difficulty: "advanced"
  },
  {
    id: 20,
    category: "Router",
    question: "What are Route and Link components in React Router?",
    answer: "The Route component in React Router is used to define a mapping between a URL path and a React component that should render when the path matches. The Link component is used to navigate between different routes in a React application without reloading the page.",
    difficulty: "intermediate"
  },
  {
    id: 21,
    category: "Redux",
    question: "What are actions and reducers in Redux?",
    answer: "In Redux, actions are plain JavaScript objects that describe an event that occurred in the application. Reducers are pure functions that take the current state and an action as arguments and return a new state based on that action.",
    difficulty: "advanced"
  },
  {
    id: 22,
    category: "Testing",
    question: "What is Enzyme, and how is it used in testing React components?",
    answer: "Enzyme is a JavaScript testing utility for React that makes it easier to test React components' output and behavior. It allows you to simulate events, inspect component output, and test component interactions.",
    difficulty: "advanced"
  },
  {
    id: 23,
    category: "Advanced",
    question: "What is server-side rendering (SSR) in React?",
    answer: "Server-side rendering (SSR) is a technique used in React where the HTML is generated on the server for each request and sent to the client. This can improve performance and SEO by allowing search engines to crawl the content of the page before JavaScript execution.",
    difficulty: "advanced"
  },
  {
    id: 24,
    category: "Lifecycle",
    question: "What are the use cases for componentDidCatch?",
    answer: "componentDidCatch is a lifecycle method used in class components to handle JavaScript errors in their child component tree. It can be used to log error information or display a fallback UI to the user when an error occurs.",
    difficulty: "intermediate"
  },
  {
    id: 25,
    category: "Basics",
    question: "What are controlled components in React?",
    answer: "Controlled components are components where the form data is handled by the React component's state. The input form elements' values are set by the state, and any changes to the input trigger an update to the state. This allows for controlled input validation and form submission.",
    difficulty: "beginner"
  },
  {
    id: 26,
    category: "Components",
    question: "What is the significance of keys in React lists?",
    answer: "Keys are unique identifiers assigned to elements in lists to help React identify which items have changed, been added, or removed. This improves performance and enables React to efficiently update the UI.",
    difficulty: "beginner"
  },
  {
    id: 27,
    category: "State & Props",
    question: "What is prop drilling, and how can it be avoided?",
    answer: "Prop drilling occurs when you pass data through multiple layers of components that do not need that data, just to reach a deeply nested component. It can be avoided by using React Context or state management libraries like Redux.",
    difficulty: "intermediate"
  },
  {
    id: 28,
    category: "Hooks",
    question: "How do you handle multiple state variables with useState?",
    answer: "You can handle multiple state variables by calling the useState hook multiple times in a component, each for a different piece of state. Alternatively, you can use an object to store related state variables and update them together using a single useState call.",
    difficulty: "intermediate"
  },
  {
    id: 29,
    category: "Performance",
    question: "What is code splitting in React, and how can it be achieved?",
    answer: "Code splitting is a technique that allows you to split your code into smaller chunks, which can be loaded on demand. It can be achieved in React using dynamic imports with React.lazy and Suspense.",
    difficulty: "advanced"
  },
  {
    id: 30,
    category: "Router",
    question: "What is the purpose of the Switch component in React Router?",
    answer: "The Switch component in React Router renders the first child Route that matches the current location. It helps to ensure that only one route is rendered at a time, avoiding rendering multiple routes that might match the same path.",
    difficulty: "intermediate"
  },
  {
    id: 31,
    category: "Redux",
    question: "What is the purpose of middleware in Redux?",
    answer: "Middleware in Redux provides a way to extend Redux's capabilities, allowing for tasks such as logging actions, handling asynchronous operations, and performing side effects. Common middleware includes Redux Thunk and Redux Saga.",
    difficulty: "advanced"
  },
  {
    id: 32,
    category: "Testing",
    question: "How do you test asynchronous code in Jest?",
    answer: "To test asynchronous code in Jest, you can use async/await or return a promise from the test function. Jest provides methods like `done()` or `return promise` to handle asynchronous operations effectively.",
    difficulty: "advanced"
  },
  {
    id: 33,
    category: "Advanced",
    question: "What is a Higher-Order Component (HOC)?",
    answer: "A Higher-Order Component (HOC) is a function that takes a component and returns a new component, typically adding additional props or behavior. HOCs are used for code reuse and to enhance components without modifying their structure.",
    difficulty: "advanced"
  },
  {
    id: 34,
    category: "Lifecycle",
    question: "What is the use of getDerivedStateFromProps?",
    answer: "getDerivedStateFromProps is a static lifecycle method that is called right before rendering, both on the initial mount and on subsequent updates. It allows a component to update its state based on changes in props without direct access to the instance.",
    difficulty: "intermediate"
  },
  {
    id: 35,
    category: "Basics",
    question: "What are fragments in React?",
    answer: "Fragments are a way to group multiple elements without adding an extra node to the DOM. They can be used to return multiple elements from a component without wrapping them in a div or other HTML element. This helps keep the DOM clean and avoids unnecessary nesting.",
    difficulty: "beginner"
  },
  {
    id: 36,
    category: "Components",
    question: "What are default props in React?",
    answer: "Default props are a feature in React that allows you to define default values for props that a component can receive. If a prop is not passed to the component, it will use the default value defined in the component's defaultProps.",
    difficulty: "beginner"
  },
  {
    id: 37,
    category: "State & Props",
    question: "What is the purpose of the useContext hook?",
    answer: "The useContext hook allows you to access the context directly within a functional component. It eliminates the need to wrap components in a Context.Consumer, making it easier to consume context values and simplifying component composition.",
    difficulty: "intermediate"
  },
  {
    id: 38,
    category: "Hooks",
    question: "What is the useRef hook and when would you use it?",
    answer: "The useRef hook creates a mutable object that holds a `.current` property, which persists for the full lifetime of the component. It's often used to access DOM elements directly, hold mutable values, or store previous state values without causing re-renders.",
    difficulty: "intermediate"
  },
  {
    id: 39,
    category: "Performance",
    question: "What is the difference between useMemo and useCallback?",
    answer: "useMemo is used to memoize the result of a computation, preventing it from re-running unless its dependencies change, while useCallback is used to memoize a function itself, ensuring that the same function instance is returned unless its dependencies change. Both help optimize performance by reducing unnecessary calculations.",
    difficulty: "advanced"
  },
  {
    id: 40,
    category: "Router",
    question: "What is a nested route in React Router?",
    answer: "A nested route is a route defined inside another route. This allows you to create sub-routes for specific components or sections of your application, enabling better organization and structure in the routing setup.",
    difficulty: "intermediate"
  },
  {
    id: 41,
    category: "Redux",
    question: "How do you implement middleware in Redux?",
    answer: "To implement middleware in Redux, you need to apply it when creating the Redux store using the `applyMiddleware` function. You can create custom middleware or use existing ones like Redux Thunk or Redux Saga to handle asynchronous actions and side effects.",
    difficulty: "advanced"
  },
  {
    id: 42,
    category: "Testing",
    question: "What is snapshot testing in Jest?",
    answer: "Snapshot testing in Jest involves rendering a component and taking a snapshot of its output, which is then stored in a file. In future tests, Jest compares the rendered output to the saved snapshot to check for unexpected changes, ensuring UI consistency.",
    difficulty: "advanced"
  },
  {
    id: 43,
    category: "Advanced",
    question: "What is the significance of keys in reconciliation?",
    answer: "Keys in React reconciliation are crucial for optimizing the rendering process. They help React identify which items have changed, are added, or are removed, allowing for more efficient updates of the UI by minimizing the number of elements that need to be re-rendered.",
    difficulty: "advanced"
  },
  {
    id: 44,
    category: "Basics",
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used in React to describe what the UI should look like. JSX gets compiled to React.createElement calls, which ultimately produce the React elements that form the DOM.",
    difficulty: "beginner"
  },
  {
    id: 45,
    category: "Components",
    question: "What is the difference between functional and class components?",
    answer: "Functional components are simple JavaScript functions that return JSX, while class components are ES6 classes that extend from React.Component and can hold state and lifecycle methods. With the introduction of Hooks, functional components can now manage state and side effects, making them more versatile.",
    difficulty: "beginner"
  },
  {
    id: 46,
    category: "State & Props",
    question: "What are side effects in React, and how do you handle them?",
    answer: "Side effects are operations that can affect other parts of the application and are typically handled using the useEffect hook in functional components. Examples of side effects include data fetching, subscriptions, or manually changing the DOM.",
    difficulty: "intermediate"
  },
  {
    id: 47,
    category: "Hooks",
    question: "What is the useLayoutEffect hook?",
    answer: "The useLayoutEffect hook is similar to useEffect, but it is called synchronously after all DOM mutations. This allows you to read layout from the DOM and synchronously re-render. It’s useful for measurements and updates that need to occur before the browser paints.",
    difficulty: "intermediate"
  },
  {
    id: 48,
    category: "Performance",
    question: "How can you improve the performance of a React application?",
    answer: "You can improve performance by using techniques such as code splitting, lazy loading, memoization with React.memo and useMemo, avoiding inline functions in render, and optimizing re-renders with useCallback. Additionally, using the React Profiler can help identify performance bottlenecks.",
    difficulty: "advanced"
  },
  {
    id: 49,
    category: "Router",
    question: "What is the purpose of the Redirect component in React Router?",
    answer: "The Redirect component in React Router is used to navigate to a different route programmatically. It can be used to redirect users based on certain conditions, such as after form submission or authentication.",
    difficulty: "intermediate"
  },
  {
    id: 50,
    category: "Redux",
    question: "What is a selector in Redux?",
    answer: "A selector is a function that extracts and returns a specific slice of state from the Redux store. Selectors can be simple or memoized, helping to optimize performance by preventing unnecessary re-renders when the state changes.",
    difficulty: "advanced"
  },
  {
    id: 51,
    category: "Testing",
    question: "What is the difference between shallow rendering and full DOM rendering in testing?",
    answer: "Shallow rendering renders a component without rendering its child components, allowing you to test the component in isolation. Full DOM rendering, on the other hand, renders the entire component tree, enabling testing of interactions and behaviors across components.",
    difficulty: "advanced"
  },
  {
    id: 52,
    category: "Advanced",
    question: "What are render props in React?",
    answer: "Render props is a pattern for sharing code between components using a prop that is a function. The function receives data and returns a React element, allowing for dynamic rendering based on the props provided. This pattern promotes code reuse and can replace higher-order components in some cases.",
    difficulty: "advanced"
  },
  
  {
    id: 53,
    category: "Basics",
    question: "What is the purpose of keys in React?",
    answer: "Keys help React identify which items have changed, are added, or are removed. They are essential for optimizing rendering performance by enabling efficient updates of lists and ensuring that components maintain their identity across re-renders.",
    difficulty: "beginner"
  },
  {
    id: 54,
    category: "Basics",
    question: "What is the significance of the render method in React?",
    answer: "The render method is a lifecycle method in class components that returns the JSX to be rendered on the screen. It is called every time the component’s state or props change, ensuring the UI reflects the current data.",
    difficulty: "beginner"
  },
  {
    id: 55,
    category: "State & Props",
    question: "How can you pass data from a child component to a parent component?",
    answer: "To pass data from a child to a parent component, you can define a callback function in the parent and pass it as a prop to the child. The child can then call this function with the data it needs to send up.",
    difficulty: "intermediate"
  },
  {
    id: 56,
    category: "State & Props",
    question: "What are propTypes in React?",
    answer: "PropTypes are a mechanism for type-checking the props passed to a component. They help ensure that components receive the correct type of data and can issue warnings during development if the wrong type is provided.",
    difficulty: "intermediate"
  },
  {
    id: 57,
    category: "Hooks",
    question: "What is the purpose of the useReducer hook?",
    answer: "The useReducer hook is used for managing complex state logic in functional components. It is similar to useState but provides a more structured approach, allowing for state transitions based on actions, making it useful for managing complex state updates.",
    difficulty: "intermediate"
  },
  {
    id: 58,
    category: "Hooks",
    question: "How do you create a custom hook in React?",
    answer: "To create a custom hook, you define a JavaScript function that uses React hooks internally. This function can then encapsulate reusable logic, allowing it to be shared across multiple components. Custom hooks should start with the prefix 'use'.",
    difficulty: "intermediate"
  },
  {
    id: 59,
    category: "Performance",
    question: "What is lazy loading in React?",
    answer: "Lazy loading is a technique that defers the loading of components or resources until they are needed. In React, it can be achieved using React.lazy and Suspense, allowing you to improve the performance of your application by reducing the initial load time.",
    difficulty: "advanced"
  },
  {
    id: 60,
    category: "Performance",
    question: "What is code splitting and how can it be implemented in React?",
    answer: "Code splitting is a feature that allows you to split your code into smaller chunks, which can be loaded on demand. In React, it can be implemented using dynamic imports with React.lazy or libraries like React Loadable to improve loading times and performance.",
    difficulty: "advanced"
  },
  {
    id: 61,
    category: "Router",
    question: "How do you handle 404 errors in React Router?",
    answer: "To handle 404 errors in React Router, you can define a route with a wildcard path that matches all unmatched routes and renders a custom NotFound component. This component will be displayed when no other routes match.",
    difficulty: "intermediate"
  },
  {
    id: 62,
    category: "Router",
    question: "What is a dynamic route in React Router?",
    answer: "A dynamic route in React Router is a route that can match variable segments of a URL, allowing for more flexible routing. This is achieved by using route parameters in the path, which can then be accessed in the component using hooks like useParams.",
    difficulty: "intermediate"
  },
  {
    id: 63,
    category: "Redux",
    question: "What are the main principles of Redux?",
    answer: "The main principles of Redux are: 1) Single source of truth (the state is stored in a single object), 2) State is read-only (the only way to change the state is by dispatching actions), and 3) Changes are made with pure functions (reducers).",
    difficulty: "advanced"
  },
  {
    id: 64,
    category: "Redux",
    question: "What is middleware in Redux and how does it work?",
    answer: "Middleware in Redux is a higher-order function that allows you to extend Redux's capabilities. It sits between the dispatching of an action and the moment it reaches the reducer, allowing you to perform tasks like logging, crash reporting, or handling asynchronous actions.",
    difficulty: "advanced"
  },
  {
    id: 65,
    category: "Testing",
    question: "What is the purpose of enzyme in React testing?",
    answer: "Enzyme is a testing utility for React that simplifies the process of testing React components. It allows you to shallow render components, simulate events, and inspect the output, making it easier to test the behavior and state of components.",
    difficulty: "advanced"
  },
  {
    id: 66,
    category: "Testing",
    question: "How do you test asynchronous code in React?",
    answer: "To test asynchronous code in React, you can use the async/await syntax in your test functions and libraries like Jest or React Testing Library. You can also use the waitFor utility to wait for specific elements to appear or for promises to resolve.",
    difficulty: "advanced"
  },
  {
    id: 67,
    category: "Advanced",
    question: "What are higher-order components (HOCs)?",
    answer: "Higher-order components (HOCs) are functions that take a component as an argument and return a new component with additional props or functionality. HOCs are used to share behavior across multiple components without repeating code.",
    difficulty: "advanced"
  },
  {
    id: 68,
    category: "Advanced",
    question: "Explain the concept of reconciliation in React.",
    answer: "Reconciliation is the process through which React updates the DOM by comparing the new virtual DOM with the previous one. React determines which elements have changed, allowing it to efficiently update the real DOM by minimizing changes.",
    difficulty: "advanced"
  },
  {
    id: 69,
    category: "Basics",
    question: "What is the purpose of the componentDidCatch lifecycle method?",
    answer: "componentDidCatch is a lifecycle method in class components that allows you to handle errors that occur in the component tree. It can be used to log error information or display a fallback UI when an error is caught.",
    difficulty: "intermediate"
  },
  {
    id: 70,
    category: "Hooks",
    question: "What is the useImperativeHandle hook?",
    answer: "The useImperativeHandle hook customizes the instance value that is exposed when using React.forwardRef. It allows you to control the values returned when a parent component accesses the ref of the child component, which can be useful for exposing imperative methods.",
    difficulty: "advanced"
  },
  {
    id: 71,
    category: "Performance",
    question: "What is a performance bottleneck, and how can you identify it in a React application?",
    answer: "A performance bottleneck is a point in the application where the performance slows down due to resource limitations. You can identify bottlenecks in a React application by using the React Profiler, analyzing the component render times, and monitoring performance metrics.",
    difficulty: "advanced"
  },
  {
    id: 72,
    category: "Router",
    question: "What is a link in React Router, and how does it differ from a regular anchor tag?",
    answer: "A Link component in React Router is used for navigation within a single-page application. It prevents the default behavior of a regular anchor tag, which causes a full page reload, and instead updates the URL and renders the appropriate component without reloading the page.",
    difficulty: "beginner"
  },
  {
    id: 73,
    category: "Redux",
    question: "What is a thunk in Redux?",
    answer: "A thunk is a middleware that allows you to write action creators that return a function instead of an action. This function can perform asynchronous operations, such as data fetching, and dispatch actions based on the results.",
    difficulty: "intermediate"
  },
  {
    id: 74,
    category: "Testing",
    question: "How can you perform integration testing in React?",
    answer: "Integration testing in React involves testing how different components work together. You can use tools like React Testing Library to render components together, simulate user interactions, and verify that the components behave as expected in combination.",
    difficulty: "advanced"
  },
  {
    id: 75,
    category: "Advanced",
    question: "What is the purpose of the useDebugValue hook?",
    answer: "The useDebugValue hook is used to display a label in React DevTools for custom hooks. It helps developers debug their custom hooks by providing meaningful information about the hook's state or the values it is managing.",
    difficulty: "advanced"
  },
 
    {
      id: 76,
      category: "Basics",
      question: "What is the difference between functional and class components?",
      answer: "Functional components are simpler, using functions to define components without lifecycle methods, while class components are ES6 classes that can have state and lifecycle methods. Functional components can now use hooks for state and side effects.",
      difficulty: "beginner"
    },
    {
      id: 77,
      category: "Basics",
      question: "What are props in React?",
      answer: "Props (short for properties) are used to pass data from one component to another, typically from a parent component to a child component. They are read-only and help in making components reusable.",
      difficulty: "beginner"
    },
    {
      id: 78,
      category: "State & Props",
      question: "What is state in React?",
      answer: "State is a built-in object that holds data or information about the component's current situation. Unlike props, state can be changed and is managed within the component, allowing for dynamic UI updates.",
      difficulty: "beginner"
    },
    {
      id: 79,
      category: "State & Props",
      question: "What is the difference between props and state?",
      answer: "Props are used to pass data from parent to child components and are immutable, while state is managed within a component and can change over time, causing the component to re-render when updated.",
      difficulty: "intermediate"
    },
    {
      id: 80,
      category: "Hooks",
      question: "What is the useState hook?",
      answer: "The useState hook is a built-in React hook that allows functional components to manage state. It returns an array with the current state and a function to update it.",
      difficulty: "beginner"
    },
    {
      id: 81,
      category: "Hooks",
      question: "How does the useEffect hook work?",
      answer: "The useEffect hook allows you to perform side effects in functional components. It runs after every render by default, but you can control its execution with dependency arrays.",
      difficulty: "intermediate"
    },
    {
      id: 82,
      category: "Performance",
      question: "What are React Profiler and its purpose?",
      answer: "React Profiler is a tool for measuring the performance of React applications. It helps identify slow components by providing insights into render times, enabling developers to optimize their apps.",
      difficulty: "advanced"
    },
    {
      id: 83,
      category: "Performance",
      question: "What are memoization techniques in React?",
      answer: "Memoization techniques in React, such as using `React.memo` and `useMemo`, help improve performance by caching the results of expensive calculations or component renders, reducing unnecessary re-renders.",
      difficulty: "advanced"
    },
    {
      id: 84,
      category: "Router",
      question: "What is the purpose of the BrowserRouter in React Router?",
      answer: "BrowserRouter is a component that uses the HTML5 history API to keep your UI in sync with the URL. It enables navigation and routing in single-page applications without reloading the page.",
      difficulty: "beginner"
    },
    {
      id: 85,
      category: "Router",
      question: "How can you pass route parameters in React Router?",
      answer: "You can pass route parameters by defining them in the path with a colon (e.g., `/user/:id`) and accessing them in the component using the `useParams` hook from React Router.",
      difficulty: "intermediate"
    },
    {
      id: 86,
      category: "Redux",
      question: "What is the Redux store?",
      answer: "The Redux store is a centralized container that holds the application's state. It is created using the `createStore` function and provides methods to access the state, dispatch actions, and subscribe to changes.",
      difficulty: "intermediate"
    },
    {
      id: 87,
      category: "Redux",
      question: "What is a reducer in Redux?",
      answer: "A reducer is a pure function that takes the current state and an action as arguments and returns a new state. Reducers specify how the application's state changes in response to actions dispatched to the store.",
      difficulty: "intermediate"
    },
    {
      id: 88,
      category: "Testing",
      question: "What is snapshot testing in React?",
      answer: "Snapshot testing is a technique used in React testing to capture a component's rendered output at a specific point in time. It allows you to track changes in the UI by comparing current outputs to previously saved snapshots.",
      difficulty: "advanced"
    },
    {
      id: 89,
      category: "Testing",
      question: "How do you mock functions in Jest?",
      answer: "In Jest, you can mock functions using `jest.fn()` to create a mock function or `jest.mock()` to automatically mock modules. This allows you to track calls and control return values during tests.",
      difficulty: "intermediate"
    },
    {
      id: 90,
      category: "Advanced",
      question: "What is the purpose of React's context API?",
      answer: "React's context API allows you to share data across the component tree without passing props through every level. It is useful for global state management and avoiding prop drilling.",
      difficulty: "intermediate"
    },
    {
      id: 91,
      category: "Advanced",
      question: "Explain the concept of render props in React.",
      answer: "Render props is a pattern where a component receives a function as a prop, allowing it to share code and functionality with other components. This function returns a React element that can be rendered.",
      difficulty: "advanced"
    },
    {
      id: 92,
      category: "Basics",
      question: "What is the purpose of the defaultProps property?",
      answer: "defaultProps is a property that allows you to define default values for props in a component. If a prop is not passed, the default value will be used.",
      difficulty: "beginner"
    },
    {
      id: 93,
      category: "Hooks",
      question: "What are the rules of hooks in React?",
      answer: "The rules of hooks state that you can only call hooks at the top level of a functional component and only from React functions (components or custom hooks). This ensures that hooks are called in the same order on every render.",
      difficulty: "advanced"
    },
    {
      id: 94,
      category: "Performance",
      question: "What is the purpose of the shouldComponentUpdate method?",
      answer: "shouldComponentUpdate is a lifecycle method that allows you to optimize rendering performance by controlling whether a component should re-render based on changes to state or props.",
      difficulty: "intermediate"
    },
    {
      id: 95,
      category: "Router",
      question: "What is a nested route in React Router?",
      answer: "A nested route is a route defined within another route, allowing you to render sub-components for different paths under a common parent. This is useful for organizing related routes and components.",
      difficulty: "intermediate"
    },
    {
      id: 96,
      category: "Redux",
      question: "What is the purpose of combineReducers in Redux?",
      answer: "combineReducers is a utility function that allows you to combine multiple reducers into a single reducer function. It helps in organizing state management for different parts of the application.",
      difficulty: "intermediate"
    },
    {
      id: 97,
      category: "Testing",
      question: "How do you test component snapshots in Jest?",
      answer: "You can test component snapshots in Jest by using the `toMatchSnapshot` matcher in your test cases. When the test runs, it compares the rendered output to the saved snapshot and alerts you to any changes.",
      difficulty: "advanced"
    },
    {
      id: 98,
      category: "Advanced",
      question: "What is the significance of the useEffect dependency array?",
      answer: "The useEffect dependency array specifies when the effect should re-run. If a value in the array changes, the effect runs again. If it's empty, the effect runs only once after the initial render.",
      difficulty: "intermediate"
    },
    {
      id: 99,
      category: "Advanced",
      question: "What is the use of React.lazy?",
      answer: "React.lazy is a function that enables code-splitting in React by allowing you to load components dynamically. It helps reduce the initial load time of the application by loading components only when they are needed.",
      difficulty: "intermediate"
    },
    {
      id: 100,
      category: "Advanced",
      question: "What is server-side rendering (SSR) in React?",
      answer: "Server-side rendering (SSR) is a technique where the React components are rendered on the server and sent to the client as HTML. It improves performance and SEO by reducing the time to first paint and providing a fully-rendered page.",
      difficulty: "advanced"
    },
    
      {
        id: 101,
        category: "Basics",
        question: "What is the purpose of the render method in a React component?",
        answer: "The render method is responsible for describing what the UI should look like. It returns a React element, which can be a single JSX element or a tree of elements, to be rendered to the DOM.",
        difficulty: "beginner"
      },
      {
        id: 102,
        category: "Basics",
        question: "What are props in React?",
        answer: "Props, short for properties, are a way of passing data from parent to child components in React. They are read-only and allow for the customization of child components based on the data passed down.",
        difficulty: "beginner"
      },
      {
        id: 103,
        category: "State & Props",
        question: "How do you update state in a functional component?",
        answer: "You can update state in a functional component using the useState hook. This hook returns a state variable and a function to update it. Calling the update function with a new value re-renders the component.",
        difficulty: "intermediate"
      },
      {
        id: 104,
        category: "State & Props",
        question: "What is the purpose of defaultProps in React?",
        answer: "defaultProps is a property that allows you to define default values for your component's props. If a prop is not provided by the parent component, the default value will be used.",
        difficulty: "beginner"
      },
      {
        id: 105,
        category: "Hooks",
        question: "What is the useContext hook?",
        answer: "The useContext hook allows you to access the value of a context directly in a functional component. It simplifies the consumption of context without the need for the Context.Consumer component.",
        difficulty: "intermediate"
      },
      {
        id: 106,
        category: "Hooks",
        question: "What is the difference between useState and useReducer?",
        answer: "useState is a hook for managing simple state in functional components, while useReducer is used for managing more complex state logic that involves multiple sub-values or when the next state depends on the previous one.",
        difficulty: "intermediate"
      },
      {
        id: 107,
        category: "Performance",
        question: "What is code splitting in React?",
        answer: "Code splitting is a feature that allows you to split your code into smaller chunks that can be loaded on demand. This can improve the initial load time of your application by only loading the code that is necessary.",
        difficulty: "advanced"
      },
      {
        id: 108,
        category: "Performance",
        question: "How can you optimize performance in a large React application?",
        answer: "You can optimize performance by using React.memo for functional components, implementing lazy loading, using code splitting, avoiding unnecessary re-renders, and minimizing the size of your bundle.",
        difficulty: "advanced"
      },
      {
        id: 109,
        category: "Router",
        question: "What is a dynamic route in React Router?",
        answer: "A dynamic route is a route that can change based on the URL parameters. It allows you to create routes that can render different components or data based on the values in the URL.",
        difficulty: "intermediate"
      },
      {
        id: 110,
        category: "Router",
        question: "What is the purpose of the Switch component in React Router?",
        answer: "The Switch component is used to group multiple Route components and renders only the first route that matches the current location. This helps prevent multiple routes from rendering simultaneously.",
        difficulty: "intermediate"
      },
      {
        id: 111,
        category: "Redux",
        question: "What are middleware in Redux?",
        answer: "Middleware in Redux are functions that provide a way to extend Redux with custom functionality. They can intercept actions before they reach the reducer, allowing for asynchronous actions, logging, and error handling.",
        difficulty: "intermediate"
      },
      {
        id: 112,
        category: "Redux",
        question: "What is a thunk in Redux?",
        answer: "A thunk is a middleware that allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous logic, such as API calls.",
        difficulty: "intermediate"
      },
      {
        id: 113,
        category: "Testing",
        question: "What are unit tests in React?",
        answer: "Unit tests are tests that verify the functionality of a single unit of code, such as a component or function. In React, unit tests are typically used to ensure that components render correctly and behave as expected.",
        difficulty: "beginner"
      },
      {
        id: 114,
        category: "Testing",
        question: "How do you perform end-to-end testing in React?",
        answer: "End-to-end testing can be performed using tools like Cypress or Selenium, which simulate user interactions with the application. These tests verify that the entire application works as expected from start to finish.",
        difficulty: "intermediate"
      },
      {
        id: 115,
        category: "Advanced",
        question: "What is the purpose of React.lazy?",
        answer: "React.lazy is a function that enables code splitting by allowing you to define a component that is loaded dynamically. It returns a Promise that resolves to a component, allowing for lazy loading of that component.",
        difficulty: "advanced"
      },
      {
        id: 116,
        category: "Advanced",
        question: "What is the role of the keyExtractor prop in React Native?",
        answer: "The keyExtractor prop is used in React Native to specify how to extract unique keys for list items. It helps React identify which items have changed, improving performance in lists.",
        difficulty: "intermediate"
      },
      {
        id: 117,
        category: "Basics",
        question: "What is the purpose of the componentDidMount lifecycle method?",
        answer: "The componentDidMount lifecycle method is called after a component is mounted in the DOM. It is commonly used for initializing data, making API calls, and setting up subscriptions.",
        difficulty: "intermediate"
      },
      {
        id: 118,
        category: "Basics",
        question: "What is the significance of the componentWillUnmount lifecycle method?",
        answer: "The componentWillUnmount lifecycle method is called just before a component is unmounted and destroyed. It is typically used for cleanup tasks, such as canceling network requests or removing event listeners.",
        difficulty: "intermediate"
      },
      {
        id: 119,
        category: "State & Props",
        question: "How do you handle multiple form inputs in React?",
        answer: "To handle multiple form inputs, you can use a single state object to store all input values and update the state using a common event handler that identifies the input field using the event target's name or id.",
        difficulty: "intermediate"
      },
      {
        id: 120,
        category: "Hooks",
        question: "What is the useImperativeHandle hook?",
        answer: "The useImperativeHandle hook customizes the instance value that is exposed to parent components when using ref. It allows you to define which properties or methods the parent can access.",
        difficulty: "advanced"
      },
      
        {
          id: 121,
          category: "Basics",
          question: "What is JSX?",
          answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is used with React to describe what the UI should look like.",
          difficulty: "beginner"
        },
        {
          id: 122,
          category: "Basics",
          question: "What is the difference between a functional component and a class component?",
          answer: "Functional components are simpler and do not have lifecycle methods or internal state management (unless using hooks), while class components can manage their own state and have access to lifecycle methods.",
          difficulty: "beginner"
        },
        {
          id: 123,
          category: "State & Props",
          question: "How do you manage state in a class component?",
          answer: "In class components, state is managed using the `this.state` object. You can update the state using the `this.setState()` method, which triggers a re-render of the component.",
          difficulty: "intermediate"
        },
        {
          id: 124,
          category: "State & Props",
          question: "What are controlled components in React?",
          answer: "Controlled components are components where the form data is controlled by React state. The value of the input fields is set from the state, and changes to the input update the state.",
          difficulty: "intermediate"
        },
        {
          id: 125,
          category: "Hooks",
          question: "What is the useMemo hook?",
          answer: "The useMemo hook is used to memoize expensive calculations so that they are only recalculated when their dependencies change. It helps optimize performance by avoiding unnecessary recalculations.",
          difficulty: "intermediate"
        },
        {
          id: 126,
          category: "Hooks",
          question: "What is the useCallback hook?",
          answer: "The useCallback hook returns a memoized version of a callback function that only changes if one of the dependencies has changed. It is used to prevent unnecessary re-renders of child components.",
          difficulty: "intermediate"
        },
        {
          id: 127,
          category: "Performance",
          question: "What is the React Profiler?",
          answer: "The React Profiler is a tool that helps you measure the performance of your React application. It provides insights into which components are rendering and how long they take to render.",
          difficulty: "advanced"
        },
        {
          id: 128,
          category: "Performance",
          question: "How can you prevent unnecessary re-renders in React?",
          answer: "You can prevent unnecessary re-renders by using React.memo for functional components, PureComponent for class components, and shouldComponentUpdate lifecycle method for class components.",
          difficulty: "advanced"
        },
        {
          id: 129,
          category: "Router",
          question: "How do you redirect in React Router?",
          answer: "You can redirect in React Router using the `<Redirect />` component or the `useHistory` hook to programmatically navigate to a different route.",
          difficulty: "intermediate"
        },
        {
          id: 130,
          category: "Router",
          question: "What is the useParams hook in React Router?",
          answer: "The useParams hook allows you to access the dynamic parameters of the current route. It returns an object containing key-value pairs of the parameters defined in the route path.",
          difficulty: "intermediate"
        },
        {
          id: 131,
          category: "Redux",
          question: "What is the purpose of reducers in Redux?",
          answer: "Reducers are pure functions that take the current state and an action as arguments and return a new state. They specify how the state should change in response to an action.",
          difficulty: "intermediate"
        },
        {
          id: 132,
          category: "Redux",
          question: "What is a store in Redux?",
          answer: "A store is a central repository for the application state in Redux. It holds the state tree, allows access to the state, and provides methods to dispatch actions and subscribe to changes.",
          difficulty: "intermediate"
        },
        {
          id: 133,
          category: "Testing",
          question: "What is snapshot testing in React?",
          answer: "Snapshot testing is a technique used to test the rendered output of a component by comparing it to a previously saved snapshot. If the output changes, the test will fail, prompting a review of the change.",
          difficulty: "advanced"
        },
        {
          id: 134,
          category: "Testing",
          question: "What is React Testing Library?",
          answer: "React Testing Library is a testing utility for React that encourages testing components from the user’s perspective. It focuses on testing the behavior of components rather than their implementation details.",
          difficulty: "intermediate"
        },
        {
          id: 135,
          category: "Advanced",
          question: "What is the significance of keys in lists in React?",
          answer: "Keys help React identify which items have changed, are added, or are removed. They should be unique among siblings to ensure that components maintain their identity across re-renders.",
          difficulty: "beginner"
        },
        {
          id: 136,
          category: "Advanced",
          question: "What is a context provider in React?",
          answer: "A context provider is a component that allows you to pass data through the component tree without having to pass props down manually at every level. It makes it easier to manage global state.",
          difficulty: "intermediate"
        },
        {
          id: 137,
          category: "Basics",
          question: "What is a React Fragment?",
          answer: "A React Fragment is a lightweight component that allows you to group multiple children without adding extra nodes to the DOM. It is useful for returning multiple elements from a component.",
          difficulty: "beginner"
        },
        {
          id: 138,
          category: "Basics",
          question: "What is the purpose of the key attribute in React?",
          answer: "The key attribute is used to give a unique identity to elements in a list, allowing React to efficiently update and re-render components when changes occur.",
          difficulty: "beginner"
        },
        {
          id: 139,
          category: "State & Props",
          question: "What are default props in React?",
          answer: "Default props are properties that can be defined on a component to specify default values. If no value is passed for a prop, the default value will be used.",
          difficulty: "intermediate"
        },
        {
          id: 140,
          category: "State & Props",
          question: "What is the purpose of the spread operator in React?",
          answer: "The spread operator is used to expand an iterable (like an array or object) into individual elements. In React, it is often used to pass props to components or to create copies of objects.",
          difficulty: "intermediate"
        },
        
          {
            id: 141,
            category: "Hooks",
            question: "What is the useLayoutEffect hook?",
            answer: "The useLayoutEffect hook is similar to useEffect but is called synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.",
            difficulty: "advanced"
          },
          {
            id: 142,
            category: "Hooks",
            question: "What are the rules of hooks in React?",
            answer: "The rules of hooks state that you can only call hooks at the top level of a function component or custom hook, and you must only call them from React function components or custom hooks.",
            difficulty: "advanced"
          },
          {
            id: 143,
            category: "Performance",
            question: "What is memoization, and how is it used in React?",
            answer: "Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. In React, it can be implemented using useMemo and React.memo.",
            difficulty: "advanced"
          },
          {
            id: 144,
            category: "Performance",
            question: "What is server-side rendering (SSR) in React?",
            answer: "Server-side rendering (SSR) is the process of rendering a React application on the server instead of the client. It improves performance and SEO by delivering a fully rendered page to the client.",
            difficulty: "advanced"
          },
          {
            id: 145,
            category: "Router",
            question: "What is the difference between HashRouter and BrowserRouter?",
            answer: "HashRouter uses the hash portion of the URL (window.location.hash) to keep the UI in sync with the URL, while BrowserRouter uses the HTML5 history API to manage session history. HashRouter is suitable for static web servers, whereas BrowserRouter is better for dynamic applications.",
            difficulty: "intermediate"
          },
          {
            id: 146,
            category: "Router",
            question: "How do you pass data between routes in React Router?",
            answer: "You can pass data between routes using the state prop of the Link component or by utilizing query parameters in the URL. In the receiving component, you can access the passed data using the location prop.",
            difficulty: "intermediate"
          },
          {
            id: 147,
            category: "Redux",
            question: "What is the purpose of actions in Redux?",
            answer: "Actions are plain JavaScript objects that represent an intention to change the state in Redux. They must have a type property, and they can carry additional data in their payload.",
            difficulty: "intermediate"
          },
          {
            id: 148,
            category: "Redux",
            question: "What is the combineReducers function in Redux?",
            answer: "combineReducers is a utility function in Redux that allows you to combine multiple reducer functions into a single reducing function, enabling the management of different slices of state in a more organized way.",
            difficulty: "intermediate"
          },
          {
            id: 149,
            category: "Testing",
            question: "What is the difference between unit testing and integration testing?",
            answer: "Unit testing focuses on testing individual components or functions in isolation to ensure they work correctly, while integration testing verifies that different components or systems work together as intended.",
            difficulty: "advanced"
          },
          {
            id: 150,
            category: "Testing",
            question: "How can you mock API calls in React testing?",
            answer: "You can mock API calls in React testing using libraries like Jest and axios-mock-adapter or by using the built-in mocking capabilities of React Testing Library. This allows you to simulate API responses without making actual network requests.",
            difficulty: "advanced"
          },
          {
            id: 151,
            category: "Advanced",
            question: "What is React Concurrent Mode?",
            answer: "React Concurrent Mode is a set of features that help React apps stay responsive and gracefully adjust to the user’s device capabilities. It enables rendering work to be split into chunks, allowing the UI to remain interactive.",
            difficulty: "advanced"
          },
          {
            id: 152,
            category: "Advanced",
            question: "What is the purpose of React's context API?",
            answer: "The context API provides a way to share values between components without passing props through every level of the component tree. It is useful for global data like themes, user authentication, and settings.",
            difficulty: "intermediate"
          },
          {
            id: 153,
            category: "Basics",
            question: "What is the purpose of the useEffect hook?",
            answer: "The useEffect hook allows you to perform side effects in function components, such as fetching data, directly manipulating the DOM, or setting up subscriptions. It runs after the render phase.",
            difficulty: "intermediate"
          },
          {
            id: 154,
            category: "Basics",
            question: "What is a stateless functional component?",
            answer: "A stateless functional component is a React component defined as a function that does not manage its own state. It simply receives props and returns JSX based on those props.",
            difficulty: "beginner"
          },
          {
            id: 155,
            category: "State & Props",
            question: "What is prop drilling?",
            answer: "Prop drilling is the process of passing data from a parent component down to child components through props. It can become cumbersome if many components need to access the same data.",
            difficulty: "intermediate"
          },
          {
            id: 156,
            category: "State & Props",
            question: "What is the difference between props and state?",
            answer: "Props are read-only and passed from parent to child components, while state is managed within a component and can be changed using setState or the useState hook. State affects the component's rendering, whereas props do not.",
            difficulty: "beginner"
          },
          {
            id: 157,
            category: "Hooks",
            question: "What is the difference between useEffect and useLayoutEffect?",
            answer: "useEffect is called after the render is committed to the screen, while useLayoutEffect is called synchronously after all DOM mutations, before the browser paints. This makes useLayoutEffect suitable for reading layout from the DOM.",
            difficulty: "advanced"
          },
          {
            id: 158,
            category: "Hooks",
            question: "What is the useDebugValue hook used for?",
            answer: "The useDebugValue hook is used to display a label for custom hooks in React DevTools, providing insight into the state or values of the hook for debugging purposes.",
            difficulty: "advanced"
          },
          {
            id: 159,
            category: "Performance",
            question: "How can you optimize a React application for performance?",
            answer: "You can optimize a React application by using React.memo, useMemo, and useCallback to avoid unnecessary re-renders, implementing code splitting and lazy loading, and using the React Profiler to identify performance bottlenecks.",
            difficulty: "advanced"
          },
          {
            id: 160,
            category: "Performance",
            question: "What is the purpose of the shouldComponentUpdate lifecycle method?",
            answer: "The shouldComponentUpdate lifecycle method allows you to control whether a component should re-render or not. It receives the next props and state, and returning false can prevent unnecessary updates.",
            difficulty: "advanced"
          },
      
            {
              id: 161,
              category: "Basics",
              question: "What is JSX?",
              answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe what the UI should look like. JSX allows you to write HTML-like structures in your JavaScript code.",
              difficulty: "beginner"
            },
            {
              id: 162,
              category: "Basics",
              question: "What are components in React?",
              answer: "Components are the building blocks of a React application. They are reusable, independent pieces of code that return a React element to be rendered to the page.",
              difficulty: "beginner"
            },
            {
              id: 163,
              category: "Basics",
              question: "What is the difference between a class component and a functional component?",
              answer: "A class component is a more traditional way of defining a component using ES6 classes, which can hold state and lifecycle methods. A functional component is a simpler way to create a component using a function, and with the introduction of hooks, it can also manage state and side effects.",
              difficulty: "beginner"
            },
            {
              id: 164,
              category: "State & Props",
              question: "What is the purpose of the setState function?",
              answer: "The setState function is used to update the state of a class component. It schedules a re-render of the component with the new state, ensuring the UI reflects the latest data.",
              difficulty: "beginner"
            },
            {
              id: 165,
              category: "State & Props",
              question: "How do you access props in a functional component?",
              answer: "In a functional component, you can access props by including them as an argument in the function definition, or by using the props object if you destructure it.",
              difficulty: "beginner"
            },
            {
              id: 166,
              category: "State & Props",
              question: "What is the purpose of the componentDidMount lifecycle method?",
              answer: "componentDidMount is a lifecycle method that is called after a component is mounted to the DOM. It is typically used for fetching data, setting up subscriptions, or triggering animations.",
              difficulty: "intermediate"
            },
            {
              id: 167,
              category: "State & Props",
              question: "What are defaultProps in React?",
              answer: "defaultProps are used to set default values for props in a component. If a prop is not provided, the default value will be used.",
              difficulty: "intermediate"
            },
            {
              id: 168,
              category: "Hooks",
              question: "What is the useCallback hook?",
              answer: "The useCallback hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful for optimizing performance by preventing unnecessary re-creations of functions on every render.",
              difficulty: "intermediate"
            },
            {
              id: 169,
              category: "Hooks",
              question: "What is the useMemo hook?",
              answer: "The useMemo hook returns a memoized value that is recomputed only when one of the dependencies changes. It is used to optimize performance by avoiding expensive calculations on every render.",
              difficulty: "intermediate"
            },
            {
              id: 170,
              category: "Hooks",
              question: "How do you fetch data in a functional component using hooks?",
              answer: "You can fetch data in a functional component using the useEffect hook. Inside the useEffect, you can call an asynchronous function to fetch data and update the state with the fetched data.",
              difficulty: "intermediate"
            },
            {
              id: 171,
              category: "Performance",
              question: "What is the purpose of React.memo?",
              answer: "React.memo is a higher-order component that prevents unnecessary re-renders of a functional component by memoizing its output. It only re-renders when its props change.",
              difficulty: "intermediate"
            },
            {
              id: 172,
              category: "Performance",
              question: "What is the React Profiler?",
              answer: "The React Profiler is a tool that helps you analyze the performance of your React application. It provides insights into which components are rendering and how long they take, allowing you to identify and optimize performance bottlenecks.",
              difficulty: "advanced"
            },
            {
              id: 173,
              category: "Router",
              question: "What is the purpose of the Redirect component in React Router?",
              answer: "The Redirect component is used to navigate the user to a different route programmatically. It is often used for redirecting after login or handling route changes based on certain conditions.",
              difficulty: "intermediate"
            },
            {
              id: 174,
              category: "Router",
              question: "How do you create nested routes in React Router?",
              answer: "You create nested routes in React Router by defining routes within other route components. The parent route will render its children based on the current URL path.",
              difficulty: "intermediate"
            },
            {
              id: 175,
              category: "Redux",
              question: "What is the purpose of reducers in Redux?",
              answer: "Reducers are pure functions that take the current state and an action as arguments and return a new state. They define how the state changes in response to actions dispatched to the store.",
              difficulty: "intermediate"
            },
            {
              id: 176,
              category: "Redux",
              question: "What is the Redux store?",
              answer: "The Redux store is a centralized place where the entire state of an application is kept. It allows components to access the state and dispatch actions to modify it.",
              difficulty: "intermediate"
            },
            {
              id: 177,
              category: "Testing",
              question: "What is Jest?",
              answer: "Jest is a JavaScript testing framework maintained by Facebook. It is widely used for testing React applications and provides features like test runners, assertion libraries, and mocks.",
              difficulty: "intermediate"
            },
            {
              id: 178,
              category: "Testing",
              question: "What is the purpose of React Testing Library?",
              answer: "React Testing Library is a testing utility for React that encourages testing components in a way that resembles how users interact with them. It focuses on testing the behavior of components rather than their implementation details.",
              difficulty: "intermediate"
            },
            {
              id: 179,
              category: "Advanced",
              question: "What is the purpose of the forwardRef function?",
              answer: "The forwardRef function is used to pass a ref through a component to one of its children. This allows parent components to access the child’s DOM node or instance directly.",
              difficulty: "advanced"
            },
            {
              id: 180,
              category: "Advanced",
              question: "What are the differences between controlled and uncontrolled components?",
              answer: "Controlled components are those whose value is controlled by React state, while uncontrolled components maintain their own internal state. Controlled components provide a single source of truth, while uncontrolled components can be easier to integrate with non-React code.",
              difficulty: "intermediate"
            },
            {
              id: 181,
              category: "Basics",
              question: "What is the purpose of keys in React lists?",
              answer: "Keys are unique identifiers for elements in a list. They help React identify which items have changed, been added, or removed, optimizing the re-rendering process.",
              difficulty: "beginner"
            },
            {
              id: 182,
              category: "Basics",
              question: "What is a pure component in React?",
              answer: "A pure component is a component that does not re-render if the props and state have not changed. React provides the PureComponent class to create such components, optimizing rendering performance.",
              difficulty: "intermediate"
            },
            {
              id: 183,
              category: "State & Props",
              question: "How do you lift state up in React?",
              answer: "To lift state up, you move the state to a common ancestor component. This allows you to share the state with child components through props, enabling coordinated updates.",
              difficulty: "intermediate"
            },
            {
              id: 184,
              category: "State & Props",
              question: "What are synthetic events in React?",
              answer: "Synthetic events are React's cross-browser wrapper around the browser's native events. They provide a consistent API for handling events across different browsers.",
              difficulty: "intermediate"
            },
            {
              id: 185,
              category: "Hooks",
              question: "What is the difference between useRef and createRef?",
              answer: "useRef is a hook that persists a mutable ref object across renders, while createRef creates a new ref on each render. useRef is typically used in functional components, whereas createRef is more common in class components.",
              difficulty: "intermediate"
            },
            {
              id: 186,
              category: "Hooks",
              question: "What is the useImperativeHandle hook?",
              answer: "The useImperativeHandle hook customizes the instance value that is exposed when using React.forwardRef. It allows you to expose specific methods or properties to parent components.",
              difficulty: "advanced"
            },
            {
              id: 187,
              category: "Performance",
              question: "What is the purpose of the React.StrictMode component?",
              answer: "React.StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping developers identify unsafe lifecycles, deprecated APIs, and other issues.",
              difficulty: "intermediate"
            },
            {
              id: 188,
              category: "Performance",
              question: "What is code splitting, and how is it achieved in React?",
              answer: "Code splitting is the practice of splitting your code into smaller chunks that can be loaded on demand. In React, it can be achieved using React.lazy and Suspense to dynamically import components.",
              difficulty: "advanced"
            },
            {
              id: 189,
              category: "Router",
              question: "What is the purpose of the Switch component in React Router?",
              answer: "The Switch component renders the first child <Route> that matches the current location. It is used to group multiple routes and ensure that only one route is rendered at a time.",
              difficulty: "intermediate"
            },
            {
              id: 190,
              category: "Router",
              question: "How do you handle 404 errors in React Router?",
              answer: "You can handle 404 errors in React Router by adding a route without a path that renders a NotFound component. This route should be placed last within the Switch component to catch any unmatched routes.",
              difficulty: "intermediate"
            },
            {
              id: 191,
              category: "Redux",
              question: "What are middleware in Redux?",
              answer: "Middleware in Redux is a way to extend the store's capabilities by intercepting actions before they reach the reducer. Common middleware includes redux-thunk and redux-saga for handling asynchronous actions.",
              difficulty: "intermediate"
            },
            {
              id: 192,
              category: "Redux",
              question: "What is the Redux Toolkit?",
              answer: "The Redux Toolkit is a set of tools and best practices for writing Redux logic. It simplifies the process of setting up Redux with features like createSlice and configureStore, promoting better development practices.",
              difficulty: "intermediate"
            },
            {
              id: 193,
              category: "Testing",
              question: "How can you test asynchronous code in Jest?",
              answer: "You can test asynchronous code in Jest using async/await, returning a promise, or using the done callback to indicate that the test is complete. Jest waits for these to finish before moving on.",
              difficulty: "intermediate"
            },
            {
              id: 194,
              category: "Testing",
              question: "What is snapshot testing in Jest?",
              answer: "Snapshot testing in Jest allows you to save the rendered output of a component to a file. In future tests, Jest compares the rendered output to the stored snapshot, helping you catch unexpected changes.",
              difficulty: "intermediate"
            },
            {
              id: 195,
              category: "Advanced",
              question: "What is a higher-order component (HOC)?",
              answer: "A higher-order component (HOC) is a function that takes a component and returns a new component with added functionality. HOCs are used for code reuse and cross-cutting concerns, like authentication or data fetching.",
              difficulty: "advanced"
            },
            {
              id: 196,
              category: "Advanced",
              question: "What is the context consumer in React?",
              answer: "The context consumer is a component that subscribes to context changes. It can access the current context value and re-render when the context value changes, allowing components to consume context easily.",
              difficulty: "intermediate"
            },
            {
              id: 197,
              category: "Advanced",
              question: "What is the purpose of the Error Boundary in React?",
              answer: "Error Boundaries are components that catch JavaScript errors in their child component tree and log those errors, displaying a fallback UI instead of crashing the whole app. They are defined using the static getDerivedStateFromError and componentDidCatch lifecycle methods.",
              difficulty: "advanced"
            },
            {
              id: 198,
              category: "Advanced",
              question: "How does React's reconciliation algorithm work?",
              answer: "React's reconciliation algorithm compares the previous and next virtual DOM trees to identify changes. It uses a diffing algorithm to minimize the number of updates to the actual DOM, optimizing rendering performance.",
              difficulty: "advanced"
            },
            {
              id: 199,
              category: "Advanced",
              question: "What is the use of PropTypes in React?",
              answer: "PropTypes is a type-checking feature in React that allows you to define the expected types for props passed to a component. It helps catch errors by warning developers if the wrong type of props is passed.",
              difficulty: "intermediate"
            },
            {
              id: 200,
              category: "Advanced",
              question: "What is the purpose of the React Router history object?",
              answer: "The history object in React Router allows you to programmatically navigate the user through different routes in the application. It contains methods like push, replace, and go to control navigation.",
              difficulty: "intermediate"
            }
                    
                
            
    

  
];

export const categories = [
  "Basics",
  "Components",
  "State & Props",
  "Lifecycle",
  "Hooks",
  "Performance",
  "Router",
  "Redux",
  "Advanced",
  "Testing"
];

export const difficulties = ["beginner", "intermediate", "advanced"];
