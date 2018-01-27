import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './components/AppRoutes';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store';
import { Provider } from 'react-redux';
// import the component

ReactDOM.render(<Provider store={store}><AppRoutes /></Provider>, document.getElementById('root'));
registerServiceWorker();
