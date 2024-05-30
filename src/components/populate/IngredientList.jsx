import { FaPlus } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IngredientList = ({ renderList, onIngredientClick, setListVisible }) => {
  const ingredientListRef = useRef();

  const handleOutsideClick = (e) => {
    if (
      ingredientListRef.current &&
      !ingredientListRef.current.contains(e.target)
    ) {
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
      ref={ingredientListRef}
      className="absolute bg-white -bottom-40 left-0 w-full h-40 rounded-md shadow-lg overflow-scroll"
    >
      {renderList.map(({ ingredientName, ingredientId, ingredientType }) => (
        <div
          key={ingredientId}
          className="hover:bg-emerald-200 rounded-md w-full py-2 px-3 cursor-pointer"
          onClick={() =>
            onIngredientClick(ingredientName, ingredientId, ingredientType)
          }
        >
          {ingredientName}
        </div>
      ))}
      <Link
        target="blank"
        to="../"
        className="hover:bg-emerald-200 rounded-md w-full p-2 flex items-center gap-2"
      >
        <FaPlus className="text-xs" /> Add new ingredient
      </Link>
    </div>
  );
};
export default IngredientList;
