import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { TaskDetailsModal } from "./TaskDetailsModal";
import "../style/style.css";

interface ListData {
  id: number;
  type: string;
  name: string;
  isChecked: boolean;
}

export const BasicTable = () => {
  // テーブルに表示するdataをAPIから取得
  const [data, setData] = useState<ListData[]>([]);
  // モーダルを開閉するstate
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTaskDetails, setSelectedTaskDetails] = useState("");
  const firstItemRef = useRef<HTMLTableRowElement | null>(null);
  const [filterType, setFilterType] = useState<string>("");

  // クリックした行のタスクのnameをsetして、ダイアログを開くstateをset
  // useCallbackでhandleOpenModalをメモ化
  const handleOpenModal = useCallback((taskDetails: string) => {
    setSelectedTaskDetails(taskDetails);
    setModalOpen(true);
  }, []);

  // ダイアログを閉じるstateをset
  // useCallbackでhandleCloseModalをメモ化
  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // データをフィルタリングする※大量にデータがあると仮定して、useMemoを使う
  // data:テーブルに表示されるデータの配列
  // filterTypeはユーザーが選択したフィルタの種類
  const filteredData = useMemo(() => {
    return data.filter((d) => filterType === "" || d.type === filterType);
  }, [data, filterType]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/65f3d9d5266cfc3fde98a3c2",
          {
            method: "GET",
            headers: {
              "X-Master-Key":
                "$2a$10$wOqIOPuIrHXicO4kpHl5O.000JnvJVtJdWVSpaK455oMkGb1x/zd6",
            },
          }
        );
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const rawData = await response.json();
        const data = rawData.record as ListData[];
        setData(data);
      } catch (error) {
        console.error("データの取得エラー", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    firstItemRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <div className="main-area">
      <InputLabel>Type</InputLabel>
      <Select
        value={filterType}
        label="Type"
        onChange={(e) => setFilterType(e.target.value)}
      >
        <MenuItem value="">all</MenuItem>
        <MenuItem value="React">React</MenuItem>
        <MenuItem value="TypeScript">TypeScript</MenuItem>
      </Select>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task ID</TableCell>
              <TableCell>Task Type</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Task Check</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((d, index) => (
              <TableRow
                key={d.id}
                ref={index === 0 ? firstItemRef : null}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {d.id}
                </TableCell>
                <TableCell>{d.type}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>
                  <Checkbox checked={d.isChecked} />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleOpenModal(d.name)}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TaskDetailsModal
          open={modalOpen}
          // handleCloseModal関数をTaskDetailsModalのonCloseプロパティにわたす
          onClose={handleCloseModal}
          taskDetails={selectedTaskDetails}
        />
      </TableContainer>
    </div>
  );
};
