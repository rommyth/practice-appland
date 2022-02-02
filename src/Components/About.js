import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, delectus dicta esse ratione aut illo iste ad eius consequuntur similique tempora amet quo maiores sed veritatis saepe labore consequatur et eaque laudantium? Porro, iusto quaerat?</p>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default About;
