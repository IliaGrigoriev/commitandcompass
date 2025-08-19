// Block.js
export default function Block({ children, maxWidth }) {
  return (
    <div className="block" style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}>
      {children}
    </div>
  );
}
