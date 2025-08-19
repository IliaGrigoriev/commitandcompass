import './css/neo_hover_card.css'

export default function NeoHoverCard({ hover_name, onUserClick, imageSrc, backgroundImage, titleColor }) {
    const cardStyle = backgroundImage
      ? { background: `url('${backgroundImage}') center/cover no-repeat` }
      : { background: 'linear-gradient(-45deg, #161616 0%, #000000 100%)' };

  return (
    <div className="neo-card" style={cardStyle} onClick={onUserClick}>
      {imageSrc && (
        <div className="neo-card-image-wrapper">
          <img src={imageSrc} alt={hover_name} className="neo-card-image" />
        </div>
      )}
      <p className="neo-heading" style={titleColor ? { color: titleColor } : {}}>
        {hover_name}
      </p>
    </div>
  );
}

