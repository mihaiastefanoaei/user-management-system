import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Test = () => <div>Hello World</div>;

console.log(<Test />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
