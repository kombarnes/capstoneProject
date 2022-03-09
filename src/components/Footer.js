import React from 'react'

const Footer = () => {
     
    return(
      
      <footer class="page-footer blue">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore hic, quam quia dolor quasi doloremque est iure maiores excepturi cupiditate!</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
              <li><a class="grey-text text-lighten-3" href="/about">About</a></li>
              <li><a class="grey-text text-lighten-3" href="/contact">Contact</a></li>
              <li><a class="grey-text text-lighten-3" href="/attractions">Attractions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2022 Cincinnati Tours
        </div>
      </div>
    </footer>
        

    )


}

export default Footer