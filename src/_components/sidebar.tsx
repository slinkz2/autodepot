"use client";
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Toyota from '~/pages/toyota';
import Mazda from '~/pages/mazda';
import Nissan from '~/pages/nissan';
import Honda from '~/pages/honda';
import { UserButton } from "@clerk/nextjs";

export default function Variations() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const linkStyle = {
        textDecoration: 'none',
        color: 'white', // Changed text color to white for better contrast
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        backgroundColor: 'transparent' // Made links transparent to show black background
    };

    const hoverStyle = {
        backgroundColor: '#333', // Darker gray for hover on black background
        color: '#4dabf7', // Brighter blue for better visibility
        transform: 'translateY(-2px)'
    };

    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'black' // Changed to black background
        }}>
            <BrowserRouter>
                <div style={{ flex: 1 }}>
                    <nav style={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '1rem 0',
                        backgroundColor: 'black' // Nav background to black
                    }}>
                        <ul style={{ 
                            display: 'flex', 
                            listStyle: 'none', 
                            gap: '2rem',
                            padding: 0,
                            margin: 0
                        }}>
                            {['toyota', 'mazda', 'nissan', 'honda'].map((brand) => (
                                <li key={brand}>
                                    <Link 
                                        to={`/${brand}`}
                                        style={{
                                            ...linkStyle,
                                            ...(hoveredLink === brand ? hoverStyle : {})
                                        }}
                                        onMouseEnter={() => setHoveredLink(brand)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                    >
                                        {brand.charAt(0).toUpperCase() + brand.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<div></div>} />
                        <Route path="/toyota" element={<Toyota />} />
                        <Route path="/mazda" element={<Mazda />} />
                        <Route path="/nissan" element={<Nissan />} />
                        <Route path="/honda" element={<Honda />} />
                    </Routes>
                </div>

                <footer style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    backgroundColor: 'black', // Footer background to black
                    borderTop: '1px solid #333' // Darker border for contrast
                }}>
                    <UserButton />
                </footer>
            </BrowserRouter>
        </div>
    );
}