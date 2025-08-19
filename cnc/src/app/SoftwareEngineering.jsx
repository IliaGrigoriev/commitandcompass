import './gadgets/css/coding_bear.css'

const base = import.meta.env.BASE_URL; // "/"
const coding_bear = `${base}photos/cozy_coding_bear.png`;

const SoftwareEngineering = () => {
  return (
          <div className="relative w-fit mask-gradient">
            <img src={coding_bear} alt="Logo" className="w-full h-auto" />
          </div>
      );
};

export default SoftwareEngineering;