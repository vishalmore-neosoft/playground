import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { generateRegexExamples } from "./utils/regexExampleGenerator";

export default function RegexExamples({ regex }) {
  const [examples, setExamples] = useState([]);

  const getExamples = () => setExamples(generateRegexExamples(regex, 10));

  useEffect(() => {
    if (!regex) {
      setExamples([]);
      return;
    }
    getExamples();
  }, [regex]);

  if (!examples.length) return null;

  return (
    <Box mt={2} width={"100%"} className="regex-matching-examples">
      <Stack
        direction="row"
        mb={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography color="primary" variant="body1">
          Matching Examples
        </Typography>
        <Button
          size="small"
          disableElevation
          disableRipple
          onClick={getExamples}
        >
          Refresh
        </Button>
      </Stack>

      <Stack
        direction="column"
        alignItems={"flex-start"}
        spacing={1}
        flexWrap="wrap"
      >
        {examples.map((ex, i) => (
          <Typography key={i} variant="caption">
            {ex}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
