/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
import Hidden from "@mui/material/Hidden";

// @mui/icons-material
import Apps from "@mui/icons-material/Apps";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ViewDay from "@mui/icons-material/ViewDay";
import Dns from "@mui/icons-material/Dns";
import Build from "@mui/icons-material/Build";
import ListIcon from "@mui/icons-material/List";
import People from "@mui/icons-material/People";
import Assignment from "@mui/icons-material/Assignment";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import Chat from "@mui/icons-material/Chat";
import Call from "@mui/icons-material/Call";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import AccountBalance from "@mui/icons-material/AccountBalance";
import ArtTrack from "@mui/icons-material/ArtTrack";
import ViewQuilt from "@mui/icons-material/ViewQuilt";
import LocationOn from "@mui/icons-material/LocationOn";
import Fingerprint from "@mui/icons-material/Fingerprint";
import AttachMoney from "@mui/icons-material/AttachMoney";
import Store from "@mui/icons-material/Store";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Layers from "@mui/icons-material/Layers";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import LineStyle from "@mui/icons-material/LineStyle";
import Error from "@mui/icons-material/Error";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";
import {LoginOutlined, LoginSharp} from "@mui/icons-material";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <Link href="/hackathon">
        <a
            className={classes.dropdownLink}
        >
        HOME
        </a>
      </Link>
      <Link href="/hackathon#">
        <a
            className={classes.dropdownLink}
        >
          WHAT WE DO
        </a>
      </Link>
      <Link href="/hackathon#">
        <a
            className={classes.dropdownLink}
            onClick={(e) => smoothScroll(e, "blogs")}
        >
         EPIC CARE
        </a>
      </Link>
      <Link href="/hackathon#">
      <a
          className={classes.dropdownLink}
          onClick={(e) => smoothScroll(e, "headers")}
      >
       MODULES
      </a>
    </Link>
      <Link href="/hackathon#">
        <a
            className={classes.dropdownLink}
            onClick={(e) => smoothScroll(e, "features")}
        >
          OUR CUSTOMERS
        </a>
      </Link>
      <Link href="/hackathon#">
        <a
            className={classes.dropdownLink}
            onClick={(e) => smoothScroll(e, "blogs")}
        >
          CONTACT US
        </a>
      </Link>
      <Link href="/login">
        <a
            className={classes.dropdownLink}
        >
          LOG IN
        </a>
      </Link>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
