import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import logo from "../assets/logo";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underreacted"/>
      <About image={logo} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
      
    </div>
  );
}

export default App;
