import React from 'react';

import OutsideClickHandler from 'components/common/OutsideClickHandler';
import MenuButton from 'components/nav/menuButton/MenuButton';
import NavTabs from 'components/nav/navTabs/NavTabs';
import NavDrawer from 'components/nav/navDrawer/NavDrawer';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenDrawer: false,
    };
 
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
    this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
    this.handleOutsideDrawerClick = this.handleOutsideDrawerClick.bind(this);
  }

  handleCloseDrawer() {
    this.setState({ isOpenDrawer: false });
  }

  handleOpenDrawer() {
    this.setState({ isOpenDrawer: true });
  }

  handleOutsideDrawerClick() {
    if (this.state.isOpenDrawer) {
      this.handleCloseDrawer();
    }
  }

  render() {

    const blurBackground = (
      <div css={{
          /** @todo update logic as this is not supported in firefox */
          backdropFilter: 'blur(2px) opacity(0.95) brightness(0.85)',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          left: '0',
          transition: 'backdropFilter 0.3s',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
    )

    return (
      <div 
        sx={{
          position: 'fixed',
          top: '0',
          right: '0',
        }}
        is-open={String(this.state.isOpenDrawer)}
      >
        {this.state.isOpenDrawer && blurBackground}

        <header sx={{
            display: 'flex',
            textAlign: 'center',
            mt: 4,
            mr: 4,
          }}
        >
          <NavTabs />
          {/** @todo add Resume button */}
        </header>
  
        <MenuButton onClick={this.handleOpenDrawer} />
  
        <OutsideClickHandler onOutsideClick={this.handleOutsideDrawerClick}>
          <NavDrawer  
            isOpen={this.state.isOpenDrawer} 
            handleCloseMenu={this.handleCloseDrawer} />
        </OutsideClickHandler>
      </div>
    )
  }
}