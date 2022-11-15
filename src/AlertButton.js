import * as React from "react";

class AlertButton extends React.Component {
    onClick() {
        alert("WARNING ALERT!");
    }
    
    render() {
        return <button onClick={this.onClick}>PLEASE ALERT ME!</button>;
    }
}


export default AlertButton;