import { css, keyframes } from '@emotion/css';
import { useSelector } from 'react-redux';

export const Creature = () => {
  // reselect din redux toolkit
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const cssClass = css`
    padding-top: 20px;

    .creature {
      margin-top: 10px;
      padding: 8px;
      background-color: ${mainColor};
      border: 3px solid ${secondaryColor};
      width: 220px;
      height: 160px;
      border-radius: 30px;
      position: relative;
    }

    .creature_eyes {
      position: relative;
      margin-top: 55px;
    }

    .eye {
      border-radius: 50%;
      background-color: #fff;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -10px;
      overflow: hidden;
    }

    .creature__eye {
      position: absolute;
    }

    .creature__left_eye {
      left: 54px;
    }

    .creature__right_eye {
      right: 54px;
    }

    .creature__eye .eye__iris {
      position: relative;
      top: 5px;
    }

    .eye__iris {
      background-color: ${eyeColor};
      height: 7px;
      width: 7px;
      border-radius: 50%;
    }

    .eyelid {
      background-color: ${secondaryColor};
      position: absolute;
      top: -35px;
      width: 35px;
      height: 35px;
    }

    @keyframes blink {
      0% {
        transform: translate(0, 0);
      }

      25% {
        transform: translate(0, 35px);
      }

      50% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    .eye .eyelid {
      animation: blink 2s forwards linear infinite;
    }

    .creature__nose {
      margin-top: 10px;
    }

    .nose {
      width: 60px;
      height: 50px;
      border-radius: 20px;
      position: relative;
      background-color: ${secondaryColor};
      top: 14px;
      margin: 0 auto;
    }

    .nose__nostril {
      background-color: ${mainColor};
      height: 7px;
      width: 7px;
      border-radius: 50%;
      position: absolute;
      top: 20px;
    }

    .nose__nostrill_left {
      left: 16px;
    }

    .nose__nostrill_right {
      right: 16px;
    }
  `;

  return (
    <div className={cssClass}>
      <div className="creature">
        <div className="creature_eyes">
          <div className="eye creature__eye creature__left_eye">
            <div className="eye__iris"></div>
            <div className="eyelid"></div>
          </div>

          <div className="eye creature__eye creature__right_eye">
            <div className="eye__iris"></div>
            <div className="eyelid"></div>
          </div>
        </div>

        <div className="creature__nose">
          <div className="nose">
            <div className="nose__nostril nose__nostrill_left"></div>
            <div className="nose__nostril nose__nostrill_right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
