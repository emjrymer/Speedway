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
                <div className="row"></div>
                    <div className="cd-fixed-bg cd-bg-bulk header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 bulk-header">Plastic Dry Bulk Services</h1>
                            <center>
                                <p className="product-description-header"><em>Drives your business forward with each and<br/>every shipment delivering your product safely and efficiently.</em></p>
                        </center>
                        <div className="row">
                            <div className="supporting-description">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <p>Our goal is to ensure our customers have the best possible service.  For years we’ve provided bulk logistics solutions for customers. </p>
                                 <ul>
                                     <li><h1 className="li_description">Railcar Box Offs</h1></li>
                                     <li><h1 className="li_description">Sea Container Offloading</h1></li>
                                     <li><h1 className="li_description">Dry Bulk Container Service</h1></li>
                                     <li><h1 className="li_description">Super Sacks or Bags to Tankers</h1></li>
                                     <li><h1 className="li_description">Silo to Tankers Service</h1></li>
                                     <li><h1 className="li_description">Warehouse Storage</h1></li>
                                 </ul>
                               </div>
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <img src="../dist/images/drybulk-cropped.jpg"/>
                             </div>
                            </div>
                           </div>

                         <div>
                    <Footer/>
                </div>
                <div className="copyright">
                    <center>
                        <span> &copy; 2016 <a href="http://emilywivell.com" target="_blank">Speedway Packaging and Distribution</a></span>
                    </center>
                </div>
            </div>
        </div>
    </div>
        )
    }
})

module.exports = BulkComponent;
