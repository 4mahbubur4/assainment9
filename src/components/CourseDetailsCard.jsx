import React from 'react';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import {
  FaStar,
  FaPlay,
  FaChalkboardTeacher,
  FaClock,
  FaCalendarAlt,
  FaUserFriends
} from 'react-icons/fa';

const notify = () => toast('You have Enroll this Course');

const CourseDetailsCard = ({ course }) => {

 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-8">

          {/* Left Content */}
          <div className="flex-1 space-y-5">
            <div className="badge badge-error text-white gap-2 font-semibold">
              <span className="animate-pulse">●</span> Live Course
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
              {course.skillName}
            </h1>

            <div className="flex items-center gap-3 text-sm">
              <span className="font-bold text-yellow-500 flex items-center gap-1">
                {course.rating} <FaStar />
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Category: {course.category}</span>
              <span className="text-gray-400">|</span>
              <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">
                Verified Provider
              </span>
            </div>

            <p className="text-gray-600 text-lg">
              {course.description}
              <br />
              <span className="text-sm text-gray-400">
                Instructor: {course.providerName}
              </span>
            </p>

            {/* Price & Action */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={notify}
                className="btn btn-warning btn-lg px-8 font-bold"
              >
                Enroll Now
              </button>

              <div>
                <p className="text-3xl font-extrabold">${course.price}</p>
                <p className="text-sm text-gray-400 line-through">
                  ${(course.price * 1.5).toFixed(0)}
                </p>
              </div>

              <div className="badge badge-accent badge-outline font-bold">
                HNY25 APPLIED
              </div>
            </div>

            <div className="flex gap-4 pt-4 text-sm">
              <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg text-green-700">
                <FaChalkboardTeacher /> Live Support
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg text-green-700">
                <FaClock /> Lifetime Access
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-[450px] shrink-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={course.image}
                alt={course.skillName}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                <FaPlay className="text-white text-3xl" />
                <p className="text-white font-bold mt-2">WATCH DEMO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="border-t p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Info icon={<FaCalendarAlt />} label="Batch Starts" value="Wed, 24 Jan" />
          <Info icon={<FaClock />} label="Live Class" value="Tue & Thu (8 PM)" />
          <Info
            icon={<FaUserFriends />}
            label="Seats Available"
            value={`${course.slotsAvailable} Seats Left`}
          />
          <Info label="Batch No" value="Batch 15" />
        </div>

      </div>
    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="text-orange-400 text-2xl">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 font-bold uppercase">{label}</p>
      <p className="text-sm font-bold">{value}</p>
    </div>
  </div>
);

export default CourseDetailsCard;
