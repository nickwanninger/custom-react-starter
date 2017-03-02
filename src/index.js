import React from 'react';
import { render } from 'react-dom';
import App from './app'
require('../styles/style.sass')

render(
	<App/>
	, document.getElementById('app'));
