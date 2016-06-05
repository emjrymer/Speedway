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
                <Header/>
                <div className="container-fluid default">
                        <div className="row paragraph">
                            <div className="cd-fixed-bg cd-bg-1 header-img">
                                <h2>Tape</h2>
                                <div className="img-overlay-1"></div>
                            </div>
                            <div className="cd-scrolling-sm cd-color-2">
                        		<div className="cd-container">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                                      <ul>
                                          <li><h1 className="li_description">Width: 1.6 M</h1></li>
                                          <li><h1 className="li_description">Speed: 200m per Minute</h1></li>
                                          <li><h1 className="li_description">Max Unwind OD: 800mm</h1></li>
                                          <li><h1 className="li_description">Max Rewind OD: </h1></li>
                                             <ul>
                                                  <li><h1 className="li_description">4 shafts exchange 150mm</h1></li>
                                                  <li><h1 className="li_description">2 Shafts exchange 280mm</h1></li>
                                             </ul>
                                      </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox1">
                                        <video controls>
                                          <source src="images/HY-BD.mp4" type="video/mp4" />
                                          Your browser does not support HTML5 video.
                                        </video>
                                    </div>
                        		</div>
                        	</div>



                         </div>
                        <div className="row image-boxes">

                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 picbox2">
                            <img src="../app/images/Tape.png" alt="" />
                          </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = TapeComponent;
