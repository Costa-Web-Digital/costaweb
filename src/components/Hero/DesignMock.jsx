export const DesignMock = () => (
	<div className="relative animate-float">
		<div className="absolute inset-0 gradient-bg opacity-20 rounded-3xl blur-2xl" />

		<div className="relative glass rounded-3xl p-8 border border-glass-border">
			<div className="flex items-center gap-4 mb-6">
				<div className="flex gap-2">
					<div className="w-3 h-3 rounded-full bg-red-400" />
					<div className="w-3 h-3 rounded-full bg-yellow-400" />
					<div className="w-3 h-3 rounded-full bg-green-400" />
				</div>
				<div className="flex-1 glass px-4 py-1.5 rounded-lg text-sm text-muted">
					seusite.com.br
				</div>
			</div>

			<div className="space-y-4">
				<div className="h-4 bg-border rounded w-3/4" />
				<div className="h-4 bg-border rounded w-1/2" />
				<div className="h-20 gradient-bg rounded-xl flex items-center justify-center">
				</div>
				<div className="grid grid-cols-3 gap-3">
					<div className="h-16 bg-border rounded-xl" />
					<div className="h-16 bg-border rounded-xl" />
					<div className="h-16 bg-border rounded-xl" />
				</div>
			</div>

			<div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-glass-border">
				<span className="text-sm font-semibold text-primary">Completamente personalizável</span>
			</div>

			<div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-glass-border">
				<span className="text-sm font-semibold text-secondary">100% Responsivo</span>
			</div>
		</div>
	</div>
);
