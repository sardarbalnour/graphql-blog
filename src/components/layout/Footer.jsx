import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        color="primary"
        sx={{
          backgroundColor: "#f7f7f7",
          padding: "10px",
          textAlign: "center",
          mt: 10,
        }}
      >
        دوره ریکت | پروژه وبلاگ با GraphQL
      </Typography>
    </footer>
  );
}

export default Footer;
