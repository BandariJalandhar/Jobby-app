import {BsSearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }
  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderJobs = () => {
    const {getJobs} = props
    getJobs()
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          data-testid="searchButton"
          className="search-button-container"
          onClick={renderJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="filter-gruops-options-container">
        <h1 className="filters-group-heading">Type of Employment</h1>
        <ul className="filters-group-list-container">
          {employmentTypesList.map(eachEmployeeType => {
            const {changeEmployeeList} = props

            const onSelectEmployeeType = () => {
              changeEmployeeList(eachEmployeeType.employmentTypeId)
            }

            return (
              <li
                className="filters-group-item"
                key={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  value={eachEmployeeType.employmentTypeId}
                />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="filter-gruops-options-container">
        <h1 className="filters-group-heading">Salary Range</h1>
        <ul className="filters-group-list-container">
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props

            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }

            return (
              <li
                className="filters-group-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  value="label"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="check-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}

      <h1>j</h1>
    </div>
  )
}
export default FiltersGroup
