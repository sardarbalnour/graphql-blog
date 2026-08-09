import { useQuery } from "@apollo/client/react";

import { GET_POST_COMMENTS } from "../../graphql/queries";

function Comment({ slug }) {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  console.log({ data, loading, error });
  return <div>Comment</div>;
}

export default Comment;
