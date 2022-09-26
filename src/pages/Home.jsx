import axios from 'axios';
import { useState, useEffect, useContext} from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { setCategoryId, setCurrentPage} from '../redux/slices/filterSlice';
import { SearchContext } from '../App';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';

function Home () {
    const dispatch = useDispatch(); 
    const {categoryId, sort, currentPage}  = useSelector(state => state.filter);


    const {searchValue} = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }
    useEffect(() => {
        try {
            setIsLoading(true)
            
            const sortBy = sort.sortProperty.replace('-', '');
            const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
            const category = categoryId > 0 ? `&category=${categoryId}` : '';
            const search = searchValue ? `&search=${searchValue}` : '';
            
            // fetch(`https://63299d9f4c626ff832c59c25.mockapi.io/items?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`)
            //     .then((response) => response.json())
            //     .then((items) => {
            //     setItems(items)
            //     setIsLoading(false)})
            axios.get(`https://63299d9f4c626ff832c59c25.mockapi.io/items?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`)
                .then(response => {
                setItems(response.data)
                setIsLoading(false)})

        } catch (error) {
            console.error(error);
            alert('Не удалось получить данные :(');
        }
        window.scrollTo(0,0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    // const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()));
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}  />
                <Sort />
            </div>
            <h2 className="content__title">Суши и роллы</h2>
            <div className="content__items"> 
                {isLoading 
                ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                : items.map((obj) =>  (
                <SushiBlock
                    key={obj.id}
                    {...obj}
                />))}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}

export default Home;