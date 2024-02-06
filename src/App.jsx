import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const getYear = new Date

  const disyear = getYear.getFullYear() - year
  const dismonth = getYear.getMonth() - month
  const disday = getYear.getDay() - day;


  console.log(disyear)


  return (
    <div className="bg-coly min-h-screen w-full pt-12">
      <div className="p-8 rounded-xl bg-white w-[50%] mx-auto">
        <div className="flex flex-row gap-4 w-full flex-wrap">
          <div className="flex flex-col gap-2">
            <label>DAY</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="px-4 py-2 border border-black rounded-xl w-36"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>MONTH</label>
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="px-4 py-2 border border-black rounded-xl w-36"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>YEAR</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="px-4 py-2 border border-black rounded-xl w-36"
            />
          </div>
        </div>
        <hr />
        <div>
          <div className="flex flex-row justify-start items-center gap-4">
            {year == 0 ? (
              <p className="text-purlor font-[1000] text-5xl">--</p>
            ) : (
              <p className="font-[800] text-4xl">{disyear}</p>
            )}

            <p className="font-[800] text-3xl">years</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            {month == 0 ? (
              <p className="text-purlor font-[1000] text-5xl">--</p>
            ) : (
              <p>{dismonth}</p>
            )}
            <p className="font-[800] text-3xl">months</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            {day == 0 ? (
              <p className="text-purlor font-[1000] text-5xl">--</p>
            ) : (
              <p>{disday}</p>
            )}
            <p className="font-[800] text-3xl">days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
