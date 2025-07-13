import { Stack, Alert } from "@mui/material";
import { keyframes } from "@emotion/react";

// Define your custom animation
const fadeInSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function CenteredAlert() {
  return (
    <Stack
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingX: { xs: 2, sm: 4, md: 6 }, // responsive horizontal padding
        marginTop: 4,
      }}>
      <Alert
        variant="filled"
        severity="info"
        sx={{
          width: "100%",
          maxWidth: "500px", // keep it centered and not full width
          textAlign: "center",
          animation: `${fadeInSlide} 0.6s ease-out`,
        }}>
        💡 This is an outlined info Alert.
      </Alert>
    </Stack>
  );
}

export default CenteredAlert;
