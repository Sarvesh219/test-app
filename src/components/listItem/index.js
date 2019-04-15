import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        const { title, desc } = this.props;

        if(!title) {
            return null;
        }

        return (
            <div data-test="listItemComponent">
                <h2 data-test="title">{title}</h2>
                <div data-test="description">{desc}</div>
            </div>
        );
    }
}

ListItem.propTypes = {
    desc: PropTypes.string,
    title: PropTypes.string
};

export default ListItem;