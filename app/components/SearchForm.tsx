import { Divide } from 'lucide-react'
import React from 'react'
import SearchFormatReset from './SearchFormatReset'

const SearchForm = () => {
  const query = 'test'

  return (
    <form action="/" scroll={false} className='search-form'>
      <input
        name='query'
        defaultValue=""
        className='search-input'
        placeholder='Search Startup'
        />
        <div className='flex gap-2'>
        {
          query && <SearchFormatReset/>
        }

        <button type='submit' className='search-btn text-white'>
          S
        </button>


        </div>
    </form>
  )
}

export default SearchForm