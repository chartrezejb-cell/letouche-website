export function Button({ className = '', children, onClick, size, variant, ...props }) {
  return <button className={className} onClick={onClick} {...props}>{children}</button>;
}
