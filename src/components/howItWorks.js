
import React, { Component } from 'react';
import questions from '../assets/question2.gif';
import crowdFunding from '../assets/rowdFunding.gif';
import payment from '../assets/payment.gif';
class Working extends Component {
    render() {
        return (
            <>
                <div class="details-container">
                    <h1 className="section-head mt-5 fs-1 text-center"><i class="fas fa-arrow-circle-down"></i> How it Works?</h1>

                    <div className="details-text mx-auto mt-5">
                        <img className="timeline-img item-align-left m-5" src={questions} />
                        <div className=" details item-align-right m-5 " >
                            <h3 className="text-center">Transaction Process</h3>
                            <p className="desc text-center "> Our platform provides the facility of funding initial costs for producing crops via Crowd-Funding.
                            Entire process for carrying out transactions will be based on blockchain. Thus, the flow of money from investors to farmers can be easily tracked.
                            Since flow of money from investors to farmers and that by farmers to vendors for expenditure can be tracked, the defaulting party can be easily identified in case of any legal dispute.</p>
                        </div>

                    </div>
                    <div className="details-text mx-auto mt-5">

                        <div className=" details item-align-left m-5 " >
                            <h3 className="text-center">Crowd-funding helps the farmer for the initial cost of production</h3>
                            <p className="desc text-center "> Different people (we call them Investors) contribute the amount they can bear, and gets the share in the final product. </p>
                        </div>
                        <img className="timeline-img item-align-right m-5" src={crowdFunding} />

                    </div>
                    <div className="details-text mx-auto mt-5">
                        <img className="timeline-img item-align-left m-5" src={payment} />
                        <div className=" details item-align-right m-5 " >
                            <h3 className="text-center">Secure and Instant Payments </h3>
                            <p className="desc text-center "> We give you the power of Instant <br /> and Secure Payment gateway,
                            with the payment modes of:
                                <ul className="remove-bullets">
                                    <li>via Portis Wallet</li>
                                    
                                    <li>via Crypto-currencies </li>
                                </ul>
                                Investors will have the power to approve the expenditure of money provided by them to the farmers. Only once they are satisfied that the money being provided by them will be used in right place, they will approve its expenditure and funds will be released.

                            </p>
                        </div>


                    </div>
                </div>


            </>
        );
    }
}
export default Working;