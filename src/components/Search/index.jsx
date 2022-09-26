import { useContext, useRef, useState, useCallback } from 'react'; 
import debounce from 'lodash.debounce';

import styles from './Search.module.scss'
import btnRemove from '../../assets/img/btnRemove.svg';
import { SearchContext } from '../../App';

const Search = () => {
    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 500)
    , [])

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return(
        <div className={styles.searchBlock}>
                <input 
                    ref ={inputRef} 
                    className={styles.input}
                    value={value}
                    type="text"
                    placeholder="Поиск..." 
                    onChange={onChangeInput}/>
                {value && <img 
                    className={styles.imgRemove}
                    onClick={onClickClear}
                    src={btnRemove} alt="Remove" />}
            </div>
    )
}

export default Search;