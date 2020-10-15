import React from 'react';

function Contact (props) {

    return (
    
        <main className="container">
      
          <article className="row">
        
            <section className="card contactCard">
      
              <h5 className="card-header" >Contact</h5>
      
              <section className="card-body">
      
                <form name="submit-to-google-sheet">
      
                  <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input name = "name" type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" required></input>
                  </div>
      
                  <div className="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input name = "email" type="email" className="form-control" id="formGroupExampleInput2" placeholder="Your Email"></input>
                  </div>
      
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea name = "message" className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                  </div>
      
                  <button className="btn btn-dark" id= "submit" type ="submit">Submit</button>
                </form>
              </section>
            </section>
          </article>
        </main>
    );
  }
  
  export default Contact;