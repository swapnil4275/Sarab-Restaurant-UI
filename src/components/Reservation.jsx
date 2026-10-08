
function Reservation() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Reservation request submitted!");
    }

    return (
        <section
            id="reservation"
            className="section-padding reservation-section"
        >

            <div className="container">

                <div className="row g-4 align-items-center">

                    {/* Left */}
                    <div className="col-lg-4">

                        <span className="text-danger fw-semibold">
                            RESERVATION
                        </span>

                        <h2 className="fw-bold mt-2">
                            Book A Table
                        </h2>

                        <p className="text-muted">
                            Reserve your table and enjoy delicious food
                            with your family and friends.
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
                                        Location
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
                                            Phone
                                        </label>

                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            required
                                        />

                                    </div>


                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Date
                                        </label>

                                        <input
                                            type="date"
                                            className="form-control"
                                            required
                                        />

                                    </div>


                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Time
                                        </label>

                                        <input
                                            type="time"
                                            className="form-control"
                                            required
                                        />

                                    </div>


                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Guests
                                        </label>

                                        <select
                                            className="form-select"
                                            required
                                        >
                                            <option value="">
                                                Select Guests
                                            </option>
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3 Guests</option>
                                            <option>4 Guests</option>
                                            <option>5+ Guests</option>
                                        </select>

                                    </div>


                                    <div className="col-md-6">

                                        <label className="form-label">
                                            Occasion
                                        </label>

                                        <select className="form-select">

                                            <option>
                                                Select Occasion
                                            </option>

                                            <option>
                                                Birthday
                                            </option>

                                            <option>
                                                Anniversary
                                            </option>

                                            <option>
                                                Business
                                            </option>

                                            <option>
                                                Other
                                            </option>

                                        </select>

                                    </div>


                                    <div className="col-12">

                                        <label className="form-label">
                                            Message
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Any special request?"
                                        ></textarea>

                                    </div>


                                    <div className="col-12">

                                        <button
                                            type="submit"
                                            className="btn btn-danger rounded-pill px-4"
                                        >
                                            Book Table
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

export default Reservation;