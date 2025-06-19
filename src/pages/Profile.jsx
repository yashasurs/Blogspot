import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import service from '../appwrite/conf';
import authService from '../appwrite/auth';
import { setUserProfile, updateUserProfile, logout } from '../store/authSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const { userData, userProfile } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    location: ''
  });

  useEffect(() => {
    if (userData) {
      fetchUserProfile();
    }
  }, [userData]);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const profile = await service.getUserProfile(userData.$id);
      if (profile) {
        dispatch(setUserProfile(profile));
        setProfileData({
          name: profile.name || '',
          bio: profile.bio || '',
          location: profile.location || ''
        });
      } else {
        // Initialize with user data if no profile exists
        setProfileData({
          name: userData.name || '',
          bio: '',
          location: ''
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      console.log('Saving profile data:', profileData);
      console.log('User ID:', userData.$id);
      console.log('Existing userProfile:', userProfile);
      
      let updatedProfile;
      
      if (userProfile) {
        // Update existing profile
        console.log('Updating existing profile...');
        updatedProfile = await service.updateUserProfile(userData.$id, profileData);
      } else {
        // Create new profile
        console.log('Creating new profile...');
        updatedProfile = await service.createUserProfile(userData.$id, profileData);
      }
      
      console.log('Profile saved successfully:', updatedProfile);
      
      dispatch(updateUserProfile(updatedProfile));
      setIsEditing(false);
      
    } catch (error) {
      console.error('Error saving profile:', error);
      
      // More detailed error handling
      let errorMessage = 'Error saving profile. Please try again.';
      
      if (error.message) {
        errorMessage = `Error: ${error.message}`;
      } else if (error.code) {
        errorMessage = `Error (${error.code}): ${error.message || 'Unknown error'}`;
      }
      
      alert(errorMessage);
    } finally {
      setSaving(false);
    }
  };
  const handleLogout = async (source = 'unknown') => {
    try {
      console.log(`Logout triggered from: ${source}`);
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleCancel = () => {
    setProfileData({
      name: userProfile?.name || userData?.name || '',
      bio: userProfile?.bio || '',
      location: userProfile?.location || ''
    });
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            AuthApp
          </Link>
          <div className="space-x-4">
            <span className="text-gray-300">Welcome, {userData?.name}</span>   
                     <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleLogout('navigation');
              }}
              className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-black text-white px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mr-6">
                  <span className="text-black text-2xl font-bold">
                    {(profileData.name || userData?.name || 'U')[0].toUpperCase()}
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{profileData.name || userData?.name}</h1>
                  <p className="text-gray-300">{userData?.email}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            {isEditing ? (
              // Edit Mode
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Tell us about yourself"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your location"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">About</h3>
                  <p className="text-gray-600">
                    {profileData.bio || 'No bio added yet. Click "Edit Profile" to add information about yourself.'}
                  </p>
                </div>

                <div className="grid md:grid-cols-1 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Location</h3>
                    <p className="text-gray-600">
                      {profileData.location || 'No location specified'}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Account Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Email</span>
                      <p className="text-gray-900">{userData?.email}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Member Since</span>
                      <p className="text-gray-900">
                        {new Date(userData?.$createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>        
        {/* Account Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Account Actions</h3>
          <div className="space-y-4">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleLogout('account-actions');
              }}
              className="w-full md:w-auto px-6 py-2 bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
