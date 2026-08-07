import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              وبلاگ سردار بال نور
            </Typography>
            <MenuBookTwoToneIcon />
          </Toolbar>
        </Container>
      </AppBar>
      {/* Toolbar below creates spacing so page content isn't hidden behind fixed AppBar */}
      <Toolbar />
    </>
  );
}

export default Header;
