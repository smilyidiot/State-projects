import './index.css'

const TabItem = props => {
  const {isActive, tabDetails, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const activeTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeTab = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={activeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
