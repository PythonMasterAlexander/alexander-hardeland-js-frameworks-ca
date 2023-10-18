import { Helmet } from "react-helmet";
function NotFoundPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="If something on the webpage goes wrong then this not found page will be displayed to the user"
        />
        <title>Page not found</title>
      </Helmet>
      <h1>Sorry! This page was not found</h1>
    </>
  );
}
export default NotFoundPage;
