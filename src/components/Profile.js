import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load profile data from localStorage when the component mounts
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Save profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {profile.name || 'Not provided'}</p>
          <p><strong>Email:</strong> {profile.email || 'Not provided'}</p>
          <p><strong>Phone:</strong> {profile.phone || 'Not provided'}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
