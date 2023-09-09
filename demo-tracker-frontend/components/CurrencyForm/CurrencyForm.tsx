import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { CurrencyFormData } from "../../types";
import toast from "react-hot-toast";

interface CurrencyFormProps {
  handleSubmit: (data: CurrencyFormData) => Promise<void>;
}

const initialState: CurrencyFormData = {
  name: "",
  email: "",
  description: "",
};

const CurrencyForm: React.FC<CurrencyFormProps> = ({ handleSubmit }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<CurrencyFormData>(initialState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData(initialState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    handleSubmit(formData)
      .then(() => {
        handleClose();
      })
      .catch(error => {
        error?.response?.data?.message &&
          toast.error(
            error.response.data.message?.join(" ") || "مشکلی رخ داد!",
          );
      });
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        افزودن ارز جدید
      </Button>
      <Dialog open={open} onClose={handleClose} dir="rtl">
        <DialogTitle>افزودن ارز دیجیتال</DialogTitle>
        <DialogContent>
          <DialogContentText>
            جزییات ارز مورد نظر را وارد کنید.
          </DialogContentText>
          <TextField
            dir="rtl"
            autoFocus
            margin="dense"
            name="name"
            label="نام"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="ایمیل"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="توضیحات"
            fullWidth
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={5}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            انصراف
          </Button>
          <Button
            onClick={handleFormSubmit}
            variant="contained"
            color="primary"
          >
            ثبت
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CurrencyForm;
