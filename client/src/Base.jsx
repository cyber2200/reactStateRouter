import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import RouterDiv from './RouterDiv.jsx';

class Base extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {page : ''};
    this.linkClick = this.linkClick.bind(this);
  }
  
  linkClick(page) {
    history.pushState({}, null, './' + page);
    this.setState({page : page});
  }
  
  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <Header baseThis={this} />
        <div>
          <RouterDiv baseThis={this} />
        </div>
        <Footer />
      </div>
    );
  }

}

export default Base;