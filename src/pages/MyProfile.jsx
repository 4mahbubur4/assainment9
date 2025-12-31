import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import image from '../assets/image.png'
import toast from 'react-hot-toast';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
    .then(() => {
      toast.success("Profile Updated Successfully");
      window.location.reload(); 
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-xl p-6">
        
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || image}
            alt="User"
            className="w-24 h-24 rounded-full mb-3"
          />

          <h2 className="text-xl font-semibold">
            {user?.displayName || "No Name Set"}
          </h2>

          <p className="text-gray-600">{user?.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="input input-bordered w-full mb-2"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full mb-3"
          />

          <button className="btn btn-primary w-full">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
