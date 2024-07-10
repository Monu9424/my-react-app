
import React from 'react'
import Hello from './Hello'

export const App = (a) => {
  
  console.log(a,"aaaaa");
  return (
  

     <div>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Nesciunt quas necessitatibus quis rerum tempora, doloremque quod ea eaque iure impedit ut! Magnam quaerat ex, repellendus amet quod ipsum beatae suscipit.</p> */}
      <Hello b={a.data}/>
     </div>
     
  )
}

export default App
