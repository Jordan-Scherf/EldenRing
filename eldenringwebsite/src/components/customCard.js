import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const CustomCard = ({ imageUrl, title, description, modalImageUrl, modalDescription }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 150, background: "#FDF5E6", backgroundSize: "cover" }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="100"
            image={require(`../${imageUrl}`)}
            alt={title}
            style={{ objectFit: 'scale-down' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            height="200"
            image={require(`../${modalImageUrl}`)}
            alt={title}
            style={{ objectFit: 'scale-down' }}
          />
          <Typography>{modalDescription}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomCard;
