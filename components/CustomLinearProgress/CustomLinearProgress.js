import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import makeStyles from '@mui/styles/makeStyles';
import LinearProgress from "@mui/material/LinearProgress";

import styles from "/styles/jss/nextjs-material-kit-pro/components/customLinearProgressStyle.js";

const useStyles = makeStyles(styles);

export default function CustomLinearProgress(props) {
  const { color, ...rest } = props;
  const classes = useStyles();
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};
