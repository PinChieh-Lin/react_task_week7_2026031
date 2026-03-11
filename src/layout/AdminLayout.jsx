import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <>
            <header><ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/product">後台產品列表</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin/order">後台訂單列表</Link>
                </li>
            </ul></header >
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2026 我的網站</p>
            </footer>
        </>
    )
}
export default AdminLayout;