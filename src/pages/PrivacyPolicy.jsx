import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Política de Privacidade — CostaWeb';
	}, []);

	return (
		<div className="min-h-screen bg-surface">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-10 group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					Voltar ao início
				</Link>

				<div className="flex items-center gap-4 mb-8">
					<div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
						<Shield className="w-6 h-6 text-white" />
					</div>
					<div>
						<h1 className="text-3xl sm:text-4xl font-bold font-display text-ink">
							Política de Privacidade
						</h1>
						<p className="text-muted text-sm mt-1">
							Última atualização: março de 2025
						</p>
					</div>
				</div>

				<div className="prose-content space-y-8">
					<Section>
						<p className="text-ink-alt leading-relaxed">
							A <strong>CostaWeb</strong> tem o compromisso com a privacidade e a proteção dos seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as suas informações ao utilizar nosso site e serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
						</p>
					</Section>

					<Section title="1. Quais dados coletamos">
						<p className="text-ink-alt leading-relaxed mb-4">
							Podemos coletar os seguintes tipos de informações:
						</p>
						<ul className="space-y-2">
							<Item>
								<strong>Dados de contato:</strong> nome, e-mail e número de telefone/WhatsApp fornecidos voluntariamente em formulários de contato.
							</Item>
							<Item>
								<strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas e tempo de permanência, coletados automaticamente por ferramentas de análise.
							</Item>
							<Item>
								<strong>Cookies:</strong> pequenos arquivos de texto armazenados no seu dispositivo para melhorar a experiência de navegação.
							</Item>
						</ul>
					</Section>

					<Section title="2. Como usamos seus dados">
						<p className="text-ink-alt leading-relaxed mb-4">
							Utilizamos as informações coletadas para:
						</p>
						<ul className="space-y-2">
							<Item>Responder às suas dúvidas e solicitações de orçamento;</Item>
							<Item>Enviar comunicações sobre nossos serviços, quando autorizado;</Item>
							<Item>Analisar o desempenho e melhorar nosso site;</Item>
							<Item>Cumprir obrigações legais e regulatórias.</Item>
						</ul>
					</Section>

					<Section title="3. Compartilhamento de dados">
						<p className="text-ink-alt leading-relaxed">
							A CostaWeb <strong>não vende, aluga ou comercializa</strong> seus dados pessoais com terceiros. Podemos compartilhá-los apenas com ferramentas de infraestrutura essenciais para a operação do site (como Google Analytics e plataformas de hospedagem), sempre em conformidade com a LGPD.
						</p>
					</Section>

					<Section title="4. Cookies">
						<p className="text-ink-alt leading-relaxed">
							Nosso site utiliza cookies de sessão e cookies de análise para entender como os visitantes interagem com o conteúdo. Você pode desabilitar o uso de cookies nas configurações do seu navegador, porém algumas funcionalidades podem ser afetadas.
						</p>
					</Section>

					<Section title="5. Armazenamento e segurança">
						<p className="text-ink-alt leading-relaxed">
							Seus dados são armazenados em servidores seguros e adotamos medidas técnicas e organizacionais adequadas para protegê-los contra acesso não autorizado, alteração, divulgação ou destruição. Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política.
						</p>
					</Section>

					<Section title="6. Seus direitos">
						<p className="text-ink-alt leading-relaxed mb-4">
							Conforme a LGPD, você tem o direito de:
						</p>
						<ul className="space-y-2">
							<Item>Confirmar a existência de tratamento dos seus dados;</Item>
							<Item>Acessar, corrigir ou excluir seus dados pessoais;</Item>
							<Item>Revogar o consentimento a qualquer momento;</Item>
							<Item>Solicitar a portabilidade dos dados;</Item>
							<Item>Obter informações sobre o compartilhamento de dados.</Item>
						</ul>
						<p className="text-ink-alt leading-relaxed mt-4">
							Para exercer seus direitos, entre em contato conosco pelo e-mail{' '}
							<a
								href="mailto:contato@costaweb.com.br"
								className="text-primary hover:underline font-medium"
							>
								contato@costaweb.com.br
							</a>.
						</p>
					</Section>

					<Section title="7. Links externos">
						<p className="text-ink-alt leading-relaxed">
							Nosso site pode conter links para sites de terceiros. A CostaWeb não se responsabiliza pelas práticas de privacidade ou pelo conteúdo desses sites externos. Recomendamos a leitura das políticas de privacidade de cada site que você visitar.
						</p>
					</Section>

					<Section title="8. Alterações nesta política">
						<p className="text-ink-alt leading-relaxed">
							Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. A data da última atualização sempre estará indicada no início desta página.
						</p>
					</Section>

					<Section title="9. Contato">
						<p className="text-ink-alt leading-relaxed">
							Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato:
						</p>
						<div className="mt-4 glass rounded-2xl p-6 space-y-2">
							<p className="text-ink font-semibold">CostaWeb</p>
							<p className="text-ink-alt text-sm">
								E-mail:{' '}
								<a href="mailto:contato@costaweb.com.br" className="text-primary hover:underline">
									contato@costaweb.com.br
								</a>
							</p>
							<p className="text-ink-alt text-sm">
								WhatsApp:{' '}
								<a href="https://wa.me/5511999639567" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
									(11) 99963-9567
								</a>
							</p>
						</div>
					</Section>
					<div className="flex items-center gap-4 mb-8">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-10 group"
						>
							<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
							Voltar ao início
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Section({ title, children }) {
	return (
		<div className="border-b border-border pb-8 last:border-0 last:pb-0">
			{title && (
				<h2 className="text-xl font-bold font-display text-ink mb-4">
					{title}
				</h2>
			)}
			{children}
		</div>
	);
}

function Item({ children }) {
	return (
		<li className="flex items-start gap-3 text-ink-alt leading-relaxed">
			<span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
			<span>{children}</span>
		</li>
	);
}
