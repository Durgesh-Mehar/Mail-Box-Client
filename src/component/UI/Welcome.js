import React from 'react'
import EmailForm from '../pages/EmailForm'


function Welcome() {
  return (
   <div>
     <div style={{textAlign:'center', fontSize:'200%'}}>
      <p>Welcome to mail box client</p>
    </div>
    <hr/>
    <EmailForm/>
   </div>
    
  )
}

export default Welcome