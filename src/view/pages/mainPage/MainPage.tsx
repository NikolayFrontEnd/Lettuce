import { useState } from "react";
import { Header } from "../../components/header/Header";
import { ExecutedMembershipCancellation } from "../../widgets/executedMembershipCancellation/ExecutedMembershipCancellation";
import { ScheduledMembershipCancellation } from "../../widgets/scheduledMembershipCancellation/ScheduledMembershipCancellation";
import { CustomerWidget } from "../../widgets/customer/CustomerWidget";
export type PageType = 0 | 1 | 2;
export const MainPage = () => {
  const [page, setPage] = useState<PageType>(0);
  const changePage = (page: PageType): void => {
    setPage(page);
  };
  return (
    <>
      <Header page={page} changePage={changePage} />
      {page === 0 && <CustomerWidget />}
      {page === 1 && <ScheduledMembershipCancellation />}
      {page === 2 && <ExecutedMembershipCancellation />}
    </>
  );
};
