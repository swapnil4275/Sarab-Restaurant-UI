
const chefs = [
    {
        name: "Chef Arjun",
        role: "Head Chef",
        image: "/images/chef-1.jpg"
    },
    {
        name: "Chef Rahul",
        role: "Sous Chef",
        image: "/images/chef-2.jpg"
    },
    {
        name: "Chef Neha",
        role: "Pastry Chef",
        image: "/images/chef-3.jpg"
    }
];

function Chefs() {

    return (
        <section
            id="chefs"
            className="section-padding"
        >

            <div className="container">

                <div className="section-heading text-center mb-5">

                    <span className="text-danger fw-semibold">
                        OUR TEAM
                    </span>

                    <h2 className="fw-bold mt-2">
                        Meet Our Expert Chefs
                    </h2>

                </div>


                <div className="row g-4">

                    {chefs.map((chef, index) => (

                        <div
                            className="col-12 col-md-4"
                            key={index}
                        >

                            <div className="card chef-card border-0 shadow-sm rounded-4 overflow-hidden">

                                <img
                                    src={chef.image}
                                    alt={chef.name}
                                    className="chef-image"
                                />

                                <div className="card-body text-center">

                                    <h5 className="fw-bold mb-1">
                                        {chef.name}
                                    </h5>

                                    <p className="text-danger mb-0">
                                        {chef.role}
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

export default Chefs;