import React from "react";
import { initializeBlock, Text, Box } from "@airtable/blocks/ui";
import ImportJsonButton from "./ImportJsonButton";
import ExportToJsonButton from "./ExportToJsonButton";

function MyApp() {
  return (
    <div>
      <Box margin={3}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 83 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.638077"
            y="0.638077"
            width="81.7238"
            height="81.7238"
            rx="14.9244"
            fill="black"
          />
          <path
            d="M46.0611 41.4842C46.0611 44.0711 43.9423 46.1681 41.3287 46.1681C38.7151 46.1681 36.5963 44.0711 36.5963 41.4842C36.5963 38.8974 38.7151 36.8004 41.3287 36.8004C43.9423 36.8004 46.0611 38.8974 46.0611 41.4842Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.3288 14.456L64.9908 27.9771V55.0195L41.3288 68.5406L17.6667 55.0195V27.9771L41.3288 14.456ZM22.3992 30.6814L41.3288 19.8645L60.2584 30.6814V52.3152L41.3288 63.1321L22.3992 52.3152V30.6814Z"
            fill="white"
          />
          <path
            d="M49.7605 51.7644C51.3799 51.7644 52.694 50.4517 52.694 48.8309V42.9651L54.1607 41.4984L52.694 40.0316V34.1658C52.694 32.5451 51.3812 31.2323 49.7605 31.2323M32.8961 31.2323C31.2754 31.2323 29.9626 32.5451 29.9626 34.1658V40.0316L28.4958 41.4984L29.9626 42.9651V48.8309C29.9626 50.4517 31.2754 51.7644 32.8961 51.7644"
            stroke="white"
            strokeWidth="2.56652"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="0.638077"
            y="0.638077"
            width="81.7238"
            height="81.7238"
            rx="14.9244"
            stroke="#303030"
            strokeWidth="1.27615"
          />
        </svg>

        <Text size="xlarge" fontWeight="bold">
          TokenOS
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
