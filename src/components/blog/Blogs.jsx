import { useQuery } from "@apollo/client/react";
import { Grid } from "@mui/material";

import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  // console.log({ loading, data, error });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
