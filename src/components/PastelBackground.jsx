export function PastelBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0">
      {/* Softer, less vibrant gradient with lavender hues */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-amber-50 to-slate-50 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tr from-violet-100/70 via-rose-100/40 to-sky-100/50 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-200/45 via-transparent to-transparent -z-10" />
    </div>
  );
}


