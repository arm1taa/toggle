/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useState } from "react"



const ToggleText = ({onClick}) => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
        onClick(toggle)
    }
    return (
        <>
            <button onClick={handleClick}
            className="button">click</button>
        {toggle && <h1 className="text">Hi World</h1>}

          
      </>
  )
}


export default ToggleText
