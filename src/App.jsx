import React, { useEffect, useState } from 'react'
import { FaGripVertical } from "react-icons/fa";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
const App = () => {
  const [amount, setAmount] = useState(0)
  const [fromCur, setFromCur] = useState('USD')
  const [toCur, setToCur] = useState('EUR')
  const [converted, setConverted] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    try {   
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`)
      const data = await res.json()
      setConverted(data.rates[toCur]) 
      
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if(fromCur === toCur){
      setConverted(amount)
     }

     fetchData()
  }, [amount, fromCur, toCur])

  function handleAmountChange(e){
    if(isNaN(e.target.value))return
    setAmount(e.target.value)
  }

  return (
      <div className='h-screen  flex items-center justify-center overflow-hidden'>
        <div className='lg:max-w-[40%] sm:max-w-[10%] rounded-xl  border border-[#363739] bg-[#262629]'>
          <div>
          <div className='flex items-center p-3 justify-between border-b border-[#363739]'>
          <h1 className='text-[#838385] text-lg font-bold'>Currency Converter</h1>
         <FaGripVertical size={20} fill='#838385'/>
        </div>
          <div className='flex flex-col gap-3'>
             <div className='bg-[#1E1E21] border border-[#363739] flex justify-between m-3 p-2 rounded-2xl'>
              <input type='text' className='text-white outline-none bg-[#1E1E21]' autoFocus='on' value={amount} onChange={handleAmountChange}/>
               <select value={fromCur} disabled={isLoading} onChange={(e) => setFromCur(e.target.value)} className= 'outline-none border cursor-pointer border-[#363739] p-2 w-48 text-white rounded-2xl bg-[#0F0F10]'>
               <option value="USD" className='font-bold'>USD</option>
               <option value="EUR" className='font-bold'>EUR</option>
               <option value="CAD" className='font-bold'>CAD</option>
               <option value="INR" className='font-bold'>INR</option>
               </select>
             </div>
             <div className='bg-[#1E1E21] border border-[#363739] flex justify-between m-3 p-2 rounded-2xl'>
              <input type='text' className='text-white outline-none bg-[#1E1E21]' disabled value={converted}/>
               <select value={toCur} disabled={isLoading} onChange={(e) => setToCur(e.target.value)} className= 'outline-none border cursor-pointer border-[#363739] p-2 w-48 text-white rounded-2xl bg-[#0F0F10]'>
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
