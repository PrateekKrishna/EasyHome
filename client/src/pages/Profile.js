import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'btech10105.21@bitmesra.ac.in',
    phoneNumber: '+91 8787878787',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ligula consectetur, eleifend nisi sit amet, dapibus odio. Sed tincidunt eleifend tellus ut fermentum.',
    profilePicture: 'profilelogo.webp',
    additionalImage: 'facebook.svg',
  };

  return (
    <div className="bg-[#01040f] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className=" bg-gray-300 rounded shadow-lg p-8">
          <div className="flex flex-col items-center mb-4">
            <img src={user.profilePicture} alt="Profile" className="w-32 h-32 rounded-full mb-2" />
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phoneNumber}</p>
          </div>
          <p className="text-gray-700">{user.bio}</p>
          {/* <div className="mt-8">
            <img src={user.additionalImage} alt="Additional" className="w-full rounded-lg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
