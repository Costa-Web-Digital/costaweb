import { useEffect, useRef, useState } from 'react';

export function useInView() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry], obs) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					obs.unobserve(entry.target);
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return [isVisible, ref];
}
