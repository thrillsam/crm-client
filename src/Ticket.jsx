import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

class Ticket extends React.Component {
  state = {
    ticket: '',
    token: Cookies.get('jwt_token')
  }

  componentDidMount() {
    const id = this.props.params.id;
    axios.get(`/tickets/${id}`, {headers: {Authorization: this.state.token}})
      .then(res => {
        const ticket = res.data;
        this.setState({ ticket });
      })
  }

  render() {
    return (
    	<ul>
        {
          <li key={this.state.ticket.id}>{this.state.ticket.title}</li>
        }
      </ul>
    )
	}
}

export default (props) => (<Ticket {...props} params={useParams()} />);