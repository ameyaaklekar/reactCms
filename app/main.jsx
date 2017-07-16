import React, { Component } from 'react';
import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


// Modules Import 

import Navigation from './modules/navigation/navigation.jsx';
import Header from './modules/header/header.jsx';

// Pages Import

import Dashboard from './pages/dashboard/dashboard.jsx';
import Blog from './pages/blog/blog.jsx';

class Main extends Component {

  render() {
    return (
    	<Router>
			<div className="main">
				<Header />

				<Navigation />
				
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/blog' component={Blog} />

			</div>
		</Router>
    );
  }
}

export default Main;	