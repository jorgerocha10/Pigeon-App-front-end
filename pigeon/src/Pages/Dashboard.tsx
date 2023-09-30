import React from 'react'
import { useData } from '../Context/DataContext'

const Dashboard = () => {
  const {data} = useData();
  console.log(data)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard