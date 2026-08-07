import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { Avatar, Container, Grid, Typography } from "@mui/material";

import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong! {error.message}</h4>;
  console.log(data);

  const {
    author: { name, avatar, field, description, post },
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
        <Grid size={12} sx={{ mt: 5 }}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
          ></div>
        </Grid>
        <Grid size={12} sx={{ mt: 6 }}>
          <Typography component="h3" variant="h5" sx={{ fontWeight: 700 }}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {post.map((i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i.id}>
                <CardEL
                  title={i.title}
                  slug={i.slug}
                  coverPhoto={i.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
