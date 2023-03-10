import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const ViewEmail = () => {
const params =  useParams();
  const emaildata = useSelector(state=>state.in.inbox);
  const message = emaildata.find(item => item.id === params.id)
  console.log(message);
  return (
    <div style={{margin:'2%',textAlign:'center',fontSize:'25px'}}>
     <p> 𝖘𝖚𝖇𝖏𝖊𝖈𝖙:-{message.subject}</p>
     <p> 𝕱𝖗𝖔𝖒:- {message.email }</p>
     <p> 𝖒𝖊𝖘𝖘𝖆𝖌𝖊:-{message.message}</p>
    </div>
  )
}

export default ViewEmail;