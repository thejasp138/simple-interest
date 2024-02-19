
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [pamount,setPamount]=useState(0)
  const [rate,setRate]=useState(0) 
  const[time,setTime]=useState(0) 

  const [validpamount,setValidpamount]=useState(false)
  const [validrate,setValidrate]=useState(false)
  const [validtime,setValidtime]=useState(false)
  const[res,setRes]=useState(0)

  const validInput=(e)=>{
    const {name,value}=e.target 
    // console.log(name,value)
    if(value.match(/^[0-9]*.?[0-9]+$/)){
      if(name=='pamount'){
         setPamount(value)
         setValidpamount(true)
      }
      else if(name=='rate'){
        setRate(value)
        setValidrate(true)
      }
      else{
        setTime(value)
        setValidtime(true)
      }

    }
    else{
      if(name=='pamount'){

        setPamount(0)
        setValidpamount(false)
      }
      else if(name=='rate'){
        setRate(0)
        setValidrate(false)
      }
      else{
        setTime(0)
        setValidtime(false)
      }


    }
    
    
   

  }
  console.log(validpamount,validrate,validtime)
  console.log(pamount,rate,time)

  const resetFrom=()=>{
    setPamount(0)
    setRate(0)
    setTime(0)


    setValidpamount(false)
    setValidrate(false)
    setValidtime(false)
    setRes(0)
  }


  const subitted=(e)=>{
    e.preventDefault()
    console.log(pamount,rate,time)
    const res=(pamount* rate* time)/100
    setRes(res)
    
  
    
  //   console.log(pamount,rate,time)
  //   const pattern=/^[1-9][0-9]*$/
  //   if(!pamount.match(pattern)){
  //     alert("Inavlide Principle Amount")
  //   }
  //   if(!rate.match(/^[1-9][0-9]{0,1}$/)){
  //     alert("Invalid Rate")
  //   }
  //   if(!time.match(/^[1-9][0-9]{0,1}$/)){
  //     alert("Invalid Duration")
  //   }

  }
  

  return (
    <>
      <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='bg-light w-50 shadow rounded p-5'>
          <h4>Simple Interest Calculator</h4>
          <div className='d-flex justify-content-center p-5 border shadow mt-3 'style={{backgroundColor:"#abb3cf"}}>
          ₹ {res}

          </div>
          <form action="" onSubmit={(e)=>{subitted(e)}}>
            <div className='mt-4'>
            <TextField id="outlined-basic" name='pamount'  onChange={(e)=>{validInput(e)}} style={{width:"100%"}} label="₹ Principle Amount" variant="outlined" />
            {
            !validpamount&&
            <div className='text-danger'>
              ---Invalid Principle Amoun---
            </div>
            }
            </div>
            <div className='mt-2'>
            <TextField id="outlined-basic" name='rate'  onChange={(e)=>{validInput(e)}} style={{width:"100%"}} label="% Rate" variant="outlined" />
            {
            !validrate&&
            <div className='text-danger'>
              ---Invalid Rate---
            </div>
            }
            </div>
            <div className='my-2'>
            <TextField id="outlined-basic" name='time' onChange={(e)=>{validInput(e)}} style={{width:"100%"}} label="Time" variant="outlined" />
            {
            !validtime&&
            <div className='text-danger'>
              ---Invalid Duratoion---
            </div>
            }
            </div>
            <Stack spacing={2} direction={'row'}>
            <Button variant="contained"type='submit'  disabled={validpamount&&validrate&&validtime?false:true} className='bg-dark text-white ' style={{height:"50px",width:"50%"}}>SUBMIT</Button>
            <Button variant="contained" type='reset'  onClick={resetFrom} className='bg-info' style={{height:"50px",width:"50%"}}>RESET</Button>


            </Stack>

          </form>

          
        </div> 

      </div>
    
    </>
  )
}

export default App
