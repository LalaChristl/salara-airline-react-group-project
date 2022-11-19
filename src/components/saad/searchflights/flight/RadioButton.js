import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="Round trip"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#00548A",
                },
              }}
            />
          }
          label="Round trip"
        />
        <FormControlLabel
          value="One way"
          control={
            <Radio
              checked
              sx={{
                "&.Mui-checked": {
                  color: "#00548A",
                },
              }}
            />
          }
          label="One way"
        />
        <FormControlLabel
          value="Multi-city"
          control={
            <Radio
              sx={{
                "&.Mui-checked": {
                  color: "#00548A",
                },
              }}
            />
          }
          label="Multi-city"
        />
      </RadioGroup>
    </FormControl>
  );
}
