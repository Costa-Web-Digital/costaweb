import { ArrowRight } from 'lucide-react'
import { useScrollTo } from '../../hooks/useScrollTo.js'

export const CTA = () => {
	const scrollTo = useScrollTo();

	return (
		<button
			onClick={() => scrollTo('contato')}
			className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer border-0"
		>
			Quero meu site agora
			<ArrowRight className="w-5 h-5" />
		</button>
	)
}
