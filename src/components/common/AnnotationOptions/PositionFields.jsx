/** External Dependencies */
import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { ArrowRightAlt, Point } from '@scaleflex/icons';

/** Internal Dependencies */
import { POSITIONS } from 'utils/constants';
import AppContext from 'context';
import mapPositionStringToPoint from 'utils/mapPositionStringToPoint';
import { StyledIconWrapper } from './AnnotationOptions.styled';
import {
  AVAILABLE_POSITIONS,
  posCssRotateDegFromRightSide,
} from './AnnotationOptions.constants';

const PositionFields = ({ annotation, updateAnnotation }) => {
  const { designLayer } = useContext(AppContext);

  const changePosition = (newPositionStr) => {
    updateAnnotation(
      mapPositionStringToPoint(annotation, designLayer, newPositionStr),
    );
  };

  const positionsLength = AVAILABLE_POSITIONS.length;

  return AVAILABLE_POSITIONS.map((pos, i) => (
    <Fragment key={pos}>
      <StyledIconWrapper
        onClick={() => changePosition(pos)}
        secondaryIconColor
        addThinBorder
        noMargin
      >
        {pos === POSITIONS.MIDDLE_CENTER ? (
          <Point />
        ) : (
          <ArrowRightAlt
            style={{
              transform: `rotate(${posCssRotateDegFromRightSide[pos]}deg)`,
            }}
          />
        )}
      </StyledIconWrapper>
      {(i + 1) % 3 === 0 && i + 1 !== positionsLength && <div />}
    </Fragment>
  ));
};

PositionFields.propTypes = {
  annotation: PropTypes.instanceOf(Object).isRequired,
  updateAnnotation: PropTypes.func.isRequired,
};

export default PositionFields;