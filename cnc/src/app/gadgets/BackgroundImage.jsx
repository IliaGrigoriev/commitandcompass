import './css/background_image.css';
/*
const BackgroundImage = ({
  image,
  focusX = 0.5,
  focusY = 0.5,
  fadeStrength = 0.5
}) => {
  const fade = `radial-gradient(
    circle at ${focusX * 100}% ${focusY * 100}%,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) ${fadeStrength * 100}%,
    rgba(0, 0, 0, 0) 100%
  )`;

  return (
    <div
      className="background-image-fade"
      style={{
        backgroundImage: `url(${image})`,
        WebkitMaskImage: fade,
        maskImage: fade
      }}
    />
  );
};

export default BackgroundImage;
*/

/*
const BackgroundImage = ({ image }) => (
  <div
    className="background-image"
    style={{ backgroundImage: `url(${image})` }}
  />
);

export default BackgroundImage;
*/

// BackgroundImage.jsx
import './css/background_image.css';

const BackgroundImage = ({ image }) => (
  <div
    className="background-image"
    style={{
      backgroundImage: `url(${image})`,
    }}
  />
);

export default BackgroundImage;
