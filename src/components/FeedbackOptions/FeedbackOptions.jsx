import React from 'react';
import PropTypes from 'prop-types';

import styles from './feedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.wrapper}>
      {options.map(element => (
        <li key={element} className={styles.list}>
          <button className={styles.button} onClick={onLeaveFeedback}>
            {element}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
