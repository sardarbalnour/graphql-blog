import React from "react";
import { useQuery } from "@apollo/client/react";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { GET_AUTHORS_INFO } from "../../graphql/queries";

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;

  const { authors } = data;
  console.log({ loading, data, error });

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0, 0, 0, 0.1)0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid size={12} sx={{ padding: 2 }}>
            <Link
              to={`/authors/${author.slug}`}
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
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid size={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
