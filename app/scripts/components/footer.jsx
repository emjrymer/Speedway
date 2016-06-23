var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Footer = React.createClass({
  render: function(){
    return (
      <div className='footer'>
          <div className="footer-filler col-md-6">
              <p>Give us a Call! <a href="tel:864-271-1149"><strong> 864-271-1149</strong></a></p>
          </div>
          <div className="address col-md-6">
            <a target="_blank" href="https://www.google.com/maps/place/Speedway+Packaging+and+Distribution/@34.8677333,-82.2420914,15z/data=!4m5!3m4!1s0x0:0xc666b001e6b56b9d!8m2!3d34.8677333!4d-82.2420914">
             <address>
                  1221B S. Batesville Rd.<br/>
                  Greer, SC 29681
            </address>
            </a>
          </div>
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

                <div className="copyright cr-second">
                    <center>
                        <span> Copyright &copy; 2016 Speedway Packaging and Distribution | <a href="http://emilywivell.com" target="_blank">emilywivell.com</a></span>
                    </center>
                </div>
            </div>
        </div>
    );
  }
});


module.exports = Footer;
