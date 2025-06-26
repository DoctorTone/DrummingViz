import Typography from "@mui/material/Typography";

const Score = () => {
  return (
    <div id="score" className="panel">
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Groove 1
      </Typography>
      <img src="./images/drumScore1.png" className="w-100" />
    </div>
  );
};

export default Score;
