export function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-stone-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-md card-hover",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}


