import React from "react";
import { FormCategory } from "./_components/form-category";
import { CategoryTable } from "./_components/category-table";

async function CategoryPage() {
  return (
    <div>
      <div>
        <FormCategory />
      </div>

      <div>
        <CategoryTable />
      </div>
    </div>
  );
}

export default CategoryPage;
