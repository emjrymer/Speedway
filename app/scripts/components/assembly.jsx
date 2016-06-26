var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var AssemblyComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cd-fixed-bg cd-bg-assembly header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 bulk-header">Light Assembly</h1>
                        <center className="tape-center">
                            <p className="product-description-header"><em>From start to finish our team fits<br/>components together to make sense of your time and budget.</em></p>
                        </center>
                        <div className="row">
                            <div className="supporting-description">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <p>From start to finish our team fits components together to make sense of your time and budget.</p>
                               </div>
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                   <p>From start to finish our team fits components together to make sense of your time and budget.</p>
                               </div>
                            </div>
                        </div>

                         <div className="left-10">
                             <Footer/>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        )
    }
})

module.exports = AssemblyComponent;
