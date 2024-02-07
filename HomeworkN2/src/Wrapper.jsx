import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Wrapper;
