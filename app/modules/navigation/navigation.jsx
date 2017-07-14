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
		  			<li><a>Dashboard</a></li>
		  			<li><a>Test1</a></li>
		  			<li><a>Test2</a></li>
		  			<li><a>Test3</a></li>
		  		</ul>
				</div>
			</nav>
		</aside>
    );
  }
}

export default Navigation;	