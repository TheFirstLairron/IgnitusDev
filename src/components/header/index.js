import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Header extends React.Component {
    render() {
        return(
            <div styleName="container">
                <div styleName="header">Zachary Allnutt's Resume</div>
            </div>
        );
    }
}

export default CSSModules(Header, styles);