import React from 'react'

const Footer = () => {
     
    return(
      
      <footer className="page-footer blue margin-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore hic, quam quia dolor quasi doloremque est iure maiores excepturi cupiditate!</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
              <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
              <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
              <li><a className="grey-text text-lighten-3" href="/attractions">Attractions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2022 Cincinnati Tours
        </div>
      </div>
    </footer>
        

    )


}

export default Footer