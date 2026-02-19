import React from 'react'
import ShowData from '../components/ShowData'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function DataPage() {
  return (
    <div>
        <Header title="Terror Data System"/>
        <Nav />
        <ShowData />
    </div>
  )
}
