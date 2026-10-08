
const news = [
    {
        image: "/images/news-1.jpg",
        date: "05 Sep 2026",
        title: "5 Reasons To Love Our Burgers",
        text: "Discover what makes our burgers special and delicious."
    },
    {
        image: "/images/news-2.jpg",
        date: "28 Aug 2026",
        title: "Fresh Ingredients Every Day",
        text: "We believe fresh ingredients make every dish better."
    },
    {
        image: "/images/news-3.jpg",
        date: "20 Aug 2026",
        title: "A Perfect Meal For Every Moment",
        text: "Explore our favourite dishes for every occasion."
    }
];

function News() {

    return (
        <section className="section-padding bg-light">

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        NEWS & UPDATES
                    </span>

                    <h2 className="fw-bold mt-2">
                        From Our Kitchen
                    </h2>

                </div>


                <div className="row g-4">

                    {news.map((item, index) => (

                        <div
                            className="col-12 col-md-4"
                            key={index}
                        >

                            <article className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="news-image"
                                />

                                <div className="card-body">

                                    <small className="text-danger">
                                        {item.date}
                                    </small>

                                    <h5 className="fw-bold mt-2">
                                        {item.title}
                                    </h5>

                                    <p className="text-muted">
                                        {item.text}
                                    </p>

                                    <a
                                        href="#contact"
                                        className="text-danger fw-semibold text-decoration-none"
                                    >
                                        Read More
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </a>

                                </div>

                            </article>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default News;