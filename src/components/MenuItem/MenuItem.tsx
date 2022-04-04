import Menu from '../Menu'
import MenuItemModel from '../../models/MenuItem'
import styles from './MenuItem.module.scss'
import {useState} from 'react'

interface MenuItemProps {
  item: MenuItemModel
  className?: string
}

const MenuItem = ({item, className}: MenuItemProps) => {
  const [expanded, setExpanded] = useState(false)
  const itemsCount = item.nodes?.length
  const showSubmenu = expanded && !!itemsCount

  const handleClick = ({title}: MenuItemModel) => {
    setExpanded((val) => !val)
    console.log(title)
  }

  return (
    <div className={className}>
      <button
        disabled={!itemsCount}
        className={styles.button}
        onClick={() => handleClick(item)}
      >
        {`${item.title}${itemsCount ? ` (${itemsCount})` : ''}`}
        {itemsCount && (
          <>
            {expanded ? (
              <span className={styles.caret}>&#8593;</span>
            ) : (
              <span className={styles.caret}>&#8595;</span>
            )}
          </>
        )}
      </button>
      {showSubmenu && <Menu items={item.nodes || []} />}
    </div>
  )
}

export default MenuItem
