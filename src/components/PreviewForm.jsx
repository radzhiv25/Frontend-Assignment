// import React from 'react'
import { useState } from "react"

export const PreviewForm = ({preview}) => {
  // const [data, setData] = useState({})

  const renderFormItem = (item) => {
    switch(item.uiType){
      case 'Input':
        return(
          <input 
          type="text"
          placeholder={item.placeholder}
          className="border p-3 rounded-md w-full"
          />
        )
        case 'Select':
        return(
          <select
          className="p-2 border rounded-md w-max"
          >
            {
              item.validate.options.map((option) => {
                return(
                  <option key={option.value}>
                    {option.label}
                  </option>
                )
              })
            }
          </select>
        )
        // case 'Radio':
        //   return (
            
        //   )
    }
  }

  console.log(renderFormItem)

  const colors = ['red', 'blue', 'green'];
  return (
    <div className="h-auto">
        {!preview ? <p>N/A</p> : <p>{preview}</p>}
        <select name="" id="" className="border p-1 rounded">
          {
            colors.map((color) => {
              return(
                <option key={color} value={color}>
                  {color}
                </option>
              )
            })
          }
        </select>
    </div>
  )
}
