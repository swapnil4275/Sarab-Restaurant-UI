
import { useState } from "react";

const menuItems = [
    {
        name: "Classic Burger",
        category: "Burger",
        price: 149,
        image: "/images/burger.jpg",
        description: "Juicy burger with fresh vegetables and special sauce."
    },
    {
        name: "Cheese Pizza",
        category: "Pizza",
        price: 249,
        image: "/images/pizza.jpg",
        description: "Freshly baked pizza loaded with delicious cheese."
    },
    {
        name: "Crispy Fries",
        category: "Fries",
        price: 99,
        image: "/images/fries.jpg",
        description: "Golden crispy fries served with special dip."
    },
    {
        name: "Creamy Pasta",
        category: "Pasta",
        price: 199,
        image: "/images/pasta.jpg",
        description: "Creamy pasta prepared with fresh ingredients."
    },
    {
        name: "Chocolate Dessert",
        category: "Dessert",
        price: 129,
        image: "/images/dessert.jpg",
        description: "Rich and delicious chocolate dessert."
    },
    {
        name: "Special Burger",
        category: "Burger",
        price: 189,
        image: "/images/burger.jpg",
        description: "Our special burger with extra cheese and toppings."
    }
];


function Menu() {

    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Burger",
        "Pizza",
        "Fries",
        "Pasta",
        "Dessert"
    ];

    const filteredItems =
        activeCategory === "All"
            ? menuItems
            : menuItems.filter(
                item => item.category === activeCategory
            );


    return (
        <section
            id="menu"
            className="section-padding bg-light"
        >

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        WHAT'S COOKING
                    </span>

                    <h2 className="fw-bold mt-2">
                        Our Delicious Menu
                    </h2>

                    <p className="text-muted">
                        Explore our favourite dishes.
                    </p>

                </div>


                {/* Category Buttons */}
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">

                    {categories.map(category => (

                        <button
                            key={category}
                            type="button"
                            className={
                                activeCategory === category
                                    ? "btn btn-danger rounded-pill px-4"
                                    : "btn btn-outline-danger rounded-pill px-4"
                            }
                            onClick={() =>
                                setActiveCategory(category)
                            }
                        >
                            {category}
                        </button>

                    ))}

                </div>


                {/* Menu Cards */}
                <div className="row g-4">

                    {filteredItems.map((item, index) => (

                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={index}
                        >

                            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden menu-card">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="card-img-top menu-image"
                                />

                                <div className="card-body d-flex flex-column">

                                    <div className="d-flex justify-content-between align-items-start">

                                        <h5 className="fw-bold">
                                            {item.name}
                                        </h5>

                                        <span className="text-danger fw-bold">
                                            ₹{item.price}
                                        </span>

                                    </div>

                                    <small className="text-danger mb-2">
                                        {item.category}
                                    </small>

                                    <p className="text-muted mb-0">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Menu;