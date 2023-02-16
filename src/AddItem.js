import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddItem(props) {
    // AddItem.js
    const [open, setOpen] = React.useState(false);
    const [item, setItem] = React.useState({
        product: '',
        amount: ''
    });
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
    }
    // Calls addItem function (in props) and pass item state
    // into it
    const addItem = () => {
        props.addItem(item);
        setItem({ product: '', amount: '' }); // Clear text  fields
        handleClose();
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                Добавить в набор
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавление нового продукта</DialogTitle>
                <DialogContent>
                    <TextField value={item.product} margin="dense"
                        onChange={handleChange} name="product"
                        label="Продукт" fullWidth />
                    <TextField value={item.amount} margin="dense"
                        onChange={handleChange} name="amount"
                        label="Количество" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button onClick={addItem}>
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddItem;