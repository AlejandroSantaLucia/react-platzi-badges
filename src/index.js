import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/badgeNew';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(<BadgeNew/>,container); // badge va con </> porque render necesita un elemento y no un componente
