import { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"
import PendingIcon from "@mui/icons-material/Pending"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"
import SupportRoundedIcon from "@mui/icons-material/SupportRounded"
import Avatar from "@mui/joy/Avatar"
import Box from "@mui/joy/Box"
import Divider from "@mui/joy/Divider"
import GlobalStyles from "@mui/joy/GlobalStyles"
import IconButton from "@mui/joy/IconButton"
import Input from "@mui/joy/Input"
import List from "@mui/joy/List"
import ListItem from "@mui/joy/ListItem"
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton"
import ListItemContent from "@mui/joy/ListItemContent"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"

import useAuthManager from "../../hooks/useAuthManager"

import { linkStyles } from "./ListItems/listItems"
import ColorSchemeToggle from "./colorScheme"
import Header from "./header"
import { closeSidebar } from "./utils"
import useAuthStore from "../../store/authStore"

export function Sidebar() {
  const navigate = useNavigate()

  const { authUser } = useAuthStore()
  const authManager = useAuthManager()

  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchTerm.trim() !== "") {
      console.log(`/search/${searchTerm}`)
      // Redirigez vers la page des résultats avec le terme de recherche
      navigate(`/search/${searchTerm}`, { state: { searchTerm } })
    }
  }

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography level="title-lg">Info&apos;Companies</Typography>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>

      <form onSubmit={handleSearch}>
        <Input
          id="search-company"
          placeholder="Search"
          size="sm"
          startDecorator={<SearchRoundedIcon />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <Link style={linkStyles} to="/dashboard">
            <ListItem>
              <ListItemButton>
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Dashboard</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>

          <Link style={linkStyles} to="/favorites">
            <ListItem>
              <ListItemButton>
                <PendingIcon />
                <ListItemContent>
                  <Typography level="title-sm">To Do</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SupportRoundedIcon />
              Support
            </ListItemButton>
          </ListItem>

          <Link style={linkStyles} to="/settings">
            <ListItem>
              <ListItemButton>
                <SettingsRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Settings</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
      <Divider />
      <Link style={linkStyles} to="/account">
        <Box
          id="user-page"
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
        >
          <Avatar size="sm" variant="outlined">
            {authUser?.firstName?.charAt(0).toLocaleUpperCase() ??
              authManager
                .getUser()
                ?.profile.given_name?.charAt(0)
                .toLocaleUpperCase() ??
              "E"}
          </Avatar>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">
              {authUser?.firstName ??
                authManager.getUser()?.profile.given_name ??
                "Error"}
            </Typography>
            <Typography level="body-xs">
              {authUser?.email ??
                authManager.getUser()?.profile.email ??
                "Error"}
            </Typography>
          </Box>
          <IconButton
            color="neutral"
            size="sm"
            variant="plain"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault()
              authManager.redirectedLogout()
            }}
          >
            <LogoutRoundedIcon />
          </IconButton>
        </Box>
      </Link>
    </Sheet>
  )
}

export default function Layout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh", fontFamily: "Poppins" }}>
      <Sidebar />
      <Header />
      <Box
        className="MainContent"
        component="main"
        sx={{
          pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
          overflowY: "auto",
          overflowX: "hidden",
          fontFamily: "Poppins",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
