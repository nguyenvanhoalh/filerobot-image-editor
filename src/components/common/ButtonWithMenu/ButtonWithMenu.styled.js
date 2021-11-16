/** External Dependencies */
import styled from 'styled-components';
import { Button, IconButton } from '@scaleflex/ui/core';

const StyledButtonWrapper = styled.div`
  height: 22px;
  display: flex;
  align-items: center;
`;

const StyledButtonWithMenu = styled(Button)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  padding: 4px 8px;

  span {
    font-weight: bold !important;
    font-size: 12px !important;
    line-height: 14px !important;
  }
`;

const StyledMenuButton = styled(IconButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: 1px;
  height: 100%;
  padding: 4px 8px;
  margin-right: 4px;

  svg {
    transform: rotate(90deg);
  }
`;

export { StyledButtonWrapper, StyledButtonWithMenu, StyledMenuButton };