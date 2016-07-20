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
                    <div className="col-xs-12 col-sm-12 col-md-12 product-button sr-call dark">
                        <div className="product-expand">
                           <h1 className="product-header"><a href="/">Speedway</a></h1>
                           <p className="product-description"><small>Give Us A Call</small><br/><a href="tel:864-271-1149">864-271-1149</a></p>
                        </div>
                    </div>
                    <div className="cd-fixed-bg cd-bg-5 header-img supporting-header">
                        <center className="tape-center">
                            <h1 className="header-h1 supporting-h1">Tape</h1>
                        </center>
                        <center className="tape-center">
                            <p className="product-description-header"><em>Just arrived: New WebTec Slitter<br/>making the highest quality BOPP packaging tape.</em></p>
                        </center>
                        <div className="row">
                            <div className="supporting-description side-padding">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                                    <div className="fade-in sup-context video-container">
                                      <iframe className="tape-video" src="https://www.youtube.com/embed/YjjD9dFHEWs" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-right-column no-top-padding no-padding-bottom">
                                    <div className="no-padding-bottom supporting-center padding-top-20">
                                        <h3 className="fade-in sup-context margin-top-6 mobile">Speedway has rewind capacity available to turn material into a valuable resource custom made to your specifications.</h3>
                                        <p className="fade-in sup-context hide">_________________________________</p>
                                        <p className="supporting-product-description fade-in sup-context mobile m1024 smaller-font">Custom runs, quick turn around<br/>48mm and 72mm Clear or Tan<br/>50 yds, 100 yds, 150 yds Lenghts available<br/>Waterbased Acrylic and Hot Melt Adhesive<br/>Speedway can rewind material<br/>for re-use into retail quality product contact us below for details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="action tape-action-container mobile">
                            <div className="row">
                                <div className="col-md-6 bottom-tag no-top-padding">
                                    <h2 className="project-managers tape-action">Exceed customer’s expectations with high quality BOPP acrylic and hotmelt packaging tape made to your custom specifications today.</h2>
                                </div>
                                <div className="col-md-6 call-button tape-call-button">
                                    <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call<br/><small>(864)271-1149</small></button></a>
                                </div>
                            </div>
                        </div>
                        <div className='mobile'>
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
