import { Link, Outlet } from "react-router-dom"

Link

export default function Products() {
    return (

        <>

            <div>
                <input type='search' placeholder="type here to search" />
            </div>

            <nav>

                {/* Do not include the slash for nested routes */}
                <Link to='FeaturedProducts'>Featured</Link>
                <Link to='NewProduct'>New Products</Link>
            </nav>

            {/* tells react where to render the child components */}
            <Outlet />
        </>
    )
}