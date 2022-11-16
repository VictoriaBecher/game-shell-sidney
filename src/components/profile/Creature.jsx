import { css } from '@emotion/css';
import { useSelector } from 'react-redux';

export const Creature = () => {
  // reselect din redux toolkit
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const cssClass = css`
    border: 1px solid red;

    div {
      padding: 8px;
    }

    & :first-child {
      background-color: ${mainColor};
    }

    & :nth-child(2) {
      background-color: ${secondaryColor};
    }

    & :last-child {
      background-color: ${eyeColor};
    }
  `;

  return (
    <div className={cssClass}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
