import { Heroimage, ContentTop, ContentBottom } from "../";

const Landing = () => {
  return (
    <div className="box-border flex flex-col items-center min-h-screen bg-white">
      <Heroimage />
      <ContentTop />
      <ContentBottom />
    </div>
  );
};
export default Landing;
