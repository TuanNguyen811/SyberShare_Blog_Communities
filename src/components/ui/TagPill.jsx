export default function TagPill({ tag, count, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
    >
      <span>#{tag}</span>
      {count && (
        <span className="text-xs opacity-60">({count})</span>
      )}
    </button>
  );
}
