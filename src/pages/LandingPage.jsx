import { useEffect } from 'react';
import { MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const LINKS = [
	{
		label: 'WhatsApp',
		href: 'https://wa.me/5511999639567',
		icon: MessageCircle,
	},
	{
		label: 'E-mail',
		href: 'mailto:contato@costaweb.com.br',
		icon: Mail,
	},
	{
		label: 'Site principal',
		href: '/',
		icon: Globe,
	},
];

const SOCIALS = [
	{
		label: 'Instagram',
		href: 'https://instagram.com/costaweb.com.br',
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/company/costaweb',
	},
];

function InstagramIcon({ className }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<circle cx="12" cy="12" r="5" />
			<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
		</svg>
	);
}

function LinkedinIcon({ className }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

const SOCIAL_ICONS = {
	Instagram: InstagramIcon,
	LinkedIn: LinkedinIcon,
};

function LinkButton({ link, index, isVisible }) {
	const Icon = link.icon;

	return (
		<a
			href={link.href}
			target={link.href.startsWith('http') || link.href.startsWith('mailto') ? '_blank' : undefined}
			rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
			className={`glass rounded-2xl p-4 card-hover flex items-center gap-4 w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
			style={{ transitionDelay: `${(index + 1) * 100}ms` }}
		>
			<div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shrink-0">
				<Icon className="w-5 h-5 text-white" />
			</div>
			<span className="flex-1 text-ink font-semibold text-center font-display">
				{link.label}
			</span>
			<ArrowRight className="w-4 h-4 text-muted shrink-0" />
		</a>
	);
}

function SocialIcon({ social, index, isVisible }) {
	const Icon = SOCIAL_ICONS[social.label];

	return (
		<a
			href={social.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={social.label}
			className={`w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-border transition-colors transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
			style={{ transitionDelay: `${(index + LINKS.length + 2) * 100}ms` }}
		>
			<Icon className="w-5 h-5 text-muted hover:text-primary transition-colors" />
		</a>
	);
}

export default function LandingPage() {
	const [isVisible, sectionRef] = useInView();

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'CostaWeb — Links';
	}, []);

	return (
		<section className="min-h-screen bg-surface-alt relative overflow-hidden flex items-center justify-center">
			<div className="absolute top-0 left-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-5 rounded-full blur-3xl" />

			<div
				ref={sectionRef}
				className="relative z-10 w-full max-w-sm mx-auto px-6 py-16 flex flex-col items-center gap-8"
			>
				<div
					className={`flex flex-col items-center gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					<div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
						<span className="text-white font-bold text-3xl font-display">C</span>
					</div>
					<h1 className="text-2xl font-bold font-display text-ink">
						CostaWeb
					</h1>
					<p className="text-muted text-sm text-center">
						Transformando ideias em realidade digital
					</p>
				</div>

				<div className="w-full flex flex-col gap-3">
					{LINKS.map((link, i) => (
						<LinkButton
							key={link.label}
							link={link}
							index={i}
							isVisible={isVisible}
						/>
					))}
				</div>

				<div
					className={`w-full h-px bg-border transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
					style={{ transitionDelay: `${(LINKS.length + 1) * 100}ms` }}
				/>

				<div className="flex gap-3">
					{SOCIALS.map((social, i) => (
						<SocialIcon
							key={social.label}
							social={social}
							index={i}
							isVisible={isVisible}
						/>
					))}
				</div>

				<p
					className={`text-muted text-xs mt-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
					style={{ transitionDelay: `${(LINKS.length + SOCIALS.length + 2) * 100}ms` }}
				>
					© {new Date().getFullYear()} CostaWeb
				</p>
			</div>
		</section>
	);
}
