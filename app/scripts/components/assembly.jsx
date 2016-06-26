var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Footer = require('./../components/footer.jsx');
var Header = require('./../components/header.jsx');

var AssemblyComponent = React.createClass({
    render: function(){
        return (
            <div>
            <div><Header/></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="cd-fixed-bg cd-bg-assembly header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 assembly-header">Light Assembly</h1>
                        <center className="tape-center">
                            <p className="product-description-header"><em>From start to finish our team fits<br/>components together to make sense of your time and budget.</em></p>
                        </center>

                        <div className="row">
                            <div className="supporting-description assembly-descript">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-assembly-column">
                                    <center className="supporting-center-assembly">
                                        <p className="supporting-product-description fade-in sup-context">As part of the light assembly service, Speedway Packaging and Distribution's vision for a job well done is extended from our standard of excellence.</p>
                                        <p className="fade-in sup-context">_________________________________</p>

                                    </center>
                                </div>
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-assembly-column">
                                   <center className="supporting-center-assembly">
                                       <p className="supporting-product-description fade-in sup-context">Let us help you make something bigger and better.  We love working together with our customers for a common purpose, to accomplish their goals!</p>
                                       <p className="fade-in sup-context">_________________________________</p>
                                   </center>
                               </div>
                            </div>
                        </div>
                        <div className="row dark">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="img-responsive middle-border" src="images/assembly-white.jpg"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="img-responsive middle-border" src="images/assembly_2-white.jpg"/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <img className="img-responsive middle-border" src="images/assembly3-white.jpg"/>
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

module.exports = AssemblyComponent;
