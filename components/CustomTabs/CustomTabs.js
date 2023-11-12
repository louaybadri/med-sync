import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import makeStyles from '@mui/styles/makeStyles';
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/Card/CardContent";
// import CardHeader from "@mui/material/Card/CardHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// core components
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import styles from "/styles/jss/nextjs-material-kit-pro/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  const { headerColor, title, tabs, rtlActive, plainTabs } = props;
  const classes = useStyles();
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  const tabsContainer = classNames({
    [classes.tabsContainer]: true,
    [classes.tabsContainerRTL]: rtlActive
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? (
          <div className={cardTitle}>{"title"}</div>
        ) : null}
        <Tabs
          classes={{
            root: classes.customTabsRoot,
            flexContainer: tabsContainer,
            indicator: classes.displayNone
          }}
          value={value}
          onChange={handleChange}
          textColor="inherit"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon !== undefined) {
              icon = {
                icon: <prop.tabIcon className={classes.tabIcon} />
              };
            } else {
              icon = {};
            }
            return (
              <Tab
                key={key}
                classes={{
                  root: classes.customTabRoot,
                  selected: classes.customTabSelected,
                  wrapper: classes.customTabWrapper
                }}
                // icon={<prop.tabIcon className={tabIcon} />}
                {...icon}
                label={prop.tabName}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      {/* <CardHeader
          classes={{
            root: cardHeader,
            title: cardTitle,
            content: classes.cardHeaderContent,
            action: classes.cardHeaderAction
          }}
          title={title}
          action={

          }
        /> */}
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}

CustomTabs.defaultProps = {
  headerColor: "purple"
};

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};
