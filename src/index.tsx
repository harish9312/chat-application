import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { BasePage } from 'src/components/reusableComponents/BasePage';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={BasePage} ></Route>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
