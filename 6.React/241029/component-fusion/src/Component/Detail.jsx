import { ContentH2, ContentSection } from "./Common";
import styled from "styled-components";

const ContentH2Border = styled(ContentH2)`
  border: 1px solid black;
  background-color: teal;
  color: white;
`;

export default function Detail() {
  return (
    <>
      <ContentH2Border>Detail 페이지</ContentH2Border>
      <ContentSection>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
          consequatur facere sunt sapiente mollitia animi minus sit error sequi
          eum deserunt, voluptatem quo molestiae neque suscipit ratione earum
          dignissimos!
        </p>
      </ContentSection>
    </>
  );
}
