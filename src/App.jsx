import { useState, useEffect } from 'react'
import { useSearchQuery } from './components/hooks/useSearchQuery'
import { HomeLayout } from './components/layouts/HomeLayout'
import HeroPart from './components/Parts/HeroPart'
import { useDebounce } from './components/hooks/useDebounce'
import { WideContainer } from './components/WideContainer'
import { SearchLoadingPart } from './components/Search/SearchLoadingPart'
import { SearchListPart } from './components/Search/SearchListPart'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './components/errors/NotFoundPage'
import { Info } from './info'
import { AzalsPlaylist } from './components/AzalsPlaylist'

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

function HomeScreen() {
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
            <SearchListPart searchQuery={search}/>
          ) : (
            <AzalsPlaylist/>
          )}
        </WideContainer>
      </HomeLayout>
    </>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/browse/:query?' element={<HomeScreen />} />
        <Route path='/watch/:id?' element={<Info />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

function Layout(props)
{
  return (
    <div>
      <div
        className='flex min-h-screen flex-col'
      >
        {props.children}
      </div>
    </div>
  )
}