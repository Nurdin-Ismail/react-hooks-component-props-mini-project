import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const pot = posts.map((item) => {
        return <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>

    })
    
    return (
        <main>
           {pot}
        </main>
    )

}

export default ArticleList