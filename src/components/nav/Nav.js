import React from 'react';

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
  }

  handleCloseDrawer() {
    this.setState({ isOpenDrawer: false });
  }

  handleOpenDrawer() {
    this.setState({ isOpenDrawer: true });
  }

  render() {

    // const blurBackground = (
    //   <div css={{
    //     /** @todo update logic as this is not supported in firefox */
    //       backdropFilter: 'blur(4px) opacity(0.7)',
    //       transition: 'filter 0.3s',
    //       pointerEvents: 'none',
    //       userSelect: 'none',
    //     }}
    //   />
    // )

    return (
      <div 
        sx={{
          position: 'fixed',
          top: '0',
          right: '0',
        }}
        is-open={String(this.state.isOpenDrawer)}
      >
        {/* {blurBackground} */}
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
  
        <NavDrawer 
          isOpen={this.state.isOpenDrawer} 
          handleCloseMenu={this.handleCloseDrawer} 
        />
      </div>
    )
  }
}