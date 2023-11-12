import React from "react";

import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Check from "@mui/icons-material/Check";
import Warning from "@mui/icons-material/Warning";
// core components
import SnackbarContent from "/components/Snackbar/SnackbarContent.js";
import Clearfix from "/components/Clearfix/Clearfix.js";
import notificationsStyles from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(notificationsStyles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section + " cd-section"} id="notifications">
      <div className={classes.container}>
        <div className={classes.space70} />
        <div className={classes.title}>
          <h3>Notifications</h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> You{"'"}ve got some friends nearby, stop looking
            at your phone and find them...
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>WARNING ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>DANGER ALERT:</b> You{"'"}ve got some friends nearby, stop
            looking at your phone and find them...
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
