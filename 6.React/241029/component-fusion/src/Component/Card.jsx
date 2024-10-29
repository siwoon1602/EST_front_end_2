const ContCard = ({ children }) => {
  return <div className="cont-card">{children}</div>;
};

const ProductImage = ({ src, alt }) => {
  return <img src={src} alt={alt}></img>;
};
const ProductTitle = ({ children }) => {
  return <h1>{children}</h1>;
};
const ProductDescription = ({ children }) => {
  return <p>{children}</p>;
};
const ProductSubTitle = ({ children }) => {
  return <h2 c>{children}</h2>;
};
