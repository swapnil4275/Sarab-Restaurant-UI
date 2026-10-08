
function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

            <div className="container">

                {/* Logo */}
                <a
                    className="navbar-brand d-flex flex-column"
                    href="#home"
                >
                    <span className="fw-bold text-danger fs-4">
                        Sarab
                    </span>

                    <small className="text-muted">
                        Fast Food Restaurant
                    </small>
                </a>


                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Navbar Content */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    {/* Menu */}
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                href="#home"
                            >
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#about"
                            >
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#menu"
                            >
                                Menu
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#chefs"
                            >
                                Chefs
                            </a>
                        </li>

                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>


                    {/* Right Side */}
                    <div className="d-lg-flex align-items-center gap-2">

                        <input
                            type="search"
                            className="form-control navbar-search mb-2 mb-lg-0"
                            placeholder="Search"
                        />

                        <a
                            href="#menu"
                            className="btn btn-danger rounded-pill px-4 order-btn"
                        >
                            Order Now
                        </a>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;