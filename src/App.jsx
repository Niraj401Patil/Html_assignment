import React from 'react'

function App(props) 
{

let curDate =new Date();
curDate=curDate.getHours();

let msg='';

if (curDate>=1 && curDate<=12)
{
 msg="Good Morning";

}else if( curDate >=12 && curDate<19)
 {
     msg="Good afternoon";
}else
 {
     msg="Good night sr se";
 }


 return (

 <> 
 <h1 style={{ fontFamily: 'Noto Sans JP', fontWeight: 'bold', color:'pink'}}>
  {`Hello ${msg}  My name is - ${props.name} and i am a ${props.age} year old`} </h1>
 
 
 </> );

}



export default App;

