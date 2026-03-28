import { useNavigate } from 'react-router-dom';

// Maps section IDs to route paths and back
const SECTION_ROUTES = {
	servicos: '/servicos',
	'porque-nos': '/porque-nos',
	processo: '/processo',
	faq: '/faq',
	contato: '/contato',
};

export function useScrollTo() {
	const navigate = useNavigate();

	return (sectionId) => {
		const route = SECTION_ROUTES[sectionId] ?? '/';
		navigate(route);
	};
}

export { SECTION_ROUTES };
