import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Sidebar from './sidebar'

class SlideMenu extends React.Component {

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu id="slide-menu">
        <Sidebar />
      </Menu>
    );
  }
}

export default SlideMenu