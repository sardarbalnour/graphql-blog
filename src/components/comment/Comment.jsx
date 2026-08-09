import { useQuery } from "@apollo/client/react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

import { GET_POST_COMMENTS } from "../../graphql/queries";

function Comment({ slug }) {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  console.log({ data, loading, error });

  if (loading) return null;

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0, 0, 0, 0.1)0px 4px 12px", borderRadius: 4 }}
    >
      <Grid size={12} sx={{ m: 2 }}>
        <Typography
          component="p"
          variant="h6"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          کامنت ها
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            size={12}
            key={comment.id}
            sx={{ mt: 2, p: 2, border: "1px solid silver", borderRadius: 1 }}
          >
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center", mb: 3 }}
            >
              <Avatar>{comment.name[0]}</Avatar>
              <Typography
                component="span"
                variant="p"
                sx={{ fontWeight: 700, mr: 1 }}
              >
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p">
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comment;
