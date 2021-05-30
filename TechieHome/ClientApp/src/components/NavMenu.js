import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
	  return (
		<nav id="header" className="fixed w-full z-30 top-0 text-white">
			<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

				<div className="pl-4 flex items-center">
					<Link to="/" className="inline-block py-2 px-4 text-black font-bold no-underline">
						<div className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
							<svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
								  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)"></rect>
							</svg> Techie Solutions Oy
						</div>
					</Link>
				</div>

				<div className={`block lg${this.state.collapsed ? ':hidden' : ''} pr-4`}>
					  <button onClick={e => this.toggleNavbar()} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none md:hidden">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>

				<div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${this.state.collapsed ? 'hidden' : ''}`} id="nav-content">
					<ul className="list-reset lg:flex justify-end flex-1 items-center">
						<li className="mr-3">
							<Link to="contact" className="inline-block py-2 px-4 text-black font-bold no-underline">Ottaa yhteytt&auml;</Link>
						</li>
					</ul>
				</div>
			</div>

			<hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
		</nav>
    );
  }
}
