import React from 'react';
import Project from "../Project"

function Portfolio (props) {

    return(
    
    <main className="container">
        <article className="row">
            <section className="col">
                <section className="card portfolioCard"  id="portfolio_main_card">
                    <h5 className="card-header"> Portfolio</h5>
                    <Project></Project>
                </section>
            </section>
        </article>
    </main>
    );
  }
  
  export default Portfolio;