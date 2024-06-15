import { memo } from "react";

const Posts = memo(function () {
  let postContent: JSX.Element[] = [];
  for (let i = 0; i < 500; i++) {
    postContent.push(<SlowComponent idx={i} />);
  }
  return (
    <div className="flex flex-col overflow-hidden overflow-y-scroll">
      {postContent}
    </div>
  );
});
export default Posts;

const SlowComponent = ({ idx }: { idx: number }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 2) {}
  return <li>post :{idx}</li>;
};
