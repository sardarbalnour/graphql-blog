import { useQuery } from "@apollo/client/react";

import { GET_BLOGS_INFO } from "../../graphql/queries";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, error });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;
  return <div>Blogs</div>;
}

export default Blogs;
