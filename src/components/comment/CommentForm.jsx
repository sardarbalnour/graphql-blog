import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1)0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid size={12} sx={{ m: 2 }}>
        <Typography
          component="p"
          variant="h6"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid size={12} sx={{ m: 2 }}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={12} sx={{ m: 2 }}>
        <TextField
          label="ایمیل"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid size={12} sx={{ m: 2 }}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "100%" }}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid size={12} sx={{ m: 2 }}>
        <Button variant="contained" >ارسال</Button>
      </Grid>
    </Grid>
  );
}

export default CommentForm;
