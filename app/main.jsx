import React, { Component } from 'react';


// Modules Import 

import Navigation from './modules/navigation/navigation.jsx';
import Header from './modules/header/header.jsx';

class Main extends Component {

  render() {
    return (
		<div className="main">
			<Header />

			<Navigation />

			<section className="content-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h1>Dashboard</h1> 	
						</div>
					</div>
				</div>
			</section>

		</div>
    );
  }
}

export default Main;	