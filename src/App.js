import React, {Component} from 'react';
import Header from './components/header';
import HeadLine from './components/headLine';

import './app.scss';

const tempArr = [{
    fName: 'Sarvesh',
    lName: 'Blogs',
    email: 'sarvesh.kujur219@gmail.com',
    age: 24,
    onlineStatus: true
}];

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="main">
                    <HeadLine header="Posts" desc="Click the button to render posts!" tempArr={tempArr}/>
                </section>
            </div>
        );
    }
}

export default App;