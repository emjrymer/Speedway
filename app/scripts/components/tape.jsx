var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var TapeComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cd-fixed-bg cd-bg-5 header-img supporting-header">
                        <center className="tape-center">
                        <h1 className="header-h1 supporting-h1">Tape</h1>
                        </center>
                        <center className="tape-center">
                        <p className="product-description-header"><em>Rewinders for all types of pressure and non-pressure<br/>sensitive materials on 3 inch cores.  Turn salvage product into money!</em></p>
                        </center>
                        <div className="row">
                        <div className="supporting-description">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                            <video controls className="fade-in sup-context">
                              <source  src="images/HY-BD.mp4" type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-right-column">
                        <center className="supporting-center">
                            <p className="supporting-product-description fade-in sup-context">Speedway can rewind off-quality salvagable material by rewinding on all types of pressure sensitive and non-pressure sensitive materials on 3 inch cores.</p>
                            <p className="fade-in sup-context">_________________________________</p>
                            <h3 className="bold fade-in sup-context">Some Of Our Specifics</h3>
                            <p className="extra-letter-space fade-in sup-context">Our speed is 200m per minute, width is 1.6 M, max unwind OD is 800mm, max rewind OD for four shafts exchange is 150mm, and our max rewind OD for two shafts exchange is 280mm.</p>
                        </center>
                        </div>
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

module.exports = TapeComponent;
