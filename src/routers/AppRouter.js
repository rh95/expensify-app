import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddPage from '../components/AddPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (

  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddPage} />
          <Route path="/help" component={HelpExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default AppRouter;