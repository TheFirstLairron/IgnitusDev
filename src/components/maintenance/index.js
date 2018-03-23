import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

class Maintenance extends React.Component {
    render() {
        return (
            <div styleName="container">
                <span styleName="inner">Hey! There isn't anything here right now, but we are building it as we speak! Check back often, as it should be done soon.</span>
            </div>
        );
    }
}

export default CSSModules(Maintenance, styles);