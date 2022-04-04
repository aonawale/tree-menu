import MenuItem from '../MenuItem'
import MenuItemModel from '../../models/MenuItem'
import styles from './Menu.module.scss'

interface MenuProps {
  items: MenuItemModel[]
}

const Menu = ({items}: MenuProps) => (
  <>
    {items.map((item) => (
      <MenuItem key={item.title} item={item} className={styles.menuItem} />
    ))}
  </>
)

export default Menu
