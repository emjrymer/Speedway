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

                    <div className="cd-fixed-bg cd-bg-1 header-img supporting-header">
                        <h1 className="header-h1 supporting-h1">Plastic Dry Bulk Services</h1>
                        <div className="img-overlay supporting-overlay"></div>
                    </div>

                    <div className="cd-fixed-bg cd-bg-2">
                        <center>
                            <h1>Explore Speedway</h1>
                        </center>
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                                <p>This is sample text</p>
                             <a href="#" className="paragraph-link">TestLink</a>
                             </div>

                           </div>
                         </div>
                        <div className="row image-boxes">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                            <img src="images/virgin_polypropylene.jpg" alt="" />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox2">
                            <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" />
                          </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = BulkComponent;
