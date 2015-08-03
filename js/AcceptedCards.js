var React = require('react');
var classnames = require('classnames');
var keyMirror = require('keymirror');
var CARDTYPES = keyMirror({
    visa: null,
    master: null,
    amex: null
});

var AcceptedCards = React.createClass({
    determineCardType: function(cardNumber) {
        if(/^4/.test(cardNumber)) {
            return CARDTYPES.visa;
        } else if(/^3[47]/.test(cardNumber)) {
            return CARDTYPES.amex;
        } else if(/^5[1-5]/.test(cardNumber)) {
            return CARDTYPES.master;
        } else {
            return null;
        }
    },

    getClassNames: function(actual, expected) {
        return classnames({'active': actual === expected});
    },

    render: function() {
        var cardType = this.determineCardType(this.props.cardNumber);

        return (
            <div>
                <img className={ this.getClassNames(cardType, CARDTYPES.visa) } src="images/visa.png" alt="visa" />
                <img className={ this.getClassNames(cardType, CARDTYPES.master) } src="images/mastercard.png" alt="mastercard" />
                <img className={ this.getClassNames(cardType, CARDTYPES.amex) } src="images/amex.png" alt="amex" />
                <span>Accepted credit cards</span>
            </div>
        );
    }
});

module.exports = AcceptedCards;
