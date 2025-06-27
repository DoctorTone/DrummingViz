import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import useStore from "../state/store";
import { GROOVES } from "../state/Config";

const Score = () => {
  const [currentGroove, setCurrentGroove] = useState(0);
  const groove = useStore((state) => state.groove);

  useEffect(() => {
    const nextGroove = parseInt(groove);
    if (Number.isNaN(nextGroove)) return;

    setCurrentGroove(nextGroove - 1);
  }, [groove]);

  return (
    <div id="score" className="panel">
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {GROOVES[currentGroove].title}
      </Typography>
      <img src={`./images/${GROOVES[currentGroove].score}`} className="w-100" />
    </div>
  );
};

export default Score;
