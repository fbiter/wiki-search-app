import React from 'react'
import {Store} from './store'
import './style/root'
import {SearchPage} from './pages'

export default function App() {
  return (
    <div>
      <Store>
        <h1>Wiki Search App</h1>
        <SearchPage />
      </Store>
    </div>
  )
}
