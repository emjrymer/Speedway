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
        <h1 className="celebrating">Celebrating<br/><span className="years">17</span><br/>Years of Success</h1>
        <div className="img-overlay-1"></div>
    </div>

    <div className="cd-fixed-bg cd-bg-2">
		<center>
            <h1>Explore Speedway</h1>
            </center>
        <Services />
        <center>
        <h1 className="speedway-is">Speedway is..</h1>
        </center>
	</div>

    <div className="cd-fixed-bg cd-bg-1">
		<center>
            <h1 className="middle-explore">Explore Speedway</h1>
            </center>
	</div>

        <div>
            <Footer/>
      </div>
       </div>
       </div>
    );
  }
})

module.exports = HomePageComponent;
