import { FaPlus } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FetchedList = ({
  type,
  renderList,
  onItemClick,
  setListVisible,
  createItemDir,
  openInOtherTab,
}) => {
  const listRef = useRef();

  const handleOutsideClick = (e) => {
    if (listRef.current && !listRef.current.contains(e.target)) {
      setListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  return (
    <div
      ref={listRef}
      className="absolute bg-bgColor -bottom-40 left-0 w-full h-40 rounded-md shadow-lg overflow-scroll z-50"
    >
      {renderList.map((item, index) => {
        return (
          <div
            key={index}
            className="hover:bg-secondaryColor rounded-md w-full py-2 px-3 cursor-pointer"
            onClick={() => onItemClick(item)}
          >
            {type === 'meal' ? item?.mealName : item?.ingredientName}
          </div>
        );
      })}
      <Link
        target={openInOtherTab ? '_blank' : '_self'}
        to={createItemDir}
        className="hover:secondaryColor rounded-md w-full p-2 flex items-center gap-2"
      >
        <FaPlus className="text-xs" /> Add new {type}
      </Link>
    </div>
  );
};
export default FetchedList;
