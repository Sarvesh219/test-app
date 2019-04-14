import PropTypes from 'prop-types';
import React, { Component } from 'react';

class HeadLine extends Component {
    render() {
        const { header, desc } = this.props;

        if(!header) {
            return null;
        }

        return (
            <div data-test="HeadLineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">{desc}</p>
            </div>
        );
    }
}

HeadLine.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        age: PropTypes.number,
        email: PropTypes.string,
        fName: PropTypes.string,
        lName: PropTypes.string,
        onlineStatus: PropTypes.bool
    }))
}

export default HeadLine;