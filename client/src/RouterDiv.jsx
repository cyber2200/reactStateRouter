import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';

class RouterDiv extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
  }
  
  /**
   * Render the component.
   */
  render() {
    console.log(location.pathname);
    this.props.baseThis.state.page = location.pathname;
    switch (this.props.baseThis.state.page) {
      case '/about':
        return (
          <About />
        ); 
      break;
      default:
        return (
          <Home />
        ); 
    }
  }

}

export default RouterDiv;