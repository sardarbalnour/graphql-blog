import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client/react";
import { ToastContainer, toast } from "react-toastify";

import { SEND_COMMENT } from "../../graphql/mutations";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT);
  console.log(data);

  const sendHandler = () => {
    if (name && email && text) {
      sendComment({ variables: { name, email, text, slug } });
    } else {
      toast.warn("همه فیلد ها رو پر کنید !", {
        position: "top-center",
      });
      return;
    }

    if (data) {
      toast.success("کامنت ارسال شد و منتظر تایید می باشد.", {
        position: "top-center",
      });
    }
  };

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
        {loading ? (
          <Button variant="contained" disabled sx={{ width: "30%" }}>
            در حال ارسال ...
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={sendHandler}
            sx={{ width: "30%" }}
          >
            ارسال
          </Button>
        )}
        <ToastContainer />
      </Grid>
    </Grid>
  );
}

export default CommentForm;
