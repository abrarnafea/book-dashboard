import { lusitana } from "@/components/shared/fonts";
import Search from "@/components/shared/search";
import { CategoriesTableSkeleton } from "@/components/shared/skeletons";
import Pagination from "@/components/shared/stores/Pagination";
import CustomersTable from "@/components/shared/stores/table";
import { fetchStoresPages } from "@/lib/actions/adminActions";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Stores",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{  query?: string;
      page?: number }>;
}) {

   const query = (await searchParams).query ;
    const currentPage = (await searchParams).page || 1
    const params = query || null;
const totalPages = await fetchStoresPages(params)
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>المتاجر</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search
          href="stores"
          placeholder="ابحث عن المتاجر..."
          query={query || ""}
        />
      </div>
      <Suspense
        key={`${query}-${currentPage}`}
        fallback={<CategoriesTableSkeleton />}
      >
        <CustomersTable query={params} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
