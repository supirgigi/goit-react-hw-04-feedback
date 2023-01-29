import PropTypes from 'prop-types';
import { OptionsList, OptionsBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <OptionsBtn
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </OptionsBtn>
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
