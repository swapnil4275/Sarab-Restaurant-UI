
function OpeningHours() {

    const hours = [
        ["Monday - Friday", "10:00 AM - 11:00 PM"],
        ["Saturday", "10:00 AM - 12:00 AM"],
        ["Sunday", "11:00 AM - 10:00 PM"]
    ];

    return (
        <section className="section-padding bg-light">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-12 col-md-8 col-lg-6">

                        <div className="card border-0 shadow-sm rounded-4 p-4">

                            <div className="text-center mb-4">

                                <span className="text-danger fw-semibold">
                                    OPENING HOURS
                                </span>

                                <h2 className="fw-bold mt-2">
                                    Visit Us
                                </h2>

                            </div>


                            {hours.map((item, index) => (

                                <div
                                    className="d-flex justify-content-between border-bottom py-3"
                                    key={index}
                                >

                                    <span className="fw-semibold">
                                        {item[0]}
                                    </span>

                                    <span className="text-muted">
                                        {item[1]}
                                    </span>

                                </div>

                            ))}


                            <div className="text-center mt-4">

                                <span className="badge bg-success-subtle text-success px-3 py-2">
                                    <i className="bi bi-circle-fill me-2"></i>
                                    We Are Open
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default OpeningHours;