import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="leading-normal tracking-normal text-white gradient">
                <NavMenu />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
