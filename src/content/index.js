import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class Content extends React.Component {
    render() {
        return (
            <div styleName="container">CONTENT</div>
        );
    }
}

export default CSSModules(Content, styles);