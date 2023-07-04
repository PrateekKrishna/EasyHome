import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const UpdateButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center text-blue-500 hover:text-blue-700 focus:outline-none"
      onClick={onClick}
    >
      <AiOutlineEdit className="w-5 h-5 mr-1" />
      Update
    </button>
  );
};

export default UpdateButton;
