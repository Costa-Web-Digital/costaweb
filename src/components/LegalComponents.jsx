export function Section({ title, children }) {
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

export function Item({ children }) {
	return (
		<li className="flex items-start gap-3 text-ink-alt leading-relaxed">
			<span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
			<span>{children}</span>
		</li>
	);
}
