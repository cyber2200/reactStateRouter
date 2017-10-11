import React from 'react';

class Header extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.linkClick = this.linkClick.bind(this);
  }
  
  linkClick(page) {
    history.pushState({}, null, './' + page);
    this.props.baseThis.setState({page : page});
  }
  
  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <h1>Header</h1>
        <a onClick={() => this.linkClick('home')}>Home</a>| 
        <a onClick={() => this.linkClick('about')}>About</a>|
        <a href="./test">Server Side link</a>
      </div>
    );
  }

}

export default Header;