import { usePostsStore } from "@/components/utils/theme/storeManager/store";
import { Box, TextField } from "@mui/material";
import React from "react";
import CustomButton from "../button/CustomButton";
import { toast } from "react-toastify";

interface Props {
  editData: any;
  setEditData: any;
  setOpenEdit: any;
}

const EditModalContent = ({ editData, setEditData, setOpenEdit }: Props) => {
  const { postsData, setPostsData } = usePostsStore();
  const handleChange = (e: any) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const index = postsData.findIndex((item: any) => item.id === editData.id);
    postsData[index] = editData;
    setPostsData([...postsData]);
    toast.success("Post updated successfully");
    setOpenEdit(false);
  };

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
        name="title"
        value={editData?.title}
        onChange={handleChange}
        sx={{
          mt: 2,
        }}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="body"
        onChange={handleChange}
        multiline
        rows={4}
        value={editData?.body}
        fullWidth
        sx={{
          mt: 2,
        }}
      />
      <CustomButton
        variant="contained"
        onClick={handleSave}
        sx={{
          background: "#FECE01",
          marginTop: 2,

          color: "#111111",
          border: "1px solid #FECE01 ",
          borderRadius: "50px",
          minWidth: 170,
          fontWeight: 600,
        }}
      >
        Update
      </CustomButton>
    </Box>
  );
};

export default EditModalContent;
