import React from 'react'

class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.value
        }

        this.toggleText = this.toggleText.bind(this)
    }

    toggleText() {
        this.setState({value: "other text"})
    }
    render(){
        return <button name="button-click" value={this.state.value} onClick={this.toggleText}>{this.state.value}</button>
    }
}

export default Button