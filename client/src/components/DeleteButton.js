import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center text-red-500 hover:text-red-700 focus:outline-none"
      onClick={onClick}
    >
      <AiOutlineDelete className="w-5 h-5 mr-1" />
      Delete
    </button>
  );
};

export default DeleteButton;
