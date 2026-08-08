import { useQuery } from "@apollo/client/react";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import sanitizeHtml from "sanitize-html";

import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";

function BlogPage() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h4>Something went wrong! {error.message}</h4>;
  console.log({ loading, data, error });

  const {
    post: { title, coverPhoto, content, author },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          size={12}
          sx={{
            mt: 9,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>
          <ArrowBackRounded onClick={() => navigate(-1)} color="primary" />
        </Grid>
        <Grid size={12} sx={{ mt: 6 }}>
          <img
            src={coverPhoto.url}
            alt=""
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid size={12} sx={{ mt: 7, display: "flex", alignItems: "center" }}>
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" sx={{ fontWeight: 700 }}>
              {author.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: "text.secondary" }}
            >
              {author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid size={12} sx={{ mt: 5 }}>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
