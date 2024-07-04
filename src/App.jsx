import { useState, useEffect } from 'react'
import { useSearchQuery } from './components/hooks/useSearchQuery'
import { HomeLayout } from './components/layouts/HomeLayout'
import HeroPart from './components/Parts/HeroPart'
import { useDebounce } from './components/hooks/useDebounce'
import { WideContainer } from './components/WideContainer'
import { SearchLoadingPart } from './components/Search/SearchLoadingPart'

function useSearch(search)
{
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    setSearching(search !== "");
    setLoading(search !== "")
  }, [search]);
  useEffect(() => {
    setLoading(false);
  }, [debouncedSearch])
  return {
    loading,
    searching
  }
}

export default function App() {
  const searchParams = useSearchQuery();
  const [search] = searchParams;

  const s = useSearch(search);

  const [showBg, setShowBg] = useState(false);

  return (
    <>
      <HomeLayout showBg={showBg}>
        <div className="mb-16 sm:mb-24">
          <HeroPart searchParams={searchParams} setIsSticky={setShowBg}/>
        </div>
        <WideContainer>
          {s.loading ? (
            <SearchLoadingPart/>
          ) : s.searching ? (
            <div>Searching</div>
          ) : (
            <></>
          )}
        </WideContainer>
      </HomeLayout>
    </>
  )
}
