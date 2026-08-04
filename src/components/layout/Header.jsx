import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

function Header() {
  return (
    <div>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              component="h1"
              variant="h5"
              font-weight="bold"
              sx={{ flexGrow: 1 }}
            >
              وبلاگ سردار بال نور
            </Typography>
            <MenuBookTwoToneIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
