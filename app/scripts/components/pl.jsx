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
                <div>
                <Header/>
                </div>
                <div className="container-fluid default">
                    <div className="row paragraph">
                        <div className="cd-fixed-bg cd-bg-1 header-img supporting-header">
                            <h1 className="header-h1 supporting-h1">3PL</h1>
                            <div className="img-overlay supporting-overlay"></div>
                        </div>

                           <div className="col-xs-12">
                             <div className="col-md-6">
                                 <p>This is sample text</p>
                             </div>
                             <div className="col-md-6">
                                 <p>This is sample text</p>
                             </div>
                           </div>
                         </div>
                        <div className="row image-boxes">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                            <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" />
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

module.exports = PlComponent;
