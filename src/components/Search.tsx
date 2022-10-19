import React from 'react';
import { useRef, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import btnRemove from '../assets/img/btnRemove.svg';
import { setSearchValue } from '../redux/filter/slice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    if(inputRef.current)
      inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="searchBlock">
      <input
        ref={inputRef}
        className="input"
        value={value}
        type="text"
        placeholder="Поиск..."
        onChange={onChangeInput}
      />
      {value && (
        <img
          className="imgRemove"
          onClick={onClickClear}
          src={btnRemove}
          alt="Remove"
        />
      )}
    </div>
  );
};

