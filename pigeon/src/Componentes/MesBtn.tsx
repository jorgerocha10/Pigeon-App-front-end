import React from 'react'

const cssStyle : React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-6)",
  border: "none",
  borderRadius: "var(--gap)",
  fontWeight: "600",
  textTransform: "capitalize",
  color: 'white'
} 

function nomeMes(n: number){
  const date = new Date();
  date.setMonth(date.getMonth()+n);
  return new Intl.DateTimeFormat('en-us', {month: 'long'}).format(date);
}

const MesBtn = ({n}: { n: number}) => {
  return (
    <button style={cssStyle} > {nomeMes(n)}</button>
  )
}

export default MesBtn