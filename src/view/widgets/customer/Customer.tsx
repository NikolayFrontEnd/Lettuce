import { useScrollToTop } from '../../../hooks/useScrollToTop';
import { CustomerTable } from '../../components/customerTableFolder/customerTable/CustomerTable';
import { Paginator } from '../../components/paginator/Paginator';
import { RefreshButton } from '../../primitives/refreshButton/RefreshButton';
import { ScrollToTopButton } from '../../primitives/scrollToTopButton/ScrollToTopButton';
import { SearchBar } from '../../primitives/searchBar/SearchBar';
import style from './Customer.module.css';

export const Customer = () => {
      const { showButton, scrollToTop } = useScrollToTop();

    return (
    <div className={style.MainBlockConteiner}>
      <div className={style.toolbar}>
        <SearchBar />
        <div className={style.toolbar__controls}>
          <RefreshButton />
          <Paginator/>
        </div>
      </div>
      <CustomerTable />
      <ScrollToTopButton  visible={showButton} onClick={scrollToTop}/>
    </div>

    )
}