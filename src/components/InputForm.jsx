// import React from 'react'
import { useState } from "react"

export const InputForm = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(JSON.parse(input))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="text-center p-2">
        <h1 className="font-bold">JSON Preview</h1>
        <textarea name="" id="" rows='35'  className="border w-full rounded resize-none">
          {input}
        </textarea>
        <button className="text-white py-2 px-3 bg-black rounded" onClick={handleChange}>Submit</button>
    </div>
  )
}
