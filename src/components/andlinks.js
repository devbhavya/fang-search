import React from 'react'
import './andlinks.css'
const Andlinks = () => {
  return (
    <div className='andlinks'>
        <ul>
            <li><button className='active_btn'>News</button></li>
            <li><button>Images</button></li>
            <li><button>Shopping</button></li>
            <li><button>Salary</button></li>
        </ul>
    </div>
  )
}

export default Andlinks