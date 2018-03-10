import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { BasePage } from 'src/components/reusableComponents/BasePage';
import { ChatWindow } from 'src/components/ChatWindow';
import { InboxWindow } from './components/InboxWindow/index';
import { DraftsWindow } from 'src/components/DraftsWindow';
import { SentWindow } from './components/SentWindow/index';
import { TrashWindow } from './components/TrashWindow/index';
import './commons.scss';
import { TaskWindow } from './components/TaskWindow/index';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={BasePage} ></Route>
        <Route exact path="/inbox" component={InboxWindow} ></Route>
        <Route exact path="/chat" component={ChatWindow} ></Route>
        <Route exact path="/drafts" component={DraftsWindow} ></Route>
        <Route exact path="/sent" component={SentWindow} ></Route>
        <Route exact path="/trash" component={TrashWindow} ></Route>
        <Route exact path="/task" component={TaskWindow} ></Route>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
