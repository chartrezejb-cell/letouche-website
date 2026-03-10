export function Input({ className = '', placeholder, ...props }) {
  return <input className={className} placeholder={placeholder} {...props} />;
}
