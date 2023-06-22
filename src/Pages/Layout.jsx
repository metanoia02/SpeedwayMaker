import { Outlet, Link } from 'react-router-dom'
import React, { useState } from 'react'

const Layout = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true)
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
    const handlePrint = () => window.print()

    return (
        <>
            <nav
                className="navbar navbar-dark bg-dark navbar-expand-lg d-print-none sticky-top"
                style={{ paddingLeft: '1rem' }}
            >
                <a
                    className="navbar-brand text-info font-weight-bolder"
                    href="/"
                >
                    <span className="d-print-none">
                        Speedway Programme Maker
                    </span>
                </a>
                <button
                    className="custom-toggler navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`${
                        isNavCollapsed ? 'collapse' : ''
                    } navbar-collapse`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/programme">
                                Programme
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                onClick={handlePrint}
                            >
                                Print
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout
