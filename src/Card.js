import React, { Component } from 'react';
import card from './Credit_Card.jpg';
import ship from './ship_creditCard.png';
import visa from './visa.png';



class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: '',
            date: '',
            name: '',
            valid: true
        }
    }

    handleChangeNum = (event) => {
        var textnum = /^((\d+$){16})$/;
        if (event.target.value.match(textnum)) {
            this.setState({ valid: false })
        }
        else {
            this.setState({
                num: event.target.value.padEnd(16,'*').replace(/(.{4})/g, '$1 '),
                valid: true
            })
        }


    }

    handleChangedate = (event) => {
        this.setState({
            date: event.target.value.replace(/^(\d{2})/, '$1/')
        })
    }
    handleChangename = (event) => {
        
            this.setState({
                name: event.target.value.toUpperCase(),
                valid: true
            })

    }
    render() {


        return (
            <div>
                <div className="credit_card">
                    <h1 className="title1">CREDIT CARD</h1>
                    <img className="ship" src={ship} />
                    <div className="flex-container">

                        <div className="flex-items">

                            <p className="Numbers">{this.state.num}</p>
                            <p className="Month_Year">MONTH/YEAR</p>

                            <div className="Part1">
                                <p className="number">5422</p>

                                <div className="Part2">
                                    <p className="Valid_Thru">VALID<br />THRU</p>
                                    <i class="fas fa-angle-right"></i>
                                    <p className="Date">{this.state.date}</p>
                                </div>

                            </div>
                            <p className="Tiltle2">{this.state.name}</p>
                        </div>
                        <img className="visa" src={visa} />

                    </div>
                    

                </div>
                <div className="inputInterface">
                        <input type="text" placeholder="Card Number" maxLength="16" onChange={this.handleChangeNum}  />
                        <input type="text" placeholder="Card date" maxLength="4" onChange={this.handleChangedate} />
                        <input type="text" placeholder="user name" maxLength="20" onChange={this.handleChangename} value={this.state.name} />
                    </div>
            </div>


        );

    }

}
export default Card