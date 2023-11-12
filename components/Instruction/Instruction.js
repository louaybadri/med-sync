import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import makeStyles from '@mui/styles/makeStyles';

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem";

import styles from "/styles/jss/nextjs-material-kit-pro/components/instructionStyle.js";

const useStyles = makeStyles(styles);

export default function Instruction(props) {
  const { title, text, image, className, imageClassName, imageAlt } = props;
  const classes = useStyles();
  const instructionClasses = cx({
    [classes.instruction]: true,
    [className]: className !== undefined
  });
  const pictureClasses = cx({
    [classes.picture]: true,
    [imageClassName]: imageClassName !== undefined
  });
  return (
    <div className={instructionClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <strong>{title}</strong>
          <p>{text}</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <div className={pictureClasses}>
            <img src={image} alt={imageAlt} className={classes.image} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Instruction.defaultProps = {
  imageAlt: "..."
};

Instruction.propTypes = {
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  imageClassName: PropTypes.string
};
