import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        bgcolor: "background.footer",
        color: "text.footer",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: 500, lineHeight: 1.6 }}
          >
            I’m always open to collaboration, new opportunities, and interesting
            ideas!
            <br />
            You can reach out to me here:
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            flexWrap="wrap"
            justifyContent="center"
          >
            <IconButton
              href="tel:+380957062171"
              aria-label="Phone"
              color="inherit"
              sx={{ "&:hover": { color: "text.secondary" } }}
            >
              <PhoneIcon />
            </IconButton>

            <IconButton
              href="mailto:tetiana.herasymenko22@gmail.com"
              aria-label="Email"
              color="inherit"
              sx={{ "&:hover": { color: "text.secondary" } }}
            >
              <EmailIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/tetiana-herasymenko-53859b331"
              target="_blank"
              aria-label="LinkedIn"
              color="inherit"
              sx={{ "&:hover": { color: "text.secondary" } }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href="https://github.com/tanyagrr"
              target="_blank"
              aria-label="GitHub"
              color="inherit"
              sx={{ "&:hover": { color: "text.secondary" } }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://t.me/tanyagrrrrrr"
              target="_blank"
              aria-label="Telegram"
              color="inherit"
              sx={{ "&:hover": { color: "text.secondary" } }}
            >
              <TelegramIcon />
            </IconButton>
          </Stack>

          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Tania Herasymenko
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
