var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var PlComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cd-fixed-bg cd-bg-assembly header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 pl-header">3PL</h1>
                        <center className="tape-center">
                            <p className="product-description-header"><em>Actively coordinate your supply chain for<br/>business growth, cost savings, and one stop shop service.</em></p>
                        </center>

                        <div className="row">
                            <div className="supporting-description assembly-descript">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-assembly-column">
                                    <center className="supporting-center-assembly">
                                        <p className="supporting-product-description fade-in sup-context">Our 3PL service encompasses anything that involves management of the way your business resources are moved to the areas where they are required.</p>
                                        <p className="fade-in sup-context">_________________________________</p>

                                    </center>
                                </div>
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-assembly-column">
                                   <center className="supporting-center-assembly">
                                       <p className="supporting-product-description fade-in sup-context">Actively analyzing your supply chain for business opportunities, improved cost savings, risk management and end-to-end efficiency.</p>
                                       <p className="fade-in sup-context">_________________________________</p>
                                   </center>
                               </div>
                            </div>
                        </div>
                        <div className="row dark">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="img-responsive middle-border" src="images/3pl-person-cropped-white.jpg"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="img-responsive middle-border" src="images/3pl-person-warehouse-cropped-white.jpg"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="img-responsive middle-border" src="images/3plperson-cropped-white.jpg"/>
                            </div>
                        </div>
                        <div className="action">
                            <div className="row">
                                <div className="col-md-6 bottom-tag">
                                    Let Speedway Packaging and Distribustion be the answer for all of your questions!
                                </div>
                                <div className="col-md-6 call-button">
                                    <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call!</button></a>
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

module.exports = PlComponent;
