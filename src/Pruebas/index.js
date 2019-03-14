import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import App from './App';
import * as serviceWorker from '../serviceWorker';
import Welcome from './tryOne'
import Toogle from './tryTwo'
import NumberList from './tryThree'
import Blog from './tryFour'
import Reservation from './tryFive'
import NameForm from './trySix'

const numbers = [1, 2, 3, 4, 5];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
//ReactDOM.render(<App />, document.getElementById('root'));
function AppName() {
  return (
    <div>
      <Welcome name="Ana" />
      <Toogle/>
      <NumberList numbers={numbers}/>
      <Blog posts={posts}/>
      <Reservation/>
      <NameForm />
    </div>
  );
}


  ReactDOM.render(
    <AppName/>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
