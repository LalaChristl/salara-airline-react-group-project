import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Context } from "../../../context/Context";

export default function RowRadioButtonsGroup() {
  const { state, dispatch } = React.useContext(Context);

  return (
    <FormControl>
      <RadioGroup
        value={state.radio}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => dispatch({ type: "radio", payload: e.target.value })}
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
