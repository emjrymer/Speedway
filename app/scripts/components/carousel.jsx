var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var Carousel = React.createClass({
  render: function(){
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
           <div className="carousel-inner" role="listbox">
             <div className="item active slide1">
             <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" className="" />
            </div>

            <div className="item slide2">
            <img src="http://tytca.com/wp-content/uploads/2015/03/Warehouse_Indoor.jpg" alt="" className="" />
            </div>

            <div className="item slide3">
            <img src="https://www.afwonline.com/about-us/community/images/ProjectCURE_Warehouse.jpg" alt="" className="image-3" />
            </div>

            <div className="item slide4">
              <img src="http://www.goglo.net/images/fp-rs-images-376x200/Warehouse_and_Cargo_Insurance.jpg" alt="" className="image-4" />
            </div>
          </div>

           <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
      );
    }
})

module.exports = Carousel;
