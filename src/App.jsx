import React from 'react'
import { FaGripVertical } from "react-icons/fa";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
const App = () => {
  return (
      <div className='h-screen  flex items-center justify-center'>
        <div className='md:max-w-[100%] rounded-xl  border border-[#363739] bg-[#262629]'>
          <div>
          <div className='flex items-center p-3 justify-between border-b border-[#363739]'>
          <h1 className='text-[#838385] text-lg font-bold'>Currency Converter</h1>
         <FaGripVertical size={20} fill='#838385'/>
        </div>
          <div className='flex flex-col gap-3'>
             <div className='bg-[#1E1E21] border border-[#363739] flex justify-between m-3 p-2 rounded-2xl'>
              <input type='text' className='text-white outline-none bg-[#1E1E21]' autoFocus='on'/>
               <select className= 'outline-none border cursor-pointer border-[#363739] p-2 w-48 text-white rounded-2xl bg-[#0F0F10]'>
               <option value="USD" className='font-bold'>USD</option>
               <option value="EUR" className='font-bold'>EUR</option>
               <option value="CAD" className='font-bold'>CAD</option>
               <option value="INR" className='font-bold'>INR</option>
               </select>
             </div>
             <div className='bg-[#1E1E21] border border-[#363739] flex justify-between m-3 p-2 rounded-2xl'>
              <input type='text' className='text-white outline-none bg-[#1E1E21]' autoFocus='on'/>
               <select className= 'outline-none border cursor-pointer border-[#363739] p-2 w-48 text-white rounded-2xl bg-[#0F0F10]'>
               <option value="USD" className='font-bold'>USD</option>
               <option value="EUR" className='font-bold'>EUR</option>
               <option value="CAD" className='font-bold'>CAD</option>
               <option value="INR" className='font-bold'>INR</option>
               </select>
             </div>
          </div>
          </div>
       
        </div>
      </div>
  )
}


export default App
