var React = require('react');
var AcceptedCards = require('./AcceptedCards');

var CardNumber = React.createClass({
    getInitialState: function () {
        return {
            cardNumber: ''
        };
    },

    handleChange: function(e) {
        this.setState({cardNumber: e.target.value});
    },

    render: function() {
        return (
            <div>
                <AcceptedCards cardNumber={this.state.cardNumber} />
                <input type="text" onChange={this.handleChange} />
            </div>
        );
    }
});

var Expiration = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" placeholder="MM" /> / <input type="text" placeholder="YY" />
            </div>
        );
    }
});

var CCV = React.createClass({
    render: function() {
        return (
            <div>
                <input type="text" />
            </div>
        );
    }
});

var PaymentForm = React.createClass({
    render: function() {
        return (
            <div>
                <CardNumber />
                <Expiration />
                <CCV />
            </div>
        );
    }
});

module.exports = PaymentForm;
