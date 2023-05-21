import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="react-upload/">Home</Link>
          </li>
          <li>
            <Link to="react-upload/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="react-upload/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;