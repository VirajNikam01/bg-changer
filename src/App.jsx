import { useState } from 'react'
import './App.css'

function App() {
  
  const[color, setColor] = useState("olive")

  return (
    <>
      
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
    <div className='w-full fixed bottom-28 flex justify-center'>

<div className='bg-white w-fit px-2 py-4 rounded-2xl flex flex-wrap justify-center items-center gap-3'>

<button onClick={()=> setColor("cyan")} className='px-4 text-white py-1 shadow-xl font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"cyan"}}>Cyan</button>
<button onClick={()=> setColor("crimson")} className='px-4 text-white py-1 shadow-xl  font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"crimson"}}>Crimson</button>
<button onClick={()=> setColor("blue")} className='px-4 text-white py-1 shadow-xl font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"blue"}}>Blue</button>
<button onClick={()=> setColor("orange")} className='px-4 text-white py-1 shadow-xl  font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"orange"}}>Orange</button>
<button onClick={()=> setColor("salmon")} className='px-4 text-white py-1 shadow-xl font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"Salmon"}}>Salemon</button>
<button onClick={()=> setColor("purple")} className='px-4 text-white py-1 shadow-xl font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"Purple"}}>Purple</button>
<button onClick={()=> setColor("black")} className='px-4 text-white py-1 shadow-xl font-bold text-l rounded-xl m-1 md:mx-5 md:text-2xl md:px-10' style={{backgroundColor:"Black"}}>Black</button>
</div>

</div>
    </div>


        
    </>
  )
}

export default App
