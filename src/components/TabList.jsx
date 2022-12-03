import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import MyNFTInfo from "./NFT_info/NFT_info";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsList(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Collection" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {props.isLoading ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography>Waiting for loading from smart contract</Typography>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            {props.yourNFT ? (
              props.yourNFT.map((item, id) => (
                <MyNFTInfo
                  id={item.tokenId}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.startPrice}
                  marketplaceContract={props.marketplaceContract}
                  nftContract={props.nftContract}
                  account={props.account}
                />
              ))
            ) : (
              <Box>
                <Typography>
                  Sorry, you don't have any NFT in your account
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
