import React from "react";
import { initializeBlock, Text, Box } from "@airtable/blocks/ui";
import ImportJsonButton from "./ImportJsonButton";
import ExportToJsonButton from "./ExportToJsonButton";

function MyApp() {
  return (
    <div>
      <Box margin={3}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-figma"
        >
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
        <Text size="xlarge" weight="bold">
          Figma variables JSON
        </Text>
        <Text marginBottom={3} variant="paragraph">
          This extension facilitates seamless import and export of Figma
          variables in JSON format
        </Text>
      </Box>
      <ImportJsonButton />
      <ExportToJsonButton />
    </div>
  );
}

initializeBlock(() => <MyApp />);
