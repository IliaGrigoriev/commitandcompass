import './css/background_image.css';
const BackgroundImage = ({ image }) => (
  <div
    className = "background-image"
    style = {{
      backgroundImage: `url(${image})`,
    }}
  />
);

export default BackgroundImage;
