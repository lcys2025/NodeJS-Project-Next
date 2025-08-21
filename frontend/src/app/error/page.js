export default function ErrorPage({ message, status, stack }) {
  return (
    <>
      <h1>{message}</h1>
      <h2>{status}</h2>
      <pre>{stack}</pre>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const message = query.message || 'An error occurred';
  const status = query.status || 500;
  const stack = query.stack || '';

  return {
    props: {
      message,
      status,
      stack,
    },
  };
}
