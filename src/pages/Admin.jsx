import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <Link to="./meal/create">Create meal</Link>
      <Link to="./ingredient/create">Create ingredient</Link>
    </main>
  );
};
export default Admin;
