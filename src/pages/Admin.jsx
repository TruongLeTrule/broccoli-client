import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <Link to="./create-meal">Create meal</Link>
      <Link to="./create-ingredient">Create ingredient</Link>
    </main>
  );
};
export default Admin;
