import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Account from '../../../components/Account';
import { Paper } from '@mui/material';
import useStore from '../../../store/authStore';
import Invoices from '../../../components/Invoices';

export default function AccountPage() {

  const [language, setLanguage] = React.useState('en');
  const [currentTab, setCurrentTab] = React.useState(0);
  const { authUser } = useStore();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Typography
          fontFamily="Poppins"
          variant="h4"
          component="div"
          align="left"
          marginTop={10}
          marginLeft={10}
          marginBottom={5}
        >
          Bienvenue, {authUser?.name}
        </Typography>

        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Profil" />
          <Tab label="Factures" />
          {/* Ajoutez d'autres onglets ici */}
        </Tabs>

        {currentTab === 0 && <Account />} {/* Afficher le composant Paiements */}
        {currentTab === 1 && <Invoices />} {/* Afficher le composant Factures */}

        {/* Ajoutez le contenu pour d'autres onglets ici */}
      </Box>
    </Box>
  );
}