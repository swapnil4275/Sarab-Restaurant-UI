
const feedback = [
    {
        name: "Amit",
        image: "/images/chef-1.jpg",
        text: "Amazing food and excellent service. The burger was really delicious."
    },
    {
        name: "Sneha",
        image: "/images/chef-2.jpg",
        text: "Loved the ambience and the food quality. Definitely coming again."
    },
    {
        name: "Rahul",
        image: "/images/chef-3.jpg",
        text: "Fresh food, good portions and very friendly staff."
    }
];

function Feedback() {

    return (
        <section className="section-padding">

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        CUSTOMER FEEDBACK
                    </span>

                    <h2 className="fw-bold mt-2">
                        What Our Customers Say
                    </h2>

                </div>


                <div className="row g-4">

                    {feedback.map((item, index) => (

                        <div
                            className="col-12 col-md-4"
                            key={index}
                        >

                            <div className="card feedback-card border-0 shadow-sm rounded-4 h-100">

                                <div className="card-body d-flex flex-column">

                                    <div className="text-danger mb-3">
                                        ★★★★★
                                    </div>

                                    <p className="text-muted feedback-text flex-grow-1">
                                        "{item.text}"
                                    </p>

                                    <div className="d-flex align-items-center mt-3">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="feedback-image me-3"
                                        />

                                        <div>
                                            <h6 className="fw-bold mb-0">
                                                {item.name}
                                            </h6>

                                            <small className="text-muted">
                                                Happy Customer
                                            </small>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Feedback;