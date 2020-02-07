import React, {useContext} from 'react'
import {StoreContext} from '../context'
import {updateSearchTerm, changeListSize} from '../store/actions'
import {selectCurSeacrhTerm} from '../store/selectors'

export default function SearchForm() {
  const {state, dispatch} = useContext(StoreContext)
  const handleChange = function(e) {
    dispatch(updateSearchTerm(e.target.value))
  }

  const handleListSizeChange = e => {
    dispatch(changeListSize(parseInt(e.target.value)))
  }
  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <div className="form-field-box">
        <label className="form-label" htmlFor="input-field">
          Search {state.config.searchType}
        </label>
        <input
          id="input-field"
          className="form-input"
          type="text"
          onChange={handleChange}
          placeholder="type here"
          value={selectCurSeacrhTerm(state)}
        />
      </div>
      <div className="form-field-box">
        <label className="form-label" htmlFor="list-size-field">
          List size
        </label>
        <select
          id="list-size-field"
          className="form-input"
          onChange={handleListSizeChange}
          value={state.config.listSize}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </form>
  )
}
