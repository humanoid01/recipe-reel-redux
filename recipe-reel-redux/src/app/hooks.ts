import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSearchQuery = (queryName: string) => {
  const [searchParams, setSearchParams] = useSearchParams(queryName);
  const newQuery = searchParams.get(queryName) ?? '';

  const setQuery = (query: string) => {
    setSearchParams(
      prev => {
        const newParams = new URLSearchParams(prev);
        newParams.set(queryName, query);
        if (!query) newParams.delete(queryName);
        return newParams;
      },
      { replace: true }
    );
  };

  return [newQuery, setQuery] as const;
};

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearInterval(handler);
  }, [value, delay]);
  return debouncedValue;
};
