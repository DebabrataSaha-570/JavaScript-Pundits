import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleProgrammer.css'

const SingleProgrammer = (props) => {
    const { id, name, image, role, age, country, salary, github, twitter, linkedin } = props.programmer


    return (

        <div class=" col-md-4 col-sm-6 mb-5 text-center ">
            <div class="bg-white rounded shadow py-5 px-4"><img src={image} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">{name} </h5>
                <span class="small text-color ">{role}</span>
                <br />
                <span class="small  text-muted">Salary: ${salary}</span>
                <br />
                <span class="small  text-muted">Country: {country}</span>
                <br />
                <button onClick={() => props.handleAddToCart(props.programmer)} className='btn btn-secondary my-3'>  <FontAwesomeIcon icon={faShoppingCart} /> Add To cart</button>
                <ul class="social mb-0 list-inline mt-2">

                    <li class="list-inline-item"><a href={twitter} target="_blank" class="social-link"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item"><a href={github} target="_blank" class="social-link"><i class="fa fa-github"></i></a></li>

                    <li class="list-inline-item"><a href={linkedin} target="_blank" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>

            </div>
        </div>





    );
};

export default SingleProgrammer;