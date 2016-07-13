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
                    <div className="col-xs-12 col-sm-12 col-md-12 product-button sr-call dark">
                        <div className="product-expand">
                           <h1 className="product-header"><a href="../index.html">Speedway</a></h1>
                           <p className="product-description"><small>Give Us A Call</small><br/><a href="tel:864-271-1149">864-271-1149</a></p>
                        </div>
                    </div>
                    <div className="cd-fixed-bg cd-bg-assembly header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 pl-header">3PL</h1>
                        <center className="tape-center">
                            <p className="product-description-header"><em>Actively coordinate your supply chain for<br/>business growth, cost savings, and one stop shop service.</em></p>
                        </center>
                        <div className="row light not">
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
                        <div className="row">
                            <div className="supporting-description pl-descript">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-pl-column">
                                    <center className="supporting-center-assembly">
                                        <p className="fade-in sup-context">_________________________________</p>
                                        <p className="supporting-product-description fade-in sup-context no-top-padding mobile pl-support">Our 3PL service encompasses anything that involves management of the way your business resources are moved to the areas where they are required.</p>
                                    </center>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-pl-column">
                                    <center className="supporting-center-assembly">
                                        <p className="supporting-product-description fade-in sup-context padding-top-25 mobile pl-support">Actively analyzing your supply chain for business opportunities, improved cost savings, risk management and end-to-end efficiency.</p>
                                        <p className="fade-in sup-context">_________________________________</p>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="action mobile pl-container">
                            <div className="row">
                                <div className="col-md-6 bottom-tag no-top-padding">
                                    <h2 className="project-managers">Let Speedway Packaging and Distribution be the answer for all of your questions!</h2>
                                </div>
                                <div className="col-md-6 call-button">
                                    <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call<br/><small>(864)271-1149</small></button></a>
                                </div>
                            </div>
                        </div>
                         <div className="mobile">
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
