var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Footer = React.createClass({
  render: function(){
    return (
      <div className='footer'>
          <div className="row">
            <div className="footer-background">
                <div className="row footer-wrapper">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" id="contact">
                        <h4>Get in Touch</h4>
                         <form action="https://formspree.io/emjwivell@gmail.com" method="POST">
                             <div className="form-group InputName">
                                 <label className="InputName">Name</label>
                                 <input type="text" className="form-control InputName" placeholder="i.e. - John Smith" name="Name" />
                             </div>
                             <div className="form-group InputCompany">
                                 <label className="InputCompany">Company</label>
                                 <input type="text" className="form-control InputCompany" placeholder="i.e. - ABC Inc." name="Company" />
                             </div>
                             <div className="form-group InputEmail">
                                 <label className="InputEmail">Email address</label>
                                 <input type="email" name="_replyto" className="form-control InputEmail" placeholder="i.e. - JohnSmith@gmail.com" />
                            </div>
                            <div className="form-group InputPhone">
                                <label className="InputPhone">Phone</label>
                                <input type="tel" name="Phone" className="form-control InputPhone" placeholder="i.e. - (555) 867-5309" />
                           </div>
                           <div className="form-group InputMessage">
                               <label className="InputMessage">Message</label>
                               <input type="text" name="Message" className="form-control InputMessage" placeholder="i.e. - Pricing info request." />
                          </div>
                            <input type="hidden" name="_next" value="/" />
                            <input type="hidden" name="_subject" value="Cusomter Request from Website" />
                            <button type="submit" className="btn btn-default submit-button">Submit</button>
                        </form>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-left-right-20">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499157.6700034495!2d-83.51045443496618!3d33.903601326164065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582bd673e7e323%3A0xc666b001e6b56b9d!2sSpeedway+Packaging+and+Distribution!5e0!3m2!1sen!2sus!4v1467652780308" width="100%" height="318" frameBorder="0" allowFullScreen></iframe>
                    </div>
                  </div>
                <div className="copyright cr-second">
                    <center className="cr">
                        <span>&copy; 2016 Speedway Packaging and Distribution | <a href="http://emilywivell.com" target="_blank">emilywivell.com</a></span>
                    </center>
                </div>
            </div>
        </div>
    </div>
    );
  }
});


module.exports = Footer;
