var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Services = React.createClass({
    render: function(){
        return (
            <div className="row">

                <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-t">
                    <span id="surround">
                    <a href="#tape">
                    <div className="product-expand">
                    <span id="initial">
                       <h1 className="product-header">Tape</h1>
                       <p className="product-description">Rewinders for all types of pressure and non-pressure sensitive materials on 3 inch cores, turn salvage product into money.</p>
                       <img src="images/tape-icon-white.png"/>
                   </span>
                   <span id="onhover">
                       <h1 className="product-header">Tape</h1>
                       <p className="product-description">Rewinders for all types of pressure and non-pressure sensitive materials on 3 inch cores, turn salvage product into money.</p>
                       <img src="images/tape-icon.png"/>
                       </span>
                    </div>
                    </a>
                </span>
                </div>

                <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-o">
                <span id="surround">
                <a href="#contact">
                   <div className="product-expand">
                       <span id="initial">
                          <h1 className="product-header">Connect</h1>
                          <p className="product-description">Meet our quality team dedicated to providing excellent service in the community.</p>
                          <img width="55px" src="images/team-icon-white.png"/>
                       </span>
                       <span id="onhover">
                          <h1 className="product-header">Connect</h1>
                          <p className="product-description">Meet our quality team dedicated to providing excellent service in the community.</p>
                          <img width="55px" src="images/team-icon-black.png"/>
                      </span>
                  </div>
               </a>
               </span>
               </div>
               <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-b">
                   <span id="surround">
                   <a href="#bulk">
                   <div className="product-expand">
                       <span id="initial">
                           <h1 className="product-header">Plastic Dry Bulk Services</h1>
                           <p className="product-description">Drives your business forward with each and every shipment delivering your product safely and efficiently.</p>
                           <img width="60px" src="images/silo-white.png"/>
                       </span>
                       <span id="onhover">
                           <h1 className="product-header">Plastic Dry Bulk Services</h1>
                           <p className="product-description">Drives your business forward with each and every shipment delivering your product safely and efficiently.</p>
                           <img width="60px" src="images/silo-black.png"/>
                      </span>
                   </div>
                   </a>
                   </span>
              </div>
               <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-i">
                   <span id="surround">
                   <a href="#assembly">
                       <div className="product-expand">
                       <span id="initial">
                           <h1 className="product-header">Light Assembly</h1>
                           <p className="product-description">From start to finish our team fits components together to make sense of your time and budget.</p>
                           <img width="70px" src="images/li2-white.png"/>
                       </span>
                        <span id="onhover">
                             <h1 className="product-header">Light Assembly</h1>
                             <p className="product-description">From start to finish our team fits components together to make sense of your time and budget.</p>
                             <img width="70px" src="images/li2-black.png"/>
                       </span>
                       </div>
                   </a>
                   </span>
               </div>
               <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-c">
                   <span id="surround">
                   <a href="#copackaging">
                   <div className="product-expand">
                       <span id="initial">
                           <h1 className="product-header">Co Packaging</h1>
                           <p className="product-description">Manufacturing and packaging shelf-ready pruducts bringing convience and quality to your business.</p>
                           <img width="60px" src="images/copack-white.png"/>
                       </span>
                       <span id="onhover">
                           <h1 className="product-header">Co Packaging</h1>
                           <p className="product-description">Manufacturing and packaging shelf-ready pruducts bringing convience and quality to your business.</p>
                           <img width="60px" src="images/copack-black.png"/>
                       </span>
                       </div>
                   </a>
               </span>
               </div>
           <div className="col-xs-12 col-sm-6 col-lg-4 product-button sr-3">
               <span id="surround">
               <a href="#pl">
               <div className="product-expand">
               <span id="initial">
                   <h1 className="product-header">3PL</h1>
                   <p className="product-description">Actively coordinate your supply chain for business growth, cost savings, and one stop shop service.</p>
                   <img width="55px" src="images/wheeled-boxes-white.png"/>
               </span>
               <span id="onhover">
                   <h1 className="product-header">3PL</h1>
                   <p className="product-description">Actively coordinate your supply chain for business growth, cost savings, and one stop shop service.</p>
                   <img width="55px" src="images/wheeled-boxes-black.png"/>
               </span>
               </div>
               </a>
               </span>
           </div>
       </div>

      );
    }
})

module.exports = Services;
