import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { headerHeight } from "../layout/Header";
import { education } from "../data/education";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

function Education() {
  return (
    <>
      <Box
        component="section"
        id="education"
        sx={{
          backgroundColor: "background.section3",
          width: "100%",
          scrollMarginTop: `${headerHeight - 64}px`,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            minHeight: `calc(100vh - ${headerHeight}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 10, md: 11 },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: { md: 6, xs: 4 }, fontWeight: 600 }}
          >
            Education
          </Typography>

          <Stack spacing={4}>
            {education.map((item, index) => (
              <Box
                key={index}
                sx={{
                  borderLeft: "2px solid",
                  borderColor: "divider",
                  pl: 3,
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <SchoolIcon fontSize="small" color="action" />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                </Stack>

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.school}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, lineHeight: 1.7, maxWidth: 650 }}
                >
                  {item.description}
                </Typography>

                {item.certificate && (
                  <Button
                    startIcon={<WorkspacePremiumIcon />}
                    variant="text"
                    size="small"
                    href={item.certificate}
                    target="_blank"
                    sx={{ textTransform: "none", px: 0, color: "text.primary" }}
                  >
                    View certificate →
                  </Button>
                )}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Education;
