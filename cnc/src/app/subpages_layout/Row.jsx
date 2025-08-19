// Row.js
export default function Row({ children, single = false }) {
  return (
    <div className={`row ${single ? 'single' : ''}`}>
      {children}
    </div>
  );
}
