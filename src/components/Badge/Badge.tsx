import React from 'react';
import { ReactElement } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Colors } from '../Color';
import Typography from '../Typography';
import { Container, StyledBadge } from './Badge.styles';
import { FlexCenter } from '../../styles/Common/Common.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BadgeProps {
  count?: number;
  maxCount?: number;
  color?: Colors;
  bgColor?: Colors;
  children: React.ReactNode;
}

const Badge = ({
  count,
  maxCount,
  bgColor,
  color = 'white',
  children,
}: BadgeProps): ReactElement => {
  return (
    <Container>
      <StyledBadge $bgColor={bgColor} $count={count} data-testid='badge'>
        {count && maxCount && count > maxCount ? (
          <FlexCenter>
            <Typography variant='textXS' color={color} fontWeight='bold'>
              {maxCount}
            </Typography>
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                color: color,
                fontSize: '0.8rem',
              }}
            />
          </FlexCenter>
        ) : (
          count && (
            <Typography variant='textXS' color={color} fontWeight='bold'>
              {count < 1 ? 1 : count}
            </Typography>
          )
        )}
      </StyledBadge>
      {children}
    </Container>
  );
};

export default Badge;
export { Badge };
