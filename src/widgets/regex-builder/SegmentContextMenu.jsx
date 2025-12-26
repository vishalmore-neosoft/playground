import {
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";

export default function SortableContextMenu({ anchorEl, onClose, onSelect }) {
  const types = [
    "fixed",
    "digits",
    "letters",
    "alphanumeric",
    "custom",
    "date",
  ];

  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      {types.map((type) => (
        <MenuItem key={type} onClick={() => onSelect(type)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </MenuItem>
      ))}
      <MenuItem onClick={() => onSelect("delete")} sx={{ color: "error.main" }}>
        <ListItemText>Delete Segment</ListItemText>
      </MenuItem>
    </Menu>
  );
}
