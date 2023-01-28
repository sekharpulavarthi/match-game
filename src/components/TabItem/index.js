import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeButtonClassName = isActive ? 'active tab-button' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        onClick={onClickTabItem}
        type="button"
        className={activeButtonClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
