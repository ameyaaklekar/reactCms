import React, { Component } from 'react';

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
			  			<li><a><i className="fa fa-tachometer"></i>Dashboard</a></li>
			  			<li><a><i className="fa fa-comments"></i>Blog</a></li>
			  		</ul>
				</div>
			</nav>
			<nav className="aside__nav">
				<div className="aside__nav__category">
					<h5 className="aside__nav__category__heading">CMS Settings</h5>
			  		<ul>
			  			<li><a><i className="fa fa-gears"></i>Settings</a></li>
			  			<li><a><i className="fa fa-users"></i>Users</a></li>
			  		</ul>
				</div>
			</nav>
		</aside>
    );
  }
}

export default Navigation;	