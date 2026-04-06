import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

const quickLinks = [
	{ label: 'Serviços', to: '/servicos' },
	{ label: 'Por que nós', to: '/porque-nos' },
	{ label: 'Processo', to: '/processo' },
	{ label: 'FAQ', to: '/faq' },
];

export default function Footer() {

	return (
		<footer className="py-16 bg-surface border-t border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					<div>
						<Link to="/" className="flex items-center gap-2 mb-4">
							<div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
								<span className="text-white font-bold text-xl font-display">C</span>
							</div>
							<span className="text-xl font-bold font-display text-ink">
								CostaWeb
							</span>
						</Link>
						<p className="text-muted text-sm">
							Transformando ideias em realidade digital
						</p>
					</div>

					<div>
						<h3 className="font-semibold text-ink mb-4">Links Rápidos</h3>
						<ul className="space-y-3">
							{quickLinks.map((link) => (
								<li key={link.label}>
									<Link
										to={link.to}
										className="text-muted hover:text-primary transition-colors text-sm"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-ink mb-4">Contato</h3>
						<div className="space-y-3">
							<a
								href="https://wa.me/5511999639567"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
							>
								<MessageCircle className="w-5 h-5" />
								<span className="text-sm">(11) 99963-9567</span>
							</a>
							<a
								href="mailto:contato@costaweb.com.br"
								className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
							>
								<Mail className="w-5 h-5" />
								<span className="text-sm">contato@costaweb.com.br</span>
							</a>
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-muted text-sm">
						© {new Date().getFullYear()} CostaWeb. Todos os direitos reservados.
					</p>
					<div className="flex gap-6">
						<Link
							to="/politica-de-privacidade"
							className="text-muted hover:text-primary transition-colors text-sm"
						>
							Política de Privacidade
						</Link>
						<Link
							to="/termos-de-uso"
							className="text-muted hover:text-primary transition-colors text-sm"
						>
							Termos de Uso
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
