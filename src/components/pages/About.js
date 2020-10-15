import React from "react";
import Wilson from "../assets/Wilson_Panda.png"
import Fb from "../assets/fb.png"
import LinkedIn from "../assets/LinkedIn.png"
import Github from "../assets/GitHub.png"
import Instagram from "../assets/Instagram.png"

function About (props) {

    return (

        <main className="container">
      
          <article className="row">
      
            <section className="card" id="index_card">
              <h5 className="card-header">About Me</h5>
      
              <section className="card-body">

                <img src= {Wilson} id="image_me" alt = "Me!"></img>

                <p className="card-text" > Hello! and welcome to my responsive portfolio webpage built using REACT! My name is Wilson Birch and I am a mechanical engineering grad from Carleton University.
                  I love playing sports, specifically football and hockey and I am excited to be adding to my skills with the Carleton University Coding Bootcamp. This website includes
                  a Portfolio section where my latest work can be found as well as a contact page where you can submit your information with a message and I will be in touch as soon as possible.
                  
                  Thank you for visiting my page and hopefully I will be hearing from you soon! Listed below are links where you can find me on social media:
                </p>

                <section className="row">

                    <div className = "col"></div>

                    <article className="card bg-light col">
                    <div className="card-body">
                        <a href="https://www.linkedin.com/in/wilson-birch-188ba396/" target = "_blank" rel="noopener noreferrer"><img src= {LinkedIn} alt = "LinkedIn Logo" ></img></a>
                    </div>
                    </article>

                    <div className = "col"></div>

                    <article className="card bg-white col" >
                    <div className="card-body">
                        <a href="https://www.facebook.com/wilson.birch" target = "_blank" rel="noopener noreferrer"><img src= {Fb} alt = "Facebook Logo" ></img></a>
                    </div>
                    </article>

                    <div className = "col"></div>

                    <article className="card bg-light col" >
                    <div className="card-body">
                        <a href="https://www.instagram.com/wilsonbirch/" target = "_blank" rel="noopener noreferrer"><img src= {Instagram} alt = "Instagram Logo" id = "social"></img></a>
                    </div>
                    </article>

                    <div className = "col"></div>

                    <article className="card bg-white col" >
                    <div className="card-body">
                        <a href="https://github.com/wilsonbirch" target = "_blank" rel="noopener noreferrer"><img src= {Github} alt = "Instagram Logo" id = "social"></img></a>
                    </div>
                    </article>

                    <div className = "col"></div>
      
                </section>
              </section>
            </section>
          </article>
        </main>
    );
  }
  
  export default About;