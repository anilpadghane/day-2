
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Student from './component/Student';
import Contact from './component/Contact';
import Navlink from './component/Navlink';

function App() {
  return (
    <div>
      <div>
    <h1>Day-2</h1>
      <h2>1.What is the Difference between react and react native? Which one is library or framework?</h2>
      <p>React and React Native are developed by Facebook and have gained a huge fan base in a short time. React is known as ReactJs, which is a JavaScript library to build single-page web applications.

Besides, React Native is a React JS-based framework to design mobile apps. Moreover, with reusable components, you can develop native mobile applications.

React is a JavaScript library of reusable components designed to create skeletons of the apps, whereas React Native is designed to build native mobile apps with reusable components. React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript. Both React and React Native are ruling the industry and are widely used for mobile and web applications. However, the difference between web apps vs websites will not affect your user.</p><hr/>
      <h2>2.What is the package name you are using for routing</h2>
      <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.In this Browser Router as Router, Routes and Route and NavLink get imported from react-router-dom. React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.</p><hr/>
      <>
    <Router>
    <Header/>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='./Navlink' element={<Navlink/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Student' element={<Student/>}/>
    </Routes>
    </Router></>
      <hr/>
      <h2>4.How do you pass data from parent to child?</h2>
      <p>React.js allows us to use props (short form of property) to pass data from parent component to child component. We have to set props value inside the child component, while we embed it to the parent component</p>
  <hr/>
      <h2>5.What is lazy loading in react ?</h2>
      <p>Lazy loading is a design pattern for optimizing web and mobile apps. The concept of lazy loading is simple: initialize objects that are critical to the user interface first and quietly render noncritical items later. React has two features that make it very easy to apply code-splitting and lazy loading to React components: React.lazy() and React.Suspense. React.lazy() is a function that enables you to render a dynamic import as a regular component. Dynamic imports are a way of code-splitting, which is central to lazy loading. A core feature as of React 16.6, React.lazy() eliminates the need to use a third-party library such as react-loadable. React.Suspense enables you to specify the loading indicator in the event that the components in the tree below it are not yet ready to render</p>
      <hr/>
      <h2>6.Difference b/w Stateful and stateless Component?</h2>
      <ul typeof='disc'>
        <li><h4>Stateful Component:-</h4>Stateful components are those components which have a state. The state gets initialized in the constructor. It stores information about the component’s state change in memory. It may get changed depending upon the action of the component or child components.</li>
        <li><h4>tateless Component:-</h4>Stateless components are those components which don’t have any state at all, which means you can’t use this.setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.</li></ul><hr/>
      <h2>7.How do you switch one component to another, Conditional Rendering?</h2>
      <p>Switch Component allows the user to toggle the state of a single setting on or off. We can use the following approach in ReactJS to use the Evergreen Switch Component.
using props we can switch one component to another
<ul>
  <li><h4>Conditional Rendering:-</h4>In React, conditional rendering refers to the process of delivering elements and components based on certain conditions</li>
  </ul>
  </p><hr/>
    </div>
      
    </div>
  );
}

export default App;
