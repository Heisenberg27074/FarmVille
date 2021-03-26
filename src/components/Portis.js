import React, { Component } from 'react';
import Portis from '@portis/web3';
import { Button } from 'semantic-ui-react';
import '../componentStyle/button.css';
class PortisIndex extends Component {
    componentDidMount() {
        const portis = new Portis('211b48db-e8cc-4b68-82ad-bf781727ea9e', 'rinkeby');
        this.setState({ portis });
    }
    render() {
        return <Button className="ui purple button" floated="right" style={{margin:"4px"}} tabIndex="0" onClick={() => this.state.portis.showPortis()}>Contribute with Portis</Button>;
    }
}

export default PortisIndex;
