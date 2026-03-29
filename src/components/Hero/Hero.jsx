import { useInView } from '../../hooks/useInView.js';
import { Background } from './Background.jsx';
import { Highlights } from './Highlights.jsx';
import { DesignMock } from './DesignMock.jsx';
import { CTA } from './CTA.jsx';
import { Tagline } from './Tagline.jsx';
import { Title } from './Title.jsx';

export default function Hero() {
	const [isVisible, sectionRef] = useInView();
	const animationClasses = `transition-all duration-1000 ${
		isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
	}`;

	return (
		<section
			ref={sectionRef}
			className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
		>
			<Background />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className={animationClasses}>
						<Title />
						<Tagline />
						<CTA />
						<Highlights />
					</div>

					<div className={`relative ${animationClasses} delay-300`}>
						<DesignMock />
					</div>
				</div>
			</div>
		</section>
	);
}
