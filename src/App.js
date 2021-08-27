import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ticket } from "./pages/ticket/Ticket.page";
import Dashboard from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Entry } from "./pages/entry/Entry.page";
import {PrivateRoute} from './components/private-route/PrivateRoute.comp'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Entry />
          </Route>
            <PrivateRoute path="/dashboard" exact>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket" exact>
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets" exact>
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId"  exact>
              <Ticket />
            </PrivateRoute>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
