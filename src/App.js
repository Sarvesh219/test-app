import React, {Component} from 'react';
import Header from './components/header';
import HeadLine from './components/headLine';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="main">
                    <HeadLine header="Posts" desc="Click the button to render posts!"/>
                </section>
            </div>
        );
    }
}

export default App;