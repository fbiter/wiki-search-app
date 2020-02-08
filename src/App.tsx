import React from 'react'
import {Store} from './store'
import './style/root'
import {SearchPage} from './pages'

export default function App() {
  return (
    <div>
      <Store>
        <header>
          <h1 className="header-title">Wiki Search App</h1>
        </header>
        <main>
          <SearchPage />
        </main>
      </Store>
    </div>
  )
}
