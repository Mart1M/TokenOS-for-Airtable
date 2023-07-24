import {
  useBase,
  Button,
  TablePickerSynced,
  useGlobalConfig,
  Box,
  Text,
} from "@airtable/blocks/ui";
import React, { useState } from "react";

function ImportJsonButton() {
  const base = useBase();
  const globalConfig = useGlobalConfig();
  const tableId = globalConfig.get("selectedTableId");
  const table = base.getTableByIdIfExists(tableId);

  const [jsonFile, setJsonFile] = useState(null);

  const handleImport = async () => {
    if (!jsonFile) {
      alert("Please upload a JSON file first");
      return;
    }

    if (!table) {
      alert("Please select a table first");
      return;
    }

    let data = null;
    try {
      data = JSON.parse(jsonFile);
    } catch (error) {
      alert("Failed to parse JSON: " + error);
      return;
    }

    const records = []; // Declare records here
    processNestedObject(data, records);

    const chunks = [];
    while (records.length) {
      chunks.push(records.splice(0, 50));
    }
    for (const chunk of chunks) {
      await table.createRecordsAsync(chunk);
    }

    alert("Import completed");
  };

  function processNestedObject(nestedObj, records, path = []) {
    for (let key in nestedObj) {
      if (!nestedObj.hasOwnProperty(key)) continue;

      // Check if nestedObj[key] is an object and has both $type and $value properties
      if (
        typeof nestedObj[key] === "object" &&
        nestedObj[key].hasOwnProperty("$type") &&
        nestedObj[key].hasOwnProperty("$value")
      ) {
        records.push({
          fields: {
            Name: path.concat(key).join("-").replace(/\s/g, ""), // No spaces anywhere
            Type: nestedObj[key]["$type"],
            Value: nestedObj[key]["$value"],
          },
        });
      } else if (typeof nestedObj[key] === "object") {
        processNestedObject(nestedObj[key], records, path.concat(key));
      }
    }
  }

  const handleJsonUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setJsonFile(event.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <Box margin={3} border="default" padding={2}>
        <Text size="xlarge" weight="bold">
          Import JSON
        </Text>
        <Text marginTop={2} variant="paragraph">
          Select a table to import JSON data (you must have at least 3 columns:
          `Name`, `Type` and `Value`)
        </Text>
        <TablePickerSynced globalConfigKey="selectedTableId" marginBottom={2} />
        <input type="file" accept=".json" onChange={handleJsonUpload} />
        <Button onClick={handleImport} marginTop={1}>
          Import JSON
        </Button>
      </Box>
    </div>
  );
}
export default ImportJsonButton;
