var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var TapeComponent = React.createClass({
        render: function(){
            $('a').each(function() {
                if ($(this).prop('href') == window.location.href) {
                    $(this).addClass('current')
                }});
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row"></div>

                    <div className="cd-fixed-bg cd-bg-5 header-img supporting-header">
                        <center>
                        <h1 className="header-h1 supporting-h1">Tape</h1>
                        </center>
                        <center>
                        <p className="product-description-header"><em>Rewinders for all types of pressure and<br/>non-pressure sensitive materials on 3 inch<br/>cores.  Turn salvage product into money!</em></p>
                        </center>
                    </div>

                    <div className="cd-fixed-bg cd-bg-2">
                        <center>
                            <h1 className="supporting-center-h1">Explore Speedway</h1>
                        </center>
                        <div className="row">
                            <div className="supporting-description">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                            <video controls>
                              <source src="images/HY-BD.mp4" type="video/mp4" />
                              Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-right-column">
                        <center>
                            <p className="supporting-product-description">Speedway can rewind off-quality salvagable material by rewinding on all types of pressure sensitive and non-pressure sensitive materials on 3 inch cores.</p>
                            <p>_________________________________</p>
                            <h3 className="bold">Some Of Our Specifics</h3>
                            <p className="extra-letter-space">Our speed is 200m per minute, width is 1.6 M, max unwind OD is 800mm, max rewind OD for four shafts exchange is 150mm, and our max rewind OD for two shafts exchange is 280mm.</p>
                        </center>
                        </div>
                        </div>
                    </div>
                    <center>
                        <h1 className="speedway-is">Our Mission</h1>
                    </center>
                    </div>
                    <div className="cd-fixed-bg cd-bg-4">
                    <center><div className="mission-header">
                        <h1>Satisfy Our Customers</h1>
                        <h1>and Continuously Improve</h1>
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
    )
  }
})

module.exports = TapeComponent;
