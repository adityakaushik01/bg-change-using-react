import { useState } from 'react'
import './App.css'
import './index.css'


function App() {
  const [color, setColor] = useState()
  let color1 = "Red";
  let color2 = "Blue";
  let color3 = "SeaGreen";
  let color4 = "Orange";
  let color5 = "Pink";
  let color6 = "Purple";
  let color7 = "DarkCyan";
  let color8 = "Indigo";

  return (
    <>
      <div className='w-full h-screen grid justify-center text-center' style={{backgroundColor: color}}>
        <h1 className='text-zinc-300 font-sans text-4xl m-auto underline bg-slate-900 p-6 rounded-xl'>Background Changer Using React</h1>
        <div className='m-auto gap-8 flex flex-wrap justify-center items-center'>
          <button onClick={() => setColor(color1)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color1}}>{color1}</button>
          <button onClick={() => setColor(color2)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color2}}>{color2}</button>
          <button onClick={() => setColor(color3)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color3}}>{color3}</button>
          <button onClick={() => setColor(color4)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color4}}>{color4}</button>
          <button onClick={() => setColor(color5)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color5}}>{color5}</button>
          <button onClick={() => setColor(color6)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color6}}>{color6}</button>
          <button onClick={() => setColor(color7)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color7}}>{color7}</button>
          <button onClick={() => setColor(color8)} className='px-12 py-4 text-white font-bold rounded-xl border-white border-2' style={{backgroundColor: color8}}>{color8}</button>
        </div>
      </div>
    </>
  )
}

export default App
