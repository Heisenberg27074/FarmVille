import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import { Redirect } from 'react-router-dom'
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import PortisIndex from './Portis'
import '../componentStyle/button.css';

class ContributeForm extends Component {
    state = {
        value: "",
        errorMessage: "",
        loading: false,
        metamask: false,
        portis: true
    };

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        this.setState({ loading: true, errorMessage: "", portis: true });

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, "ether")
            });

            <Redirect to={`/campaigns/${this.props.address}`} />
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false, value: "" });
    };

    render() {
        return (
            <>  <div className="display-inline-flex" >
                <Button className="ui orange button "  onClick={() => this.setState({ metamask: true, portis: false })}>
                    Contribute with MetaMask
                </Button>
                {
                    this.state.metamask ?
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <label id="desc"> Fill the amount to Contribute</label>
                                <Input 
                                    value={this.state.value}
                                    onChange={event => this.setState({ value: event.target.value })}
                                    label="ether"
                                    labelPosition="right"
                                />
                            </Form.Field>

                            
                            <Message error header="Oops! Try adding some amount to contribute" content={this.state.errorMessage} />
                            
                            <Button secondary loading={this.state.loading}>
                                Contribute!
                            </Button>
                        </Form>
                        :
                        null
                }
                <div className="display-inline-block">
                    {this.state.portis ? <PortisIndex /> : null}
                </div>
            </div>
            </>
        );
    }
}

export default ContributeForm;
