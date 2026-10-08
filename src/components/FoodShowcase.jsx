
const foods = [
    {
        image: "/images/food-1.jpg",
        title: "Fresh Burger"
    },
    {
        image: "/images/food-2.jpg",
        title: "Cheesy Pizza"
    },
    {
        image: "/images/food-3.jpg",
        title: "Delicious Dessert"
    }
];

function FoodShowcase() {

    return (
        <section className="section-padding">

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        FOOD SHOWCASE
                    </span>

                    <h2 className="fw-bold mt-2">
                        Taste The Difference
                    </h2>

                </div>


                <div className="row g-3">

                    {foods.map((food, index) => (

                        <div
                            className="col-12 col-md-4"
                            key={index}
                        >

                            <div className="food-showcase-card position-relative overflow-hidden rounded-4">

                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="img-fluid w-100 showcase-image"
                                />

                                <div className="showcase-caption">

                                    <h5 className="text-white fw-bold mb-0">
                                        {food.title}
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

export default FoodShowcase;