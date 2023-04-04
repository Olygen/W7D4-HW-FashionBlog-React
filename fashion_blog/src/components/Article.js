import React from 'react';
import BlogImage1 from "./BlogImage1.jpg"
import BlogImage2 from "./BlogImage2.jpg"

function Article() {
  return (
    <main>
      <article>
        <post-date>11/12/20</post-date>        
        <h2>On the Street in Brooklyn</h2>     
        <img src={BlogImage1} alt="BlogImage1" />   
        <p>
        Crem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            dicta laudantium doloribus voluptatum cupiditate repellendus sequi
            accusamus blanditiis consectetur autem tempore similique ullam, iste
            eligendi est, nobis optio odit veritatis?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam corporis doloribus distinctio
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            reiciendis nostrum eius debitis tenetur enim, cupiditate ullam quas
            natus provident voluptas consequatur ab sunt dicta mollitia iure
            voluptatem! Rerum, sint! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Impedit reprehenderit ipsum ab illum vel quibusdam
            odio dolor iure sed eligendi quas minima, quo expedita cumque eum
            rem, non quasi assumenda.
        </p>
        <div className="container">
          <a href="#">Continues...</a>
        </div>
      </article>
      <article>
        <post-date>11/11/20</post-date>        
        <h2>Vintage in Vogue</h2>     
        <img src={BlogImage2} alt="BlogImage2" />   
        <p>
        Srem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            dicta laudantium doloribus voluptatum cupiditate repellendus sequi
            accusamus blanditiis consectetur autem tempore similique ullam, iste
            eligendi est, nobis optio odit veritatis?Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam corporis doloribus distinctio
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            reiciendis nostrum eius debitis tenetur enim, cupiditate ullam quas
            natus provident voluptas consequatur ab sunt dicta mollitia iure
            voluptatem! Rerum, sint! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Impedit reprehenderit ipsum ab illum vel quibusdam
            odio dolor iure sed eligendi quas minima, quo expedita cumque eum
            rem, non quasi assumenda.
        </p>
        <div className="container">
          <a href="#">Continues...</a>
        </div>
      </article>
    </main>
  );
}

export default Article;