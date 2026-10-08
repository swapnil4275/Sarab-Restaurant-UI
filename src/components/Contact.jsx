
function Contact() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Message sent successfully!");
    }

    return (
        <section
            id="contact"
            className="section-padding contact-section"
        >

            <div className="container">

                <div className="row g-4 align-items-center">

                    {/* Left */}
                    <div className="col-lg-4">

                        <span className="text-danger fw-semibold">
                            GET IN TOUCH
                        </span>

                        <h2 className="fw-bold mt-2">
                            Contact Us
                        </h2>

                        <p className="text-muted">
                            Have a question or want to know more?
                            Get in touch with our team.
                        </p>


                        <div className="mt-4">

                            <div className="d-flex mb-3">

                                <i className="bi bi-telephone text-danger fs-4 me-3"></i>

                                <div>
                                    <small className="text-muted">
                                        Phone
                                    </small>

                                    <p className="fw-semibold mb-0">
                                        +91 98765 43210
                                    </p>
                                </div>

                            </div>


                            <div className="d-flex mb-3">

                                <i className="bi bi-envelope text-danger fs-4 me-3"></i>

                                <div>
                                    <small className="text-muted">
                                        Email
                                    </small>

                                    <p className="fw-semibold mb-0">
                                        hello@sarab.com
                                    </p>
                                </div>

                            </div>


                            <div className="d-flex">

                                <i className="bi bi-geo-alt text-danger fs-4 me-3"></i>

                                <div>
                                    <small className="text-muted">
                                        Address
                                    </small>

                                    <p className="fw-semibold mb-0">
                                        Main Street, Kolhapur
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Form */}
                    <div className="col-lg-8">

                        <div className="card border-0 shadow-sm rounded-4 p-4">

                            <form onSubmit={handleSubmit}>

                                <div className="row g-3">

                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />

                                    </div>


                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                            required
                                        />

                                    </div>


                                    <div className="col-12">

                                        <label className="form-label">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            required
                                        />

                                    </div>


                                    <div className="col-12">

                                        <label className="form-label">
                                            Message
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your Message"
                                            required
                                        ></textarea>

                                    </div>


                                    <div className="col-12">

                                        <button
                                            type="submit"
                                            className="btn btn-danger rounded-pill px-4"
                                        >
                                            Send Message
                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;