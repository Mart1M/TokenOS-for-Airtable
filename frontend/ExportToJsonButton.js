import React from "react";
import {
  Button,
  useBase,
  useGlobalConfig,
  TablePickerSynced,
  useRecords,
  Box,
  Text,
} from "@airtable/blocks/ui";
import { saveAs } from "file-saver";

function ExportToJsonButton() {
  const base = useBase();
  const globalConfig = useGlobalConfig();
  const tableId = globalConfig.get("selectedTableId");
  const table = base.getTableByIdIfExists(tableId);
  const records = useRecords(table);
  let structuredData = {};

  const onExportButtonClick = async () => {
    const table = base.getTableByIdIfExists(tableId);
    if (!table) return;

    const queryResult = await table.selectRecordsAsync();
    const records = queryResult.records;

    let data = {};

    records.forEach((record) => {
      let recordName = record.getCellValueAsString("Name");
      let recordType = record.getCellValueAsString("Type");
      let recordValue = record.getCellValueAsString("Value");
      let recordLink = record.getCellValueAsString("Link");

      // Use the value from "Link" column if "Value" is empty.
      if (!recordValue) {
        recordValue = `{${recordLink}}`;
      }

      if (!recordName || !recordType || !recordValue) return;

      const keys = recordName.split("-");
      let currentLevel = data;
      keys.forEach((key, i) => {
        if (i === keys.length - 1) {
          if (!currentLevel[key]) {
            currentLevel[key] = {};
          }
          currentLevel[key]["$type"] = recordType;
          currentLevel[key]["$value"] = recordValue;
        } else {
          if (!currentLevel[key]) {
            currentLevel[key] = {};
          }
          currentLevel = currentLevel[key];
        }
      });
    });

    var blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    saveAs(blob, "export.json");
  };

  return (
    <Box margin={3} border="default" padding={2}>
      <Text size="xlarge" weight="bold">
        Export to JSON
      </Text>
      <Text marginTop={2} variant="paragraph">
        Select a table to export
      </Text>
      <TablePickerSynced globalConfigKey="selectedTableId" marginTop={1} />
      <Button onClick={onExportButtonClick} marginTop={1}>
        Export JSON
      </Button>
    </Box>
  );
}

export default ExportToJsonButton;
