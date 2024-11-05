import useIsBottom from "./Hook/useIsBottom";
import ImageList from "./Components/ImageList";
import { useEffect, useState } from "react";
import Loding from "./Components/Loding";

function App() {
  //이미지 데이터를 관리
  const [imageList, setImageList] = useState([]);

  // 페이지 데이터를 관리
  const [pageToFetch, setPageToFetch] = useState(1);

  //로딩 상태를 관리
  const [isLoding, setIsLoding] = useState(false);

  console.log(imageList);

  const isBottom = useIsBottom();

  const fetchImages = async (pageNum) => {
    try {
      isLoding(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=5`
      );

      if (!response.ok) {
        throw new Error("이미지 다운로드중에 문제가 발생했습니다.");
      }

      const data = await response.json();

      setImageList((prevImageList) => {
        return [...prevImageList, ...data];
      });
      isLoding(false);
    } catch (error) {
      console.error(error);
      isLoding(false);
    }
  };

  useEffect(() => {
    if (isBottom) {
      setPageToFetch((prevpageToFetch) => {
        return prevpageToFetch + 1;
      });
    }
  }, [isBottom]);

  useEffect(() => {
    fetchImages(pageToFetch);
  }, [pageToFetch]);

  return (
    <div>
      <ImageList imageList={imageList} />
      <Loding />
    </div>
  );
}
export default App;
