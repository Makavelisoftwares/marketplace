import React from "react";
import { ProductTableAndForm } from "./_components/product-table-form";
import { ProductForm } from "./_components/product-form";
import { ProductTable } from "./_components/product-table";

function ProductPage() {
  return (
    <div>
      <div>
        <ProductTableAndForm />
      </div>

      <div>
        <div className="product-form hidden">
          <ProductForm />
        </div>
        <div className="product-table mt-4">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
