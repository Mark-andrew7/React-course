import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function Page() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

 export default Page



function Header() {
  return (
    <>
      <header>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <nav>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

function Main() {
  return (
    <>
      <main>
        <h1>Reasons I'm happy to learn react</h1>
        <ol>
          <li>Build my own user interphases</li>
          <li>Know how to integrate with backend</li>
        </ol>
      </main>
    </>
  )
}


function Footer() {
  return (
    <>
    <footer>All rights reserved</footer>
    </>
  )
}