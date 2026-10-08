
function About() {

    return (
        <section
            id="about"
            className="section-padding about-section"
        >

            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Image */}
                    <div className="col-lg-6">

                        <img
                            src="/images/food-1.jpg"
                            alt="Restaurant food"
                            className="img-fluid rounded-4 shadow-sm about-image"
                        />

                    </div>


                    {/* Content */}
                    <div className="col-lg-6">

                        <span className="text-danger fw-semibold">
                            OUR STORY
                        </span>

                        <h2 className="fw-bold mt-2 mb-3">
                            Food Made With Passion
                        </h2>

                        <p className="text-muted">
                            At Sarab, we believe that good food brings
                            people together. Our kitchen combines fresh
                            ingredients with delicious recipes to create
                            meals that everyone can enjoy.
                        </p>

                        <p className="text-muted">
                            From crispy burgers and tasty pizzas to
                            delicious desserts, every dish is prepared
                            with care and served fresh.
                        </p>


                        <div className="row g-3 mt-3">

                            <div className="col-6">
                                <div className="about-stat">
                                    <h4 className="text-danger fw-bold">
                                        10+
                                    </h4>
                                    <small className="text-muted">
                                        Years Experience
                                    </small>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="about-stat">
                                    <h4 className="text-danger fw-bold">
                                        50+
                                    </h4>
                                    <small className="text-muted">
                                        Food Items
                                    </small>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;