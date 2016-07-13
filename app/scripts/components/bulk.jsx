var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var BulkComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 product-button sr-call dark">
                        <div className="product-expand">
                           <h1 className="product-header"><a href="./">Speedway</a></h1>
                           <p className="product-description"><small>Give Us A Call</small><br/><a href="tel:864-271-1149">864-271-1149</a></p>
                        </div>
                    </div>
                    <div className="cd-fixed-bg cd-bg-bulk header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 bulk-header">Plastic Dry Bulk Services</h1>
                        <center className="tape-center">
                            <p className="product-description-header"><em>Drive your business forward with each and<br/>every shipment delivering your product safely and efficiently.</em></p>
                        </center>
                        <div className="row">
                            <div className="supporting-description">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-left-column">
                                        <div className="supporting-center">
                                            <p className="supporting-product-description fade-in sup-context no-top-padding mobile no-border-or-margin">For years Speedway Packaging and Distribution has provided plastic dry bulk services for customers and our continued goal is to ensure our customers have the best possible service.</p>
                                            <p className="fade-in sup-context">_________________________________</p>
                                            <h3 className="fade-in sup-context margin-top-6 mobile groove-border bulk-center-padding-top">Some Of Our Specifics<br/>Railcar Box Offs, Sea Container Offloading, Dry Bulk Container Service, Super Sacks or Bags to Tankers, Silo to Tankers Service, and Warehouse Storage.</h3>
                                         </div>
                                     </div>
                                     <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left-10 m1024 i768">
                                         <div className="fade-in sup-context video-container">
                                             <iframe className="tape-video" src="https://www.youtube.com/embed/GiejTGDrMFk" frameBorder="0" allowFullScreen></iframe>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                        <div className="action bulk-action-container mobile m768 m425">
                            <div className="row">
                                <div className="col-md-6 call-button one-second">
                                    <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call<br/><small>(864)271-1149</small></button></a>
                                </div>
                                <div className="col-md-6 bottom-tag no-top-padding bulk-project one-second">
                                    <h2 className="project-managers">Let Speedway Packaging and Distribution be the answer for all of your questions!</h2>
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

module.exports = BulkComponent;
