import { CustomerChart } from "./_sub-components/customer-chart";
import { SimpleCard } from "./_sub-components/simple-card";

export const Cards = () => {
  return (
    <div className="grid gap-2 grid-cols-3">
      <div className="col-span-2">
        <div className="grid gap-2 grid-cols-2">
          <div className="col-span-1">
            <SimpleCard />
          </div>
          <div className="col-span-1">
            <SimpleCard />
          </div>
          <div className="col-span-1">
            <SimpleCard />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col space-y-2">
        <div>
          <CustomerChart />
        </div>
        <div>
          <SimpleCard />
        </div>
      </div>
    </div>
  );
};
