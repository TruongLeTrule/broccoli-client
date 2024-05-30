const SubmitBtn = ({ title, onClick }) => {
  return (
    <button
      type="button"
      className="block mt-6 mx-auto cursor-pointer w-24 h-12 bg-emerald-400 text-white rounded-md"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SubmitBtn;
