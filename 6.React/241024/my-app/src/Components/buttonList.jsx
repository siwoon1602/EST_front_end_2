function Button(props) {
  return (
    <>
      <button onClick={() => props.onClick(props.State)}>
        기분이 : {props.State}{" "}
      </button>
    </>
  );
}

function ButtonList({ onButtonClick }) {
  return (
    <div className="align">
      <Button State="좋아요!" onClick={onButtonClick} />
      <Button State="정말 좋아요!" onClick={onButtonClick} />
      <Button State="최고에요!" onClick={onButtonClick} />
      <Button State="미쳤어요!" onClick={onButtonClick} />
    </div>
  );
}
export default ButtonList;
