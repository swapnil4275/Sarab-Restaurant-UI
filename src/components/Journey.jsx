
function Journey() {

    const journey = [
        {
            year: "2015",
            title: "Our Beginning",
            text: "Sarab started with a simple idea of serving delicious food."
        },
        {
            year: "2019",
            title: "Growing Together",
            text: "Our team and menu continued to grow with customer love."
        },
        {
            year: "2025",
            title: "Today",
            text: "We continue to serve fresh and delicious food every day."
        }
    ];

    return (
        <section className="section-padding bg-light">

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        OUR JOURNEY
                    </span>

                    <h2 className="fw-bold mt-2">
                        A Story Full Of Flavour
                    </h2>

                </div>


                <div className="row g-4">

                    {journey.map((item, index) => (

                        <div
                            className="col-12 col-md-4"
                            key={index}
                        >

                            <div className="journey-card text-center h-100">

                                <span className="journey-year">
                                    {item.year}
                                </span>

                                <h5 className="fw-bold mt-3">
                                    {item.title}
                                </h5>

                                <p className="text-muted mb-0">
                                    {item.text}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Journey;