import React, {useContext} from 'react'
import {StoreContext} from '../context'
import {updateSearchTerm, changeListSize} from '../store/actions'
import {selectCurSeacrhTerm, selectCurConfig} from '../store/selectors'
import '../style/SearchForm'

export default function SearchForm() {
  const {state, dispatch} = useContext(StoreContext)
  const handleChange = function(e) {
    dispatch(updateSearchTerm(e.target.value))
  }

  const handleListSizeChange = e => {
    dispatch(changeListSize(parseInt(e.target.value)))
  }

  const {searchType, listSize} = selectCurConfig(state)
  return (
    <form className="form" onSubmit={e => e.preventDefault()}>
      <div className="form__section">
        <label className="form__label" htmlFor="search-field">
          Search {searchType}
        </label>
        <input
          id="search-field"
          className="form__input"
          type="text"
          onChange={handleChange}
          placeholder="type here"
          value={selectCurSeacrhTerm(state)}
        />
      </div>

      <div className="form__section">
        <label className="form__label" htmlFor="list-size-field">
          List size
        </label>
        <select
          id="list-size-field"
          className="form__input"
          onChange={handleListSizeChange}
          value={listSize}
        >
          <option className="form__input-option" value="10">
            10
          </option>
          <option className="form__input-option" value="15">
            15
          </option>
          <option className="form__input-option" value="20">
            20
          </option>
        </select>
      </div>
    </form>
  )
}
