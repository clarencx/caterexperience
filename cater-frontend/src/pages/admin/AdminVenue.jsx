import React, { useState, useEffect } from 'react';
import './AdminVenue.css';
import Sidebar from '../../components/Sidebar';
import { FaBell, FaFilter, FaSearch } from 'react-icons/fa';

function AdminVenue() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [searchTerm, setSearchTerm] = useState('');
    const [venueDesigns, setVenueDesigns] = useState([]);

    // Mock data for venue designs - in a real app, this would come from an API
    useEffect(() => {
        const mockVenueData = [
            {
                id: 1,
                client: "Daphne Alewyn",
                eventType: "Anniversary Celebration",
                schedule: "April 21, 2025 9:00AM-2:00PM",
                designStatus: "Pending Design",
                eventVenue: "Ron Pavilion - Banquet Room",
                theme: "Garden Fairy Theme"
            },
            {
                id: 2,
                client: "Daphne Alewyn",
                eventType: "Anniversary Celebration", 
                schedule: "April 21, 2025 9:00AM-2:00PM",
                designStatus: "Pending Design",
                eventVenue: "Ron Pavilion - Banquet Room",
                theme: "Garden Fairy Theme"
            },
            {
                id: 3,
                client: "Daphne Alewyn",
                eventType: "Anniversary Celebration",
                schedule: "April 21, 2025 9:00AM-2:00PM", 
                designStatus: "Pending Design",
                eventVenue: "Ron Pavilion - Banquet Room",
                theme: "Garden Fairy Theme"
            },
            {
                id: 4,
                client: "Daphne Alewyn",
                eventType: "Anniversary Celebration",
                schedule: "April 21, 2025 9:00AM-2:00PM",
                designStatus: "Pending Design", 
                eventVenue: "Ron Pavilion - Banquet Room",
                theme: "Garden Fairy Theme"
            }
        ];
        setVenueDesigns(mockVenueData);
    }, []);

    const filteredDesigns = venueDesigns.filter(design => {
        return (
            design.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
            design.eventType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            design.eventVenue.toLowerCase().includes(searchTerm.toLowerCase()) ||
            design.theme.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="dashboard-container">
            <Sidebar />

            <div className="main-content">
                <header className="topbar">
                    <div className="topbar-left"></div>
                    <div className="topbar-right">
                        <span className="user-name">
                            {user ? `${user.first_name} ${user.last_name}` : 'Guest'}
                        </span>
                        <FaBell className="notif-icon" />
                    </div>
                </header>

                <section className="venue-header">
                    <h3>Venue Designs</h3>
                    <div className="venue-header-actions">
                        <div className="filter-button">
                            <FaFilter />
                        </div>
                        <div className="venue-search-box">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                <section className="venue-designs-grid">
                    {filteredDesigns.map((design) => (
                        <div key={design.id} className="venue-card">
                            <div className="venue-card-content">
                                <div className="venue-info-row">
                                    <span className="venue-label">Client:</span>
                                    <span className="venue-value">{design.client}</span>
                                </div>
                                <div className="venue-info-row">
                                    <span className="venue-label">Event Type:</span>
                                    <span className="venue-value">{design.eventType}</span>
                                </div>
                                <div className="venue-info-row">
                                    <span className="venue-label">Schedule:</span>
                                    <span className="venue-value">{design.schedule}</span>
                                </div>
                                <div className="venue-info-row">
                                    <span className="venue-label">Design Status:</span>
                                    <span className="venue-status">{design.designStatus}</span>
                                </div>
                                <div className="venue-info-row">
                                    <span className="venue-label">Event Venue:</span>
                                    <span className="venue-value">{design.eventVenue}</span>
                                </div>
                                <div className="venue-info-row">
                                    <span className="venue-label">Theme:</span>
                                    <span className="venue-value">{design.theme}</span>
                                </div>
                                <button className="edit-design-btn">Edit 2D Design</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default AdminVenue;