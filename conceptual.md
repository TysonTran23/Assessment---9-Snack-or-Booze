### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  JS framework that helps handle client and server-side routing in React applications, creation of single webpage without refreshing app
- What is a single page application?
  Operates in the browser and never refreshes
- What are some differences between client side and server side routing?
  Client side routing is about reading the URL and re-rendering parts of the page, with server side routing it has to do with retrieving and sending requests
- What are two ways of handling redirects with React Router? When would you use each?
  The two ways of using a redirect with React Router is the component "Redirect" and the hook "useHistory". For redirect, a example would be if a user is not authenticated, you can redirect them to a login page. For useHistory, the hook gives you access to the history instance so if a user hits the back button or form submission has already occured, the browser will remember that.

- What are two different ways to handle page-not-found user experiences using React Router?
  One way is to use the an "*", if a router does not match any of the given URL, then whatever * is set to will be typically used for the 404. 
  Another way is to use the switch component, to where it will go through all routes, if the first is not found, it will continue to the next. At the end if no pages are found we can render a not found page

- How do you grab URL parameters from within a component using React Router?
  When writing the URL with a parameter, you want to include a : in front of the value you want to pass, To access the value of the param you want to use useParams Hook 

- What is context in React? When would you use it?
  Context is used to share data from components without having to pass down props like a heirarchy. They can be considered global components of React components
- Describe some differences between class-based components and function
  components in React.
  A class components requires you to extend from React. Function are ordinary JS functions that accepts props as arguments and returns React element(JSX)

- What are some of the problems that hooks were designed to solve?
  Hooks allow you to extract state from components and can be tested independetly and reused. You can reuse stateful logic and share state among many componenents