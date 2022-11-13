import { Delete } from "@mui/icons-material";
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
    } from "@mui/material";
import React from "react";

function Card({ title, body, onDelete }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt="picture" src={"undip.jpg"} sx={{ width: 100, height: 150, margin: 1 }}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="h4">{title}</Typography>}
                secondary={<Typography variant="p">{body}</Typography>}
            />
            <IconButton onClick={onDelete}>
                <Delete />
            </IconButton>
        </ListItem>
    );
}

export default Card;