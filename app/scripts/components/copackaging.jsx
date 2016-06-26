var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var CopackagingComponent = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div className="container-fluid default">
                        <div className="row paragraph">
                           <div className="col-xs-12">
                             <h2>Co Packaging</h2>
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
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = CopackagingComponent;
