import React, { Component } from 'react';
import { ScrollingNav, NavItem, DefaultNav } from './NavBar.style';
import { Container } from 'theme/grid';


class NavBar extends Component {
  static defaultProps = {
    bottomBorderWidth: 2,
    headerHeight: window.innerHeight,
    fadeInDistance: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      navOpacity: 0
    };
    // bind functions
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  /**
   * fading SrollingNavBar when scrolldown
   * endFade: show full ScrollingNavBar when scrolled all away from DefaultNavBar
   */
  updateNavOpacity() {
    const navbarHeight = 50; //defaultNavBar height
    const {
      bottomBorderWidth,
      headerHeight,
      fadeInDistance
    } = this.props;
    const endFade = headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrollY = window.scrollY;

    if (scrollY < startFade) {
      if(this.state.opacity === 0) return;
      this.setState({ navOpacity: 0});
      return;
    };

    if(scrollY > endFade) {
      if(this.state.opacity === 1) return;
      this.setState({ navOpacity: 1});
      return;
    };

    const pxPastStartFade = scrollY - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity});
  }

  render() {
    return (
      <div>
        <DefaultNav>
          <Container>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/projects'>Projects</NavItem>
            <NavItem to='/about'>About</NavItem>
          </Container>
        </DefaultNav>
        <ScrollingNav opacity={this.state.navOpacity ? this.state.navOpacity : 0} borderBottomWidth={this.props.bottomBorderWidth}>
          
            {/* NavBrand here (at start) */}
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/projects'>Projects</NavItem>
            <NavItem to='/about'>About</NavItem>
          
        </ScrollingNav>
      </div >
    );
  }
}

export default NavBar;