import TabBar from "../../TabBar/TabBar";
import Delivered from "./Delivered/Delivered";
import Processing from "./Processing/Processing";

const tabs = [
  {
    name: "Processing",
    content: (
      <div>
        <Processing />
      </div>
    ),
  },
  {
    name: "Delivered",
    content: (
      <div>
        <Delivered />
      </div>
    ),
  },
];

const Orders = () => {
  return <TabBar tabs={tabs} />;
};

export default Orders;
