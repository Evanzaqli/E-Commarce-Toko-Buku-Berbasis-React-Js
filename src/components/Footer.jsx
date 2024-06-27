import React from 'react';
import envelopeImage from './img/envelope-outline.svg';
import { Phone,MapPin } from 'react-feather';


function Footer() {
  return (
    <footer className="footer-section">
      <div className="container relative">
      <div className="Buku">
           
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src={envelopeImage} alt="Envelope" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-auto">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-6">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">Literary Loom<span>.</span></a>
            </div>
            <p className="mb-4">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.
            </p>

            <ul className="list-unstyled custom-social">
              <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
              <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="row links-wrap">
              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <h4><a >Quick Links</a></h4>
                  <li><a href="/About">About Us</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <h4><a >More information</a></h4>
                  <li><a href="#"><Phone size={15}/> +62 822-6724-7423</a></li>
                  <li><a href='https://maps.app.goo.gl/jZWMNUcHpdjgPMrP8'><MapPin size={15}/>Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by 
                <a href=""> IF03.co</a> Distributed By 
                <a href="">CodeCrafters</a>  {/* License information: https://untree.co/license/ */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
