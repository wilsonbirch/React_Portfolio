import React, { Component } from "react";
import resume from "../assets/Wilson_Birch_Resume.pdf"

function Wrapper(props) {
  return (
    <footer class="footer">
    <h4>My Responsive Portfolio</h4>
   
    <i class="material-icons">email</i>: wilsonbirch@gmail.com 
    <i class="material-icons">smartphone</i>: 613-229-4163
    <i class="material-icons">description</i>: <a href = {resume} target = "_blank" class="card-link text-primary" id="resume">Resume</a>
    
  </footer> 
  );
}

export default Wrapper;