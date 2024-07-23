import React from "react";
import { BusinessName } from "./_components/business-name";
import { getBusiness } from "@/actions/business.action";
import { Products } from "./_components/products";

async function PosPage({ searchParams }) {
  const b_id = searchParams.id;
  const { biz: pos_business } = await getBusiness(b_id);

  return (
    <div className="p-2">
      <div>
        <BusinessName pos_business={pos_business} />
      </div>

      <div>
        <Products biz_products={pos_business?.Product} />
      </div>
    </div>
  );
}

export default PosPage;
