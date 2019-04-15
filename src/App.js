import { connect } from 'react-redux';
import React, {Component} from 'react';

import { fetchPosts } from './actions';
import Header from './components/header';
import HeadLine from './components/headLine';
import ListItem from './components/listItem';
import SharedButton from './components/button';

import './app.scss';

const tempArr = [{
    fName: 'Sarvesh',
    lName: 'Blogs',
    email: 'sarvesh.kujur219@gmail.com',
    age: 24,
    onlineStatus: true
}];

class App extends Component {
    fetch = () => {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    render() {
        const { posts } = this.props;

        const configButton = {
            buttonText: 'Fetch Posts',
            emitEvent: this.fetch
        };

        return (
            <div data-test="appComponent">
                <Header />
                <section className="main">
                    <HeadLine header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
                    <SharedButton {...configButton} />
                    {posts.length > 0 &&
                        <div>
                            {posts.map((post, index) => {
                                const { title, body } = post;
                                const configListItem = {
                                    title,
                                    desc: body
                                };
                                return (
                                    <ListItem key={index} {...configListItem} />
                                );
                            })}
                        </div>
                    }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(App);