import { BasicTable } from "./component/BasicTable";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Typography
        variant="h1"
        sx={{
          fontSize: "1.5rem",
          margin: "20px",
        }}
      >
        タスク管理テーブル
      </Typography>
      <BasicTable />
    </div>
  );
}

export default App;
