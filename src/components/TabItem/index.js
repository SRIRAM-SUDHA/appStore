import './index.css'

const TabItem = props => {
  const {tabDetail, onCategoryChange, isActive} = props
  const {displayText, tabId} = tabDetail

  const tabChange = () => {
    onCategoryChange(tabId)
  }

  return (
    <li className={`tab ${isActive ? 'ActiveTab' : ''}`}>
      <button type="button" className="tabBtn" onClick={tabChange}>
        <p className="tabHeading">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
