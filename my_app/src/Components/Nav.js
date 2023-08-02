import React from 'react';
import { useState } from 'react';

function Nav({change, shown}) {

    console.log(shown)

  const [ishovered, sethover] = useState('');

  const onhover = (li) => {
    sethover(li);
  };

  const onMouseLeave = () => {
    sethover('');
  };


  return (
    shown ? (
        <div className='nav' >
        <button onClick={() => change(false)}>X</button>
      <ul>
        <li>
          Main
          <i
            className={`fa-solid fa-arrow-right ${
              ishovered === 'first_li' ? 'fa-shake' : ''
            }`}
            onMouseEnter={() => onhover('first_li')}
            onMouseLeave={onMouseLeave}
          ></i>
        </li>
        <li>
          Skills
          <i
            className={`fa-solid fa-arrow-right ${
              ishovered === 'second_li' ? 'fa-shake' : ''
            }`}
            onMouseEnter={() => onhover('second_li')}
            onMouseLeave={onMouseLeave}
          ></i>
        </li>
        <li>
          Contact
          <i
            className={`fa-solid fa-arrow-right ${
              ishovered === 'third_li' ? 'fa-shake' : ''
            }`}
            onMouseEnter={() => onhover('third_li')}
            onMouseLeave={onMouseLeave}
          ></i>
        </li>
      </ul>
    </div>
  )
     : ""
  )
}

export default Nav;

// {/* <i class="fa-solid fa-arrow-right fa-shake" */}