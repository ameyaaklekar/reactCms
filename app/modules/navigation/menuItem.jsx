import React, { Component } from 'react';

import{
	Link
} from 'react-router-dom';

class MenuItem extends Component {

  render() {
    return (
		
		<li>
			<Link to={this.props.url}><i className={this.props.icon}></i>{this.props.name}</Link>
		</li>

    );
  }
}

export default MenuItem;	