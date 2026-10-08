
function Footer() {

    return (
        <footer className="footer-section">

            <div className="container">

                <div className="row g-4 py-5">

                    {/* About */}
                    <div className="col-12 col-md-6 col-lg-4">

                        <h4 className="fw-bold text-danger">
                            Sarab
                        </h4>

                        <p className="text-muted">
                            Delicious fast food made with fresh
                            ingredients and served with love.
                        </p>


                        <div className="d-flex gap-3">

                            <a
                                href="#"
                                className="social-link"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="#"
                                className="social-link"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                href="#"
                                className="social-link"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div className="col-6 col-md-3 col-lg-2">

                        <h6 className="fw-bold mb-3">
                            Quick Links
                        </h6>

                        <ul className="list-unstyled footer-links">

                            <li>
                                <a href="#home">Home</a>
                            </li>

                            <li>
                                <a href="#about">About</a>
                            </li>

                            <li>
                                <a href="#menu">Menu</a>
                            </li>

                            <li>
                                <a href="#reservation">
                                    Reservation
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="col-6 col-md-3 col-lg-3">

                        <h6 className="fw-bold mb-3">
                            Contact
                        </h6>

                        <p className="text-muted mb-2">
                            <i className="bi bi-telephone me-2"></i>
                            +91 98765 43210
                        </p>

                        <p className="text-muted mb-2">
                            <i className="bi bi-envelope me-2"></i>
                            hello@sarab.com
                        </p>

                        <p className="text-muted mb-0">
                            <i className="bi bi-geo-alt me-2"></i>
                            Kolhapur, Maharashtra
                        </p>

                    </div>


                    {/* Opening */}
                    <div className="col-12 col-lg-3">

                        <h6 className="fw-bold mb-3">
                            Opening Hours
                        </h6>

                        <p className="text-muted mb-1">
                            Monday - Friday
                        </p>

                        <p className="text-muted mb-1">
                            10:00 AM - 11:00 PM
                        </p>

                        <p className="text-muted mb-0">
                            Saturday - Sunday
                            <br />
                            10:00 AM - 12:00 AM
                        </p>

                    </div>

                </div>


                <hr />


                <div className="py-3 text-center">

                    <p className="text-muted mb-0">
                        © 2026 Sarab Restaurant. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;