function Display({ content }) {
  return (
    <div className="box">
      {content ? content : "아직 입력된 값이 없습니다.."}
    </div>
  );
}

export default Display;
