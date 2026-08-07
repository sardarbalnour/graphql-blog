import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <h3>...Loading</h3>;
  if (error) return <h4>Something went wrong! {error.message}</h4>;
  console.log(data);

  const {
    author: { name, avatar, field, description },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ mt: 10 }}>
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography
            component="h3"
            variant="h5"
            sx={{ fontWeight: 700, mt: 4 }}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            sx={{ mt: 2, color: "text.secondary" }}
          >
            {field}
          </Typography>
        </Grid>
        <Grid size={12}>{description.html}</Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
