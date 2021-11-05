import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
             count:0
        }
    }

    componentDidMount(){
         this.interval = setInterval(this.tick, 1000);
    }
    tick = () =>{
        this.setState({
            count : this.state.count+1
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval)
        }
    render() {
        return (
            <div>
            <p>{this.state.count}</p>
            </div>
        )
    }
}

export default IntervalClassCounter
