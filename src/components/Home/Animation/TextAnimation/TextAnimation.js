import React from 'react';
import Typical from 'react-typical';
import '../TextAnimation/TextAnimation.css'

const TextAnimation = () => {
	return (
		<div >
			<Typical
				steps={[
					'Web Developer',
					1500,
					'MERN Stack developer',
					1500,
					'Blogger',
					1500,
				]}
				loop={Infinity}
				wrapper="h1"
			/>
		</div>
	);
};

export default TextAnimation;