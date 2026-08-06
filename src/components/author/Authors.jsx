import { useQuery } from "@apollo/client/react";

import { GET_AUTHORS_INFO } from "../../graphql/queries";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;

  console.log({ loading, data, error });
  
  return <div>Authors</div>;
}

export default Authors;
