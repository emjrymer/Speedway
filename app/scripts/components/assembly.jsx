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
                    <div className="col-xs-12 col-sm-12 col-md-12 product-button sr-call dark">
                        <div className="product-expand">
                           <h1 className="product-header"><a href="">Speedway</a></h1>
                           <p className="product-description"><small>Give Us A Call</small><br/><a href="tel:864-271-1149">864-271-1149</a></p>
                        </div>
                    </div>
                    <div className="cd-fixed-bg cd-bg-assembly header-img supporting-header">
                        <h1 className="header-h1 supporting-h1 assembly-header">Light Assembly</h1>
                        <center className="tape-center">
                            <p className="product-description-header shadow"><em>From start to finish our team fits<br/>components together to make sense of your time and budget.</em></p>
                        </center>

                        <div className="row light not">
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

                        <div className="row">
                            <div className="supporting-description assembly-descript">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-assembly-column">
                                    <div className="supporting-center-assembly">
                                        <h1 className="fade-in sup-context mobile">No job too big, no job too small, and no deadline too short!</h1>
                                    </div>
                                </div>
                               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 supporting-assembly-column">
                                   <div className="supporting-center-assembly">
                                       <p className="supporting-product-description fade-in larger-font sup-context top-padding-7 mobile">Let us help you make something bigger and better.  We love working together with our customers for a common purpose.  Let us accomplish your goals!</p>
                                   </div>
                               </div>
                            </div>
                        </div>

                        <div className="action assembly-action mobile">
                            <div className="row">
                                <div className="col-md-6 bottom-tag no-top-padding assembly-project">
                                    <h2 className="project-managers">Project Managers standing by now to discuss your needs. Call, text or email for pricing!</h2>
                                </div>
                                <div className="col-md-6 call-button a-call">
                                    <a href="tel:864-271-1149"><button className="btn btn-default btn-lg">Give Us A Call<br/><small>(864)271-1149</small></button></a>
                                </div>
                            </div>
                        </div>

                         <div className="mobile">
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
