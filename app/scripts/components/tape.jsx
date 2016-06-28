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
                        <p className="product-description-header"><em>Just arrived: New WebTec Slitter<br/>making the highest quality BOPP packaging tape.</em></p>
                        </center>
                        <div className="row">
                        <div className="supporting-description">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                            <div className="fade-in sup-context left-20">
                              <iframe className="tape-video" src="https://www.youtube.com/embed/YjjD9dFHEWs" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-right-column">
                        <div className="supporting-center">
                            <h3 className="fade-in sup-context">We Buy Distressed Tape</h3>
                            <p className="fade-in sup-context">_________________________________</p>
                            <p className="supporting-product-description fade-in sup-context">Speedway can rewind inferior material<br/>for re-use into retail quality product contact us below for details</p>
                            <p className="supporting-product-description fade-in sup-context">Custom runs, quick turn around<br/>2” and 3” Clear or Tan; 50 yds, 100 yds, 150 yds Lenghts available<br/>waterbased Acrylic and Hot Melt Adhesive</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="action">
                        <div className="row">
                            <div className="col-md-6 bottom-tag no-top-padding">
                                <h2 className="project-managers">Stop wasting money<br/>and turn salvage product into profit!</h2>
                            </div>
                            <div className="col-md-6 call-button">
                                <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call<br/><small>(864)271-1149</small></button></a>
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
