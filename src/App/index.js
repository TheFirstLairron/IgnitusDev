import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Header from '../header';
import Content from '../content';
import Sidebar from '../sidebar';
import Footer from '../footer';

class App extends React.Component {
    render() {
        return (
            <div styleName="container">
                <Header />
                <Content />
                <Sidebar />
                <Footer />
            </div>
        );
    }
}

export default CSSModules(App, styles);