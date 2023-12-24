import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title = (
    <h1 className="title">React Element</h1>
);
const Title = () => (
    <h1 className="title">React component</h1>
);
const Heading = () => (
    <div id="container">
        {title}
        <Title/> {/* component coposition */}
        <h1 className="heading">React component</h1>
    </div>
);

root.render(<Heading/>);