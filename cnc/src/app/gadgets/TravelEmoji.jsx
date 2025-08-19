const TravelEmoji = ({ mode }) => {
  let emoji = '🚐';
  let label = 'camper';

  switch (mode) {
    case 'ship':
      emoji = '🚢';
      label = 'ship';
      break;
    case 'hut':
      emoji = '🛖❄️';
      label = 'snowy hut';
      break;
    case 'terrain':
      emoji = '🏔️❄️';
      label = 'snowy terrain';
      break;
    default:
      break;
  }

  return (
    <span role="img" aria-label={label} style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>
      {emoji}
    </span>
  );
};

export default TravelEmoji;
