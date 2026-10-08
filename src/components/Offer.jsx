
function Offer() {

    return (
        <section className="section-padding offer-section">

            <div className="container">

                <div className="row align-items-center g-4">

                    <div className="col-lg-7">

                        <span className="text-danger fw-semibold">
                            LIMITED TIME OFFER
                        </span>

                        <h2 className="fw-bold mt-2">
                            Get 20% Off On Your First Order
                        </h2>

                        <p className="text-muted">
                            Enjoy your favourite food at a special
                            price. Order now and make your moment
                            delicious.
                        </p>

                        <a
                            href="#menu"
                            className="btn btn-danger rounded-pill px-4"
                        >
                            Order Now
                        </a>

                    </div>

                    <div className="col-lg-5 text-center">

                        <div className="offer-badge mx-auto">
                            <span>20%</span>
                            <small>OFF</small>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Offer;