import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
  
const index = () => {
  return (
    <div>
      <h1 className='p-4'>Hello w!</h1>
      <h4>NextJs Popup - GeeksforGeeks</h4>
      <Popup trigger={<span> Click to open popup </span>} modal on={'click'}>
        <div>GeeksforGeeks</div>
        <button>Click here</button>
      </Popup>
    </div>
  )
}

export default index
