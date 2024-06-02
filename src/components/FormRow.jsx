import { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const FormRow = ({ name, type, placeholder, defaultValue }) => {
  const [open, setOpen] = useState(false);

  if (type === 'password') {
    return (
      <div className="relative">
        <input
          type={open === false ? 'password' : 'text'}
          name={name}
          id={name}
          defaultValue={defaultValue || ''}
          className="px-1 my-4 border-b border-textColor py-4 text-sm focus:outline-none focus:border-primaryColor focus:border-b-2 focus:shadow-md w-full"
          placeholder={placeholder}
        />
        <div className="absolute top-9 right-5">
          {open ? (
            <FaRegEye
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <input
      className="px-1 border-b border-textColor py-4 text-sm focus:outline-none focus:border-primaryColor focus:border-b-2 focus:shadow-md w-full"
      type={type}
      defaultValue={defaultValue || ''}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
};
export default FormRow;
