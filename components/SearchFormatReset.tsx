"use client"
import  Link   from "next/link";

const reset = ()=>{
  const form = document.querySelector('.search-form') as HTMLFormElement;
  if (form) form.reset();
}

const SearchFormatReset = ()=> {
  return (

    <button type='reset' onClick={reset}>
      <Link href="/" className="search-btn text-white">
        X
      </Link>
    </button>
  )
}


export default SearchFormatReset

