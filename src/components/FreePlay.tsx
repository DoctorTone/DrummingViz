import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const FreePlay = () => {
  return (
    <div id="freePlay" className="panel">
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Free Play" />
      </FormGroup>
    </div>
  );
};

export default FreePlay;
