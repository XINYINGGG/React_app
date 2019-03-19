import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'

// const tasks = ['take out the trash','take','walk the dog'];

/*
const element = React.createElement('ol', null, 
	tasks.map((task,index) => React.createElement('li',{key: index},task))
);
*/

		//all elements must equate to a single jsx element
		//so we use <div></div> to encapulate in a div tag


ReactDOM.render(<Main/>, document.getElementById('root'));