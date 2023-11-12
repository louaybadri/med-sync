import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
// core components
import styles from "/styles/jss/nextjs-material-kit-pro/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Quote(props) {
  const { text, author, authorClassName, textClassName } = props;
  const classes = useStyles();
  const quoteClasses = classNames(classes.defaultFontStyle, classes.quote);
  const quoteTextClasses = classNames({
    [classes.quoteText]: true,
    [textClassName]: textClassName !== undefined
  });
  const quoteAuthorClasses = classNames({
    [classes.quoteAuthor]: true,
    [authorClassName]: authorClassName !== undefined
  });
  return (
    <blockquote className={quoteClasses}>
      <p className={quoteTextClasses}>{text}</p>
      <small className={quoteAuthorClasses}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node,
  textClassName: PropTypes.string,
  authorClassName: PropTypes.string
};
