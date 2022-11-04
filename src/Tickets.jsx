import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Header from './components/Header'

class Tickets extends React.Component {

	state = {
		tickets: [],
    token: Cookies.get('jwt_token')
	}

  componentDidMount() {
    // debugger
    axios.get("/tickets", {headers: {Authorization: this.state.token}})
      .then(res => {
        const tickets = res.data;
        this.setState({ tickets });
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
      	<ul>
          {
            this.state.tickets
              .map(ticket =>
                <Link to={`/tickets/${ticket.id}`}>
                  <li>{ticket.id}</li>
                </Link>
              )
          }
        </ul>
      </div>
    )
	}
}

export default Tickets;