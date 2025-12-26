import { Button, Stack } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { Outlet, useNavigate} from "react-router-dom";

function WidgetWrapper() {
    const navigate = useNavigate();
  return (
    <Stack direction="column" gap={2}>
      <div>
        <Button onClick={() => navigate("/")} startIcon={<ArrowBackIcon />} variant="outlined">
          Back
        </Button>
      </div>
      <Outlet />
    </Stack>
  );
}

export default WidgetWrapper;
