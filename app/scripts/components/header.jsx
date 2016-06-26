var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var Header = React.createClass({
  render: function(){
    return (

        <header id="head">
            <div className="holder">
                <div className="logoHolder">
                    <a href="#" title="Speedway | Packaging and Distribution">
                        <img height="75px" src="images/speedway-logo-transparent.png" alt="Speedway Packaging and Distribution" data-pin-nopin="true"></img>
                    </a>
                </div>
            </div>
            <ul className="list-inline">
               <li><a href="#tape">Tape</a></li>
               <li><a href="#bulk">Bulk</a></li>
               <li><a href="#assembly">Assembly</a></li>
               <li><a href="#copackaging">Co Packaging</a></li>
               <li><a href="#pl">3PL</a></li>
               <li><a href="tel:864-271-1149">864-271-1149</a></li>
             </ul>
        </header>
    );
  }
});

module.exports = Header;
