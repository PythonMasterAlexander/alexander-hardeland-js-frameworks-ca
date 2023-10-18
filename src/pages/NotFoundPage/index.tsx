import { Helmet } from "react-helmet";
function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Hello from the not Found page</title>
      </Helmet>
      <h1>Sorry! This page was not found</h1>
    </>
  );
}
export default NotFoundPage;
