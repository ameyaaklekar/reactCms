import React, { Component } from 'react';

import{
	Link
} from 'react-router-dom';

import MenuItem from './menuItem.jsx';

class Navigation extends Component {

  render() {
    return (
		<aside className="aside aside--fixed">
			<div className="aside__logo">
				ReactCMS
			</div>

			<nav className="aside__nav">
				<div className="aside__nav__category">
					<h5 className="aside__nav__category__heading">Navigation</h5>
			  		<ul>
			  			<MenuItem url="/" name="Dashboard" icon="fa fa-dashboard" />
			  			<MenuItem url="/blog" name="Blog" icon="fa fa-comments" />
			  		</ul>
				</div>
			</nav>

			<nav className="aside__nav">
				<div className="aside__nav__category">
					<h5 className="aside__nav__category__heading">Settings</h5>
			  		<ul>
			  			<MenuItem url="/settings" name="Settings" icon="fa fa-gears" />
			  			<MenuItem url="/users" name="Users" icon="fa fa-users" />
			  		</ul>
				</div>
			</nav>
		</aside>
    );
  }
}

export default Navigation;	