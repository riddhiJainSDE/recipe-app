import React from 'react';

const Searchbar = ({
  type,
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form submission and page refresh
    // Handle search logic here
  };

  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="mb-4">
        <label
          htmlFor={name}
          className="text-white text-lg font-semibold"
        >
          Search for recipes
        </label>
      </div>
      <form onSubmit={handleSubmit}> {/* Ensure that form submission is handled */}
        <div className='relative w-full max-w-md'>
          <input
            type={type || "text"}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            required={required}
            className={`bg-black border border-gray-800
           text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block
             w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`}
          />
          {rightIcon && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer'>
              {rightIcon}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
