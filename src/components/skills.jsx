import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (

      <section>
        <header className="major">
          <h2>Skills</h2>
        </header>
        <div className="features">
          <article>
            <span className="icon">
              <i className="fab fa-html5" />
            </span>
            <div className="content">
              <h3>HTML5</h3>
              <p>The standard programming language for describing the contents and appearance of web
                  pages.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-bootstrap" />
            </span>
            <div className="content">
              <h3>Bootstrap</h3>
              <p>A responsive, front-end component library.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-css3" />
            </span>
            <div className="content">
              <h3>CSS3</h3>
              <p>Describes how HTML elements should be styled and displayed.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-js-square" />
            </span>
            <div className="content">
              <h3>JavaScript &amp; JQuery</h3>
              <p>The programming languages used to make web pages interactive.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-node-js" />
            </span>
            <div className="content">
              <h3>Node.js</h3>
              <p>A server-side JavaScript framework.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-cube" />
            </span>
            <div className="content">
              <h3>MySQL</h3>
              <p>A relational database management system..</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-js" />
            </span>
            <div className="content">
              <h3>Express.js</h3>
              <p>An application framework for Node.js.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-js" />
            </span>
            <div className="content">
              <h3>Handlebars.js</h3>
              <p>A templating engine used to separate HTML and JS.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-cube" />
            </span>
            <div className="content">
              <h3>Sequelize</h3>
              <p>A promise-based Node.js ORM.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-cube" />
            </span>
            <div className="content">
              <h3>MongoDB</h3>
              <p>A document-oriented NoSQL database.</p>
            </div>
          </article>
          <article>
            <span className="icon">
              <i className="fab fa-react" />
            </span>
            <div className="content">
              <h3>React</h3>
              <p>A JavaScript library for building user interfaces.</p>
            </div>
          </article>
        </div>
      </section>
    );
  }
};