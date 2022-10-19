import React from 'react';
import { useEffect, useCallback} from 'react';
import { useSelector} from 'react-redux';

import { setCategoryId, setCurrentPage} from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selector';
import { Sort, Categories, Pagination, SushiBlock, Skeleton} from '../components';
import { useAppDispatch } from '../redux/store';
import { selectSushiData } from '../redux/sushi/selector';
import { fetchSushi } from '../redux/sushi/asyncActions';


const Home: React.FC = () => {
    const dispatch = useAppDispatch(); 

    const { items, status } = useSelector(selectSushiData);
    const {categoryId, sort, currentPage, searchValue}  = useSelector(selectFilter);
    
    const onChangeCategory = useCallback((index: number) => {
        dispatch(setCategoryId(index))
   } , []);


    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    };

    
    const getSushi = () => {            
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `search=${searchValue}` : '';
        

        dispatch(
            fetchSushi({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            })
        )  
        window.scrollTo(0, 0);
    };

    useEffect(() => {
            getSushi();
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);
    

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}  />
                <Sort sort={sort} />
            </div>
            {status === 'error' 
                ?   <div className="content__error-info">
                        <h2>Произошла ошибка 😕</h2>
                        <p>К сожалению, не удалось получить данные. Попробуйте, пожалуйста, позже.</p>
                    </div>
                :   <>
                    <h2 className="content__title">Суши и роллы</h2>
                    <div className="content__items"> 
                        {status === 'loading'
                            ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                            : items.map((obj: any) =>  (
                                <SushiBlock key={obj.id} {...obj} />))
                        }
                    </div>
                    </>
            }
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}

export default Home;