import {useVideoConfig} from 'remotion';
import TransitionSeries from 'remotion-transition-series';

export const CircularWipe: React.FC<any> = ({
	direction = 'out',
	progress: inProgress,
	exitingElement = null,
	enteringElement = null,
}) => {
	const {width: w, height: h} = useVideoConfig();
	const radius = 0.5 * Math.sqrt(w * w + h * h);
	const isOut = direction === 'out';
	const progress = isOut ? inProgress : 1 - inProgress;
	const polygon = `circle(${radius * progress}px)`;

	return (
		<>
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
				}}
			>
				{isOut ? exitingElement : enteringElement}
			</div>
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					clipPath: polygon,
				}}
			>
				{isOut ? enteringElement : exitingElement}
			</div>
		</>
	);
};

export const HelloWorld: React.FC = () => {
	return (
		<div style={{backgroundColor: 'white', flex: 1}}>
			<div style={{opacity: 1}}>
				<TransitionSeries>
					<TransitionSeries.Sequence durationInFrames={60}>
						<div>Hello</div>
					</TransitionSeries.Sequence>

					<TransitionSeries.Transition
						durationInFrames={30}
						transitionComponent={CircularWipe}
					/>

					<TransitionSeries.Sequence durationInFrames={60}>
						<div>World</div>
					</TransitionSeries.Sequence>
				</TransitionSeries>
			</div>
		</div>
	);
};
