import React from "react";

import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Search from "@mui/icons-material/Search";
import Email from "@mui/icons-material/Email";
import Face from "@mui/icons-material/Face";
import Settings from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Explore from "@mui/icons-material/Explore";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Header from "/components/Header/Header.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import navbarsStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(navbarsStyle);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section + " cd-section"} id="navigation">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.title}>
              <h3>Menu</h3>
            </div>
            <Header
              brand="Menu"
              color="primary"
              links={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Dropdown"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.title}>
              <h3>Menu with Icons</h3>
            </div>
            <Header
              brand="Icons"
              color="info"
              links={
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink}>
                      <Email />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button color="transparent" className={classes.navLink}>
                      <Face />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      dropdownHeader="Dropdown Header"
                      buttonIcon={Settings}
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem>
        </GridContainer>
        <div className={classes.title}>
          <h3>Navigation</h3>
        </div>
      </div>
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url('/img/bg.jpg')" }}
        >
          <Header
            brand="Brand"
            color="rose"
            links={
              <div className={classes.collapse}>
                <List className={classes.list + " " + classes.mrAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink + " " + classes.navLinkActive}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                </List>
                <div className={classes.mlAuto}>
                  <CustomInput
                    white
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl
                    }}
                    inputProps={{
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput
                      }
                    }}
                  />
                  <Button color="white" justIcon round>
                    <Search className={classes.searchIcon} />
                  </Button>
                </div>
              </div>
            }
          />
          <Header
            brand="Info Color"
            color="info"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink + " " + classes.navLinkActive}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Profile
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Primary Color"
            color="primary"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink + " " + classes.navLinkActive}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    <Explore /> Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    <AccountCircle /> Profile
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    <Settings /> Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Navbar with notifications"
            color="dark"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.notificationNavLink}
                    onClick={(e) => e.preventDefault()}
                    color="rose"
                    justIcon
                    round
                  >
                    <Email />
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="dark"
                    dropdownHeader="Dropdown Header"
                    buttonText={
                      <img
                        src="/img/faces/avatar.jpg"
                        className={classes.img}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Me",
                      "Settings and other stuff",
                      "Sign out"
                    ]}
                  />
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Navbar with profile"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.registerNavLink}
                    onClick={(e) => e.preventDefault()}
                    color="rose"
                    round
                  >
                    Register
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Transparent"
            color="transparent"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-twitter"
                      }
                    />{" "}
                    Twitter
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-facebook"
                      }
                    />{" "}
                    Facebook
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-instagram"
                      }
                    />{" "}
                    Instagram
                  </Button>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
