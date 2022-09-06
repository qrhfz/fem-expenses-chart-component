import { useState } from 'react'
import logo from "./assets/images/logo.svg"
import './App.css'
import { Chart } from './Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-cream-bg min-h-screen grid content-center">
      <div className='w-full md:max-w-[540px] px-4 md:p-0 mx-auto grid gap-4'>
        <div className='bg-my-red rounded-xl p-5 md:py-6 md:px-8 text-white flex flex-row justify-between items-center'>
          <div>
            <h2 className="text-lg">
              My balance
            </h2>
            <div className='font-bold text-3xl'>$921.48</div>
          </div>
          <img className="h-12" src={logo} alt="logo" />
        </div>
        <div className='bg-card-white rounded-xl px-5 py-6 md:px-10 md:py-8 text-med-brown'>
          <h1 className="font-bold text-2xl md:text-3xl mb-8 text-dark-brown">
            Spending - Last 7 days
          </h1>
          <Chart></Chart>
          <hr className='h-[2px] bg-cream-bg my-6' />
          <div className='text-sm md:text-base'>
            <div>Total this month</div>
            <div className="grid grid-rows-2 grid-flow-col">
              <div className="font-bold text-3xl md:text-5xl row-span-2 text-dark-brown">
                $478.33
              </div>
              <div className="font-bold text-end text-dark-brown">+2.4%</div>
              <div className='text-end'>from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
