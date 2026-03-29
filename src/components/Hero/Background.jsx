export const Background = () => (
	<>
		<div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

		<div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
		<div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl" />
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl" />
	</>
);
