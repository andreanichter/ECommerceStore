import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <List sx={{display: "flex"}}>
            {midLinks.map(({title, path}) => (
                <ListItem>
                    {title.toUpperCase()}
                </ListItem>
            ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
