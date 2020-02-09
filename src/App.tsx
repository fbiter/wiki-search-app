import React from 'react'
import {Store} from './store'
import './style/root'
import {SearchPage} from './pages'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="topPage">
        <Store>
          <Header title="Wiki Search App" />
          <main>
            <SearchPage />
          </main>
        </Store>
      </div>

      <Footer label="filip.biterski@gmail.com" />
    </>
  )
}
