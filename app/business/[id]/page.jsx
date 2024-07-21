import React from "react";
import { WelcomeBanner } from "../_components/_sub-components/welcome-banner";
import { CustomerChart } from "../_components/_sub-components/customer-chart";
import { getCategories } from "@/actions/category.action";
import { CreateAlertCategory } from "../_components/alert-boxes/create-category";
import { getSuppliers } from "@/actions/supplier.action";
import { Check } from "lucide-react";
import { CreateAlertSupplier } from "../_components/alert-boxes/create-supplier";
import { Cards } from "../_components/Cards";

async function BusinessPage({ params }) {
  const b_id = params.id;
  const { categories } = await getCategories(b_id);
  const { suppliers } = await getSuppliers(b_id);

  return (
    <div>
      <div className="w-full ">
        <WelcomeBanner />
      </div>

      <div>
        {categories.length == 0 ? (
          <div>
            <div className="h-[40px] w-[40px] rounded-full text-rose-500 text-4xl mt-4 border-2 border-red-500 flex items-center justify-center p-1 font-bold">
              1
            </div>
            <div className="flex items-center flex-col justify-center h-[50vh]">
              <div className="text-sm">
                Start by creating a category for your product
              </div>
              <CreateAlertCategory b_id={b_id} />
            </div>
          </div>
        ) : (
          <>
            {suppliers.length == 0 ? (
              <div>
                <div className="my-2 text-emerald-500">
                  🎉🎉Huree!!! You completed your first step
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-[40px] w-[40px] rounded-full text-white text-4xl mt-4 border-2 bg-emerald-500 border-emerald-500  flex items-center justify-center p-1 font-bold">
                    <Check />
                  </div>
                  <div className="w-[50px] h-[2px] flex bg-zinc-400/50" />
                  <div className="h-[40px] w-[40px] rounded-full text-4xl mt-4 border-2  text-rose-500 border-red-500 flex items-center justify-center p-1 font-bold">
                    2
                  </div>
                </div>

                <div className="flex items-center flex-col justify-center h-[50vh]">
                  <div className="text-sm">Save a supplier for your stocks</div>
                  <CreateAlertSupplier b_id={b_id} />
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <Cards />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BusinessPage;
