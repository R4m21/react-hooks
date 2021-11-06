import React, { Component } from "react";

class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevSate) => ({
        timer: prevSate.timer + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>
    Class Timer : {this.state.timer}<br/>
    <button onClick={()=>clearInterval(this.interval)}>clear interval</button>
    </div>;
  }
}

export default ClassTimer;
