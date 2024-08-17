import useRouteError from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center gap-5 flex-col text-center">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry....an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
