"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Box,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Paginate from "../common/pagination/Paginate";
import { useRouter, useSearchParams } from "next/navigation";
import { usePostsStore } from "../utils/theme/storeManager/store";
import { toast } from "react-toastify";
import ConfirmationModal from "../common/modals/ConfirmationModal";
import Image from "next/image";
import ModalComponent from "../common/modals/ModalComponent";
import EditModalContent from "../common/modalContent/EditModalContent";

interface Props {
  data: any;
  postTitle: string;
}

const MyTable = ({ data: apiData, postTitle }: Props) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editData, setEditData] = useState({} as any);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { postsData: data, setPostsData } = usePostsStore();

  const [id, setId] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item: any) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpen = (e: any, id: string) => {
    e.stopPropagation();
    setOpen(true);
    setId(id);
  };

  const handleEditOpen = (e: any, item: any) => {
    e.stopPropagation();
    setOpenEdit(true);
    setEditData(item);
  };
  const handleDelete = () => {
    const newData = data.filter((item: any) => item.id !== id);
    setPostsData(newData);
    toast.success("Post deleted successfully");
    setOpen(false);
  };

  const tableHeaders = [
    { id: "id", label: "ID" },
    { id: "title", label: "Title" },
    { id: "description", label: "Description" },
    { id: "action", label: "Action" },
  ];

  useEffect(() => {
    setPostsData(apiData);
  }, [apiData, setPostsData]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "432px",
      }}
    >
      <Box
        gap={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {postTitle}
        </Typography>
        <TextField
          id="search"
          placeholder="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            sx: {
              borderRadius: "10px",
            },
            startAdornment: (
              <InputAdornment position="start">
                <IconButton aria-label="search">
                  <Image
                    src="/icons/actions/search.svg"
                    width={16}
                    height={16}
                    alt="logo"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          background: "#fff",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell
                  key={header.id}
                  sx={{
                    fontWeight: 700,
                    color: "#111111",
                  }}
                  align={header.id === "title" ? "right" : "justify"}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item: any) => (
              <TableRow
                key={item.id}
                onClick={() => router.push(`/posts/${item.id}`)}
                sx={{
                  cursor: "pointer",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.title}</TableCell>
                <TableCell
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: "400px",
                    whiteSpace: "nowrap",

                    textAlign: "left",
                  }}
                  align="right"
                >
                  {item.body}
                </TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    <IconButton onClick={(e) => handleEditOpen(e, item)}>
                      <Image
                        src="/icons/actions/edit.svg"
                        width={24}
                        height={24}
                        alt="logo"
                      />
                    </IconButton>
                    <IconButton onClick={(e) => handleOpen(e, item.id)}>
                      <Image
                        src="/icons/actions/delete.svg"
                        width={24}
                        height={24}
                        alt="logo"
                      />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Paginate count={20} page={searchParams?.get("page") || "1"} />
      </Box>
      <ConfirmationModal
        title="Delete blog Post"
        open={open}
        content="Are you sure you want to delete this post ? This action cannot be undone."
        setOpen={setOpen}
        handleConfirm={handleDelete}
      />
      <ModalComponent title="Edit Post" open={openEdit} setOpen={setOpenEdit}>
        <EditModalContent
          editData={editData}
          setOpenEdit={setOpenEdit}
          setEditData={setEditData}
        />
      </ModalComponent>
    </Box>
  );
};

export default MyTable;
