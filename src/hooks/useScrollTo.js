import { useNavigate } from 'react-router-dom';

const SECTION_ROUTES = {
	servicos: '/servicos',
	'porque-nos': '/porque-nos',
	processo: '/processo',
	faq: '/faq',
	contato: '/contato',
};

const ROUTE_TO_SECTION = Object.fromEntries(
	Object.entries(SECTION_ROUTES).map(([section, route]) => [route, section]),
);

export function useScrollTo() {
	const navigate = useNavigate();

	return (sectionId) => {
		const route = SECTION_ROUTES[sectionId] ?? '/';
		navigate(route);
	};
}

export { SECTION_ROUTES, ROUTE_TO_SECTION };
