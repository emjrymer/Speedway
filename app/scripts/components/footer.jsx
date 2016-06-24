var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Footer = React.createClass({
  render: function(){
    return (
      <div className='footer'>
          <div className="row">
            <div className="footer-background">

                    <div className="col-md-6" id="contact">
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
                        <input type="hidden" name="_next" value="dist/index.html" />
                        <input type="hidden" name="_subject" value="New Customer!" />
                        <button type="submit" className="btn btn-default submit-button">Submit</button>
                    </form>
                    </div>
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13094.168077022532!2d-82.2420914!3d34.8677333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc666b001e6b56b9d!2sSpeedway+Packaging+and+Distribution!5e0!3m2!1sen!2sus!4v1466726640614" width="100%" height="318" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="copyright cr-second">
                    <center>
                        <span> Copyright &copy; 2016 Speedway Packaging and Distribution | <a href="http://emilywivell.com" target="_blank">emilywivell.com</a></span>
                    </center>
                </div>
            </div>
        </div>
    </div>
    );
  }
});


module.exports = Footer;
