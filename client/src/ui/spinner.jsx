export function Spinner({ size = 'sm' }) {
    const dims = size === 'sm' ? 'h-4 w-4' : 'h-6 w-6';
    return <div className={
        `animate-spin rounded-full border-2 border-t-transparent ${dims}`
    } />;
}
