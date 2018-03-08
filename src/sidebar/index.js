import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div styleName="container">
                <div styleName="header">Navigation:</div>
                <button>Stuff</button>
            </div>
        );
    }
}

export default CSSModules(Sidebar, styles);