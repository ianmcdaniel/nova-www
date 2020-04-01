import React from 'react';

import Styled from './Spinner.styled';

const Spinner = () => (
	<Styled.Spinner>
		<Styled.Wave>
			{[1, 2, 3, 4, 5].map(index => (
				<Styled.Rect index={index} key={index} />
			))}
		</Styled.Wave>
	</Styled.Spinner>
);

export default Spinner;
