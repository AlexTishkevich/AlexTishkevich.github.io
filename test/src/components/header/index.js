import React from 'react';
import logo from './logo_w.png';

export default class Header extends React.Component{
	render(){
	return(
		<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <span className="Links">
              <a
                className="App-link"
                href="."
                target="_self"
                rel="noopener noreferrer"
              >
              Update
              </a> 
              <a
                className="App-link"
                href="https://pixelplex.io"
                target="_blank"
                rel="noopener noreferrer"
              >
              PixelPlex
              </a>
            </span>
        </header>
		);
	}
}