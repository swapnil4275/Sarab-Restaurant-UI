
function Home() {

    return (
        <section
            id="home"
            className="hero-section"
        >

            <div className="container">

                <div className="row align-items-center min-vh-75">

                    {/* Text */}
                    <div className="col-lg-6 text-center text-lg-start">

                        <span className="badge bg-danger-subtle text-danger px-3 py-2 mb-3">
                            Welcome to Sarab
                        </span>

                        <h1 className="display-4 fw-bold mb-3">
                            Delicious Fast Food
                            <span className="text-danger d-block">
                                for Every Moment
                            </span>
                        </h1>

                        <p className="lead text-muted mb-4">
                            Fresh ingredients, delicious flavours and
                            unforgettable food made specially for you.
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">

                            <a
                                href="#menu"
                                className="btn btn-danger btn-lg rounded-pill px-4"
                            >
                                Explore Menu
                            </a>

                            <a
                                href="#reservation"
                                className="btn btn-outline-danger btn-lg rounded-pill px-4"
                            >
                                Book A Table
                            </a>

                        </div>

                    </div>


                    {/* Image */}
                    <div className="col-lg-6 mt-5 mt-lg-0">

                        <div className="hero-image-wrapper">

                            <img
                                src="/images/hero.jpg"
                                alt="Delicious food"
                                className="img-fluid rounded-4 hero-image"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Home;