"use client";
import { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '../Icons';
import { useSelector } from 'react-redux';
import { themes } from '../styles/colorPallet/themes';

const webNav = [
  { id: 1, name: "Friends", navIcon: <FontAwesomeIcon icon='users' /> },
  { id: 2, name: "Blocked", navIcon: <FontAwesomeIcon icon='ban' /> },
  { id: 3, name: "Services", navIcon: <FontAwesomeIcon icon='business-time' /> },
  { id: 4, name: "Feedback", navIcon: <FontAwesomeIcon icon='bullhorn' /> },
  { id: 5, name: 'Test Area', navIcon: <FontAwesomeIcon icon='vial' /> }
]

const LeftBlock = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentTheme = useSelector(state => state.themes.currentTheme)
  const handleMenu = () => { setShowMenu(!showMenu) }

  return (
    <div className={`leftBarContainer ${showMenu ? 'showMenu' : 'hideMenu'}`}>
      <div className={`leftBarContentHolder`}>
        <button className={`openNavBtn ${showMenu ? 'rotate' : 'hideMenu rotateBack'}`} onClick={() => { handleMenu() }}>
          <FontAwesomeIcon icon='square-caret-right' className={`rightIcon`} />
        </button>

        <div className={`listHolder`}>
          {webNav.map((link) => (
            <li key={link.id} className={`listItems`} onClick={() => setShowMenu(!showMenu)}>
              <Link href={`/pages/${link.name.replace(/\s/g, '')}`} className={`link`}><i className={`icons`}>{link.navIcon}</i> {link.name}</Link>
            </li>
          ))}
        </div>

      </div>

    </div>
  )
}

export default LeftBlock