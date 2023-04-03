import React from 'react';

function Article() {
  return (
    <main>
      <article>
        <post-date>11/12/20</post-date>        
        <h2>On the Street in Brooklyn</h2>     
        <img src="blog-image-1.jpg" alt="blog-image-1"/>   
        <p>
        Crem ipsum dolor sit amet…
        </p>
        <div className="container">
          <a href="#">Continues...</a>
        </div>
      </article>
      <article>
        <post-date>11/11/20</post-date>        
        <h2>Vintage in Vogue</h2>     
        <img src="blog-image-2.jpg" alt="blog-image-1"/>   
        <p>
          Srem ipsum dolor sit amet…
        </p>
        <div className="container">
          <a href="#">Continues...</a>
        </div>
      </article>
    </main>
  );
}

export default Article;