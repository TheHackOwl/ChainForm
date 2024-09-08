import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

export const TokenSelector = () => {
  return (
    <Select
      className="max-w-xs"
      description="Select the token you want to use"
      isDisabled
      isRequired={true}
      label="Select Token"
      placeholder="Please select..."
      selectedKeys={["0xdd9e5Be4d9c2B921f242AF8a3b095AfC8CcE6475"]}
      onChange={(e) => console.log(e.target.value)}
    >
      <SelectItem key="0xdd9e5Be4d9c2B921f242AF8a3b095AfC8CcE6475">
        $CROCK(0xdd9e5Be4d9c2B921f242AF8a3b095AfC8CcE6475)
      </SelectItem>
    </Select>
  );
};
