import { useEffect, useState } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { Paginator } from "../../components/paginator/Paginator";
import { RefreshButton } from "../../primitives/refreshButton/RefreshButton";
import { ScrollToTopButton } from "../../primitives/scrollToTopButton/ScrollToTopButton";
import { SearchBar } from "../../primitives/searchBar/SearchBar";
import style from "./Customer.module.css";
import { customerService } from "../../../domain/services/CustomerService";
import type { DataPage } from "../../../domain/valueObjects/DataPage";
import type { Customer } from "../../../domain/entities/Customer";
import { CustomerTable } from "../../components/customerTable/CustomerTable";

export const CustomerWidget = () => {
  const { showButton, scrollToTop } = useScrollToTop();

  const [data, setData] = useState<DataPage<Customer> | null>(null);
  const [table, setTable] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const result = await customerService.getAllCustomers(
          table.currentPage,
          table.pageSize,
        );
        setData(result);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    };

    fetchCustomers();
  }, [table.currentPage, table.pageSize]);

  const handleTableChange = (page: number) => {
    setTable((prev) => ({ ...prev, currentPage: page }));
  };

  const handleTablePageSizeChange = (pageSize: number) => {
    setTable({ currentPage: 1, pageSize });
  };

  return (
    <div className={style.MainBlockConteiner}>
      <div className={style.toolbar}>
        <SearchBar />
        <div className={style.toolbar__controls}>
          <RefreshButton />
          <Paginator
            pageCount={data?.pageCount ?? 0}
            currentPage={table.currentPage}
            onPageChange={handleTableChange}
            onPageSizeChange={handleTablePageSizeChange}
            pageSize={table.pageSize}
            totalItems={data?.itemCount ?? 0}
          />{" "}
        </div>
      </div>
      <CustomerTable data={data?.items ?? []} />
      <ScrollToTopButton visible={showButton} onClick={scrollToTop} />
    </div>
  );
};
