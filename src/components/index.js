import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

const ReactJSONWizard = ({ schema }) => {
  const parsedSchema = JSON.parse(schema);
  const { title } = parsedSchema;
  return <Wrapper>{title}</Wrapper>;
};

ReactJSONWizard.propTypes = {
  schema: PropTypes.string.isRequired,
};

export default ReactJSONWizard;