var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var Header = React.createClass({
  render: function(){
    return (
        <div className='row'>
            <header className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="head">
                <div className="holder">
                    <div className="logoHolder">
                        <a href="/" title="Speedway | Packaging and Distribution">
                            <img height="75px" src="images/speedway-logo-transparent.png" alt="Speedway Packaging and Distribution" data-pin-nopin="true"></img>
                        </a>
                    </div>
                </div>
                <ul className="list-inline">
                   <li><a href="#tape-rewinders-speedway-packaging-greer-sc">Tape</a></li>
                   <li><a href="#bulk-plastic-dry-services-speedway-greer-sc">Dry Bulk</a></li>
                   <li><a href="#assembly-speedway-packaging-distribution-greer-sc">Assembly</a></li>
                   <li><a href="#copackaging-speedway-packaging-distribution-manufacturing-greer-sc">Co Packaging</a></li>
                   <li><a href="#3pl-speedway-packaging-distribution-manufacturing-greer-sc">3PL</a></li>
                   <li><small className="left-6">Give Us A Call</small><br/><a href="tel:864-271-1149">864-271-1149</a></li>
                 </ul>
            </header>
        </div>
    );
  }
});

module.exports = Header;
