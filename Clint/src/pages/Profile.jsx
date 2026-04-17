import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import profileimg from '../Assets/profile.png';

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/login");
                    return;
                }

                const res = await axios.get("http://localhost:5000/api/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(res.data);

            } catch (err) {
                console.error("Failed to fetch user data:", err);

                // ✅ Token invalid / expired handle
                localStorage.removeItem("token");
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);



    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-title">Profile Page</h2>
             

                {user ? (
    <div style={{ marginTop: '15px', textAlign: 'center' }}>
        
        {/* ✅ Profile Image */}
        <img
            src={user.PhotoURL || profileimg}
            alt="Profile"
            style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px"
            }}
        />

        <h3>User Information</h3>
        <p><strong>Username:</strong> {user.Username}</p>
        <p><strong>Email:</strong> {user.Email}</p>

        <button
            style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
            onClick={() => {
                localStorage.removeItem("token");
                alert("You have been logged out.");
                navigate("/login");
            }}
        >
            Logout
        </button>
    </div>
) : (
    <p>Loading user data...</p>
)}
            </div>
        </div>
    );
};

export default Profile;