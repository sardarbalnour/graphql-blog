import { useQuery } from "@apollo/client/react";
import { Avatar, Grid, Typography } from "@mui/material";

import { GET_AUTHORS_INFO } from "../../graphql/queries";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;

  console.log({ loading, data, error });

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0, 0, 0, 0.1)0px 4px 12px", borderRadius: 4 }}
    >
      {data.authors.map((author) => (
        <Grid xs={12} sx={{ padding: 2 }} key={author.id}>
          <a
            href={`/authors/${author.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );
}

export default Authors;
