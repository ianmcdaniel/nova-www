import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animationDuration = 1200;
const delayRange = 400;
const rectCount = 5;
const spinnerMargin = '40px auto';
const spinnerSize = 50;

//
// Taken from: http://tobiasahlin.com/spinkit/
// https://github.com/tobiasahlin/SpinKit
//
const waveStretchDelay = keyframes`
	0%,
	40%,
	100% {
		opacity: 0.4;
		transform: scaleY(0.4);
	}
	20% {
		opacity: 1;
		transform: scaleY(1);
	}
`;

const Rect = styled.div`
  display: inline-block;
  width: 5px;
  margin: 1px;
  height: 100%;

  animation: ${waveStretchDelay} ${animationDuration}ms infinite ease-in-out;
  animation-delay: ${props =>
    `${-animationDuration + (delayRange / (rectCount - 1)) * props.index}ms`};
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wave = styled.div`
  width: ${spinnerSize * 1.25}px;
  height: ${spinnerSize}px;
  margin: ${spinnerMargin};
  font-size: 10px;
  text-align: center;
`;

export default { Rect, Spinner, Wave };
