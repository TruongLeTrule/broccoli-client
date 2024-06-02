import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  const resolveErrorMsg = () => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) return 'Page not found';
      if (error.status === 401) return 'You not authorized to access this page';
      return 'Something went wrong';
    }
  };

  return (
    <main className="h-screen flex items-center justify-center flex-col bg-secondaryColor">
      <h1 className="text-3xl font-medium">{error.status}</h1>
      <h1 className="text-3xl font-medium">{resolveErrorMsg()}</h1>
    </main>
  );
};
export default Error;
