import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Footer extends React.Component {
    render() {
        return (
            <div styleName="container">FOOTER</div>
        );
    }
}

export default CSSModules(Footer, styles);