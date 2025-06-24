import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import IconButton from "@mui/material/IconButton";
import useStore from "../state/store";

const Info = () => {
  const setShowInfoDialog = useStore((state) => state.setShowInfoDialog);

  return (
    <>
      <div id="info" className="panel">
        <IconButton onClick={() => setShowInfoDialog(true)}>
          <InfoOutlinedIcon fontSize={"large"} />
        </IconButton>
      </div>
    </>
  );
};

export default Info;
