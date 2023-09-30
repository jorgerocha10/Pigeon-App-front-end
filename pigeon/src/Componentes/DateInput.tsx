import React from 'react'


const cssStyle : React.CSSProperties = {
  // para add codigo css
}

type IDateInput = React.ComponentProps<'input'> & {
  label: string
}

const DateInput = ({label, ...props}: IDateInput) => {
  return (
    <div>
      <label htmlFor="label">{label}</label>
      <input id={label} name={label} type="date" {...props}/>
    </div>
  )
}

export default DateInput