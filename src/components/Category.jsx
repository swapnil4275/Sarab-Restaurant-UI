
const categories = [
    {
        title: "Burgers",
        image: "/images/burger.jpg",
        icon: "bi-egg-fried"
    },
    {
        title: "Pizza",
        image: "/images/pizza.jpg",
        icon: "bi-circle"
    },
    {
        title: "Fries",
        image: "/images/fries.jpg",
        icon: "bi-box"
    },
    {
        title: "Desserts",
        image: "/images/dessert.jpg",
        icon: "bi-cake2"
    }
];

function Category() {

    return (
        <section className="section-padding">

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        OUR CATEGORIES
                    </span>

                    <h2 className="fw-bold mt-2">
                        Browse By Category
                    </h2>

                    <p className="text-muted">
                        Choose your favourite food from our delicious
                        categories.
                    </p>

                </div>


                <div className="row g-4">

                    {categories.map((category, index) => (

                        <div
                            className="col-12 col-sm-6 col-lg-3"
                            key={index}
                        >

                            <div className="card category-card border-0 shadow-sm h-100 rounded-4 overflow-hidden">

                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="card-img-top category-image"
                                />

                                <div className="card-body text-center">

                                    <i
                                        className={`bi ${category.icon} text-danger fs-3`}
                                    ></i>

                                    <h5 className="fw-bold mt-2">
                                        {category.title}
                                    </h5>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Category;