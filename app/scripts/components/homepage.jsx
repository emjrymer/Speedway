var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');
var Carousel = require('./../components/carousel.jsx');
var Services = require('./../components/services.jsx');

var HomePageComponent = React.createClass({
  render: function(){
    return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row"></div>

                    <div className="cd-fixed-bg cd-bg-1 header-img">
                        <h1 className="header-h1">Celebrating 17 Years<br/><span className="second-row">of Success</span><br/></h1>
                        <div className="img-overlay"></div>
                    </div>

                    <div className="cd-fixed-bg cd-bg-2">
            		    <center>
                            <h1>Explore Speedway</h1>
                        </center>
                        <Services/>
                        <center>
                            <h1 className="speedway-is">Our Mission</h1>
                        </center>
            	    </div>

                    <div className="cd-fixed-bg cd-bg-4">
            		<center><div className="mission-header">
                        <h1>"Satisfy Our Customers</h1>
                        <h1>and Continuously Improve"</h1>
                        </div>
                     </center>
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
        );
    }
})

module.exports = HomePageComponent;
