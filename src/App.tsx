import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Chart } from './Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-cream-bg min-h-screen grid content-center">
      <div className='w-full md:max-w-[540px] mx-auto grid gap-4'>
        <div className='bg-my-red rounded-xl py-6 px-8 text-white'>
          <h2>
            My balance
          </h2>
          <div className='font-bold text-xl'>$921.48</div>
        </div>
        <div className='bg-card-white rounded-xl px-10 py-8'>
          <h1 className="font-bold text-xl mb-8">
            Spending - Last 7 days
          </h1>
          <Chart></Chart>
          <hr className='h-1 bg-cream-bg my-6' />
          <div>Total this month</div>
          <div className="grid grid-rows-2 grid-flow-col">
            <div className="font-bold text-5xl row-span-2">
              $478.33
            </div>
            <div className="font-bold text-end">+2.4%</div>
            <div className='text-end'>from last month</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
