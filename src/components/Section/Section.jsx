import PropTypes from 'prop-types';
import { AppSection, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <AppSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </AppSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
