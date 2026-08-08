import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";

import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";

function BlogPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong! {error.message}</h4>;
  console.log({ loading, data, error });

  return <div>BlogPage</div>;
}

export default BlogPage;
