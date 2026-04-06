import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CTA = () => {
	return (
		<Link
			to="/contato"
			className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
		>
			Quero meu site agora
			<ArrowRight className="w-5 h-5" />
		</Link>
	)
}
