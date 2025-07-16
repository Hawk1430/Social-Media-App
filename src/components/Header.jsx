import React, { useState } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Paper,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";

const icons = [
	{ label: "Home", icon: <HomeIcon />, key: "home" },
	{ label: "Notifications", icon: <NotificationsIcon />, key: "notifications" },
	{ label: "Bookmarks", icon: <BookmarkIcon />, key: "bookmarks" },
	{ label: "Profile", icon: <PersonIcon />, key: "profile" },
];

const Header = () => {
	const [active, setActive] = useState("home");
	const [drawerOpen, setDrawerOpen] = useState(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 960px

	const toggleDrawer = (open) => () => {
		setDrawerOpen(open);
	};

	return (
		<>
			<AppBar
				position="static"
				sx={{
					height: "7.5vh",
					backgroundColor: "#f15a24",
					boxShadow: "0 0 20px rgba(235, 85, 30, 0.75)",
					marginBottom: "30px",
				}}
			>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Typography variant="h6" sx={{ fontWeight: "bold" }}>
						TravelMedia.in
					</Typography>

					{/* Mobile: Hamburger Menu */}
					{isMobile ? (
						<IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
							<MenuIcon />
						</IconButton>
					) : (
						// Desktop: Rounded Icon Menu
						<Paper
							elevation={3}
							sx={{
								display: "flex",
								backgroundColor: "#fff",
								borderRadius: "50px",
								padding: "4px 12px",
							}}
						>
							{icons.map(({ icon, key }) => (
								<IconButton
									key={key}
									onClick={() => setActive(key)}
									sx={{
										color: active === key ? "#f15a24" : "#fcdcd1",
									}}
								>
									{icon}
								</IconButton>
							))}
						</Paper>
					)}
				</Toolbar>
			</AppBar>

			{/* Drawer for Mobile */}
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
				<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
					<List>
						{icons.map(({ label, icon, key }) => (
							<ListItem key={key} disablePadding>
								<ListItemButton
									onClick={() => setActive(key)}
									selected={active === key}
								>
									<ListItemIcon sx={{ color: "#f15a24" }}>{icon}</ListItemIcon>
									<ListItemText primary={label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default Header;
