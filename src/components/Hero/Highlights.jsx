export const Highlights = () => (
	<div className="flex items-center gap-8 mt-10">
		<div aria-label="15 anos de experiência">
			<p className="text-3xl font-bold bg-gradient-to-br from-secondary to-tertiary text-transparent bg-clip-text">15 anos</p>
			<p className="text-sm text-muted">de experiência</p>
		</div>
		<div className="w-px h-12 bg-border" aria-hidden="true" />
		<div aria-label="98% de clientes satisfeitos">
			<p className="text-3xl font-bold bg-gradient-to-br from-secondary to-tertiary text-transparent bg-clip-text">98%</p>
			<p className="text-sm text-muted">clientes satisfeitos</p>
		</div>
		<div className="w-px h-12 bg-border" aria-hidden="true" />
		<div aria-label="50 sites entregues">
			<p className="text-3xl font-bold bg-gradient-to-br from-secondary to-tertiary text-transparent bg-clip-text">50</p>
			<p className="text-sm text-muted">sites entregues</p>
		</div>
	</div>
);
