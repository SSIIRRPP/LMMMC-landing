import { useParams } from "react-router";

const Boat = () => {
  const { boatId } = useParams();
  console.log("boatId: ", boatId);
  return <div>{boatId}</div>;
};

export default Boat;
