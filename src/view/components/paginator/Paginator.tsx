import { PageSizeSelector } from '../../primitives/pageSizeSelector/PageSizeSelector'
import { PaginationControl } from '../../primitives/paginationControls/PaginationConstrol'
import { PaginatorInfo } from '../../primitives/paginatorInfo/PaginatorInfo'
import style from './Paginator.module.css'

export const Paginator = () => {
    
    return (<>
<PaginationControl/>
<PageSizeSelector/>
<PaginatorInfo/>
    </>)
}