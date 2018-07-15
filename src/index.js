import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root>
                    <BrowserRouter>
                        <Route path="/" component={ App } />
                    </BrowserRouter>
                </Root>, document.getElementById('root'));
registerServiceWorker();
