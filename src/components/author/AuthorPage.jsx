import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../../graphql/queries";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <h3>...Loading</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;
  console.log(data);

  return <div>AuthorPage</div>;
}

export default AuthorPage;
