import React from "react";
import ReactEcharts from "echarts-for-react"; 
import axios from "axios";
import Cookies from 'js-cookie';

class Chart extends React.Component {  
  state = {
    option: {}
  }

  componentDidMount() {
    axios.get("/tickets/chart", {headers: {Authorization: this.state.token}})
      .then(res => {
        const option = res.data;
        this.setState({ option });
      })
  }
  
  render(){
    return(<ReactEcharts option={this.state.option} />);
  }
} 

export default Chart;