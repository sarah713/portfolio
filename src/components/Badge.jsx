export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-200 bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700">
      {children}
    </span>
  );
}


