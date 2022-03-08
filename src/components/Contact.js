import React from 'react'

const Contact = () => {
  return (
    <div className='container'>

      <h4 className="center">Contact</h4>

      <div class="form-check">

        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>

        <label class="form-check-label" for="flexCheckDefault">

        Default checkbox

        </label>

        </div>

      <div class="form-check">

      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>

      <label class="form-check-label" for="flexCheckChecked">

      Checked checkbox

      </label>

      </div>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur eligendi eum? Consequuntur, nemo quae.</p>

    </div>
  )
};

export default Contact