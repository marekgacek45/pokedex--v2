'use client'

import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import PokemonCard from './components/pokemon-card'
import PokemonCardSkeleton from './components/pokemon-card-skeleton'

import { Pokemon } from '@/interface'
import { getAllPokemons } from '@/api'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true) // Czy są jeszcze dane do załadowania
  const [offset, setOffset] = useState(0) // Offset do paginacji

  // Pierwsze pobranie danych
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const results = await getAllPokemons(offset)
        setAllPokemons(results)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching initial data:", error)
      }
    }

    if (offset === 0) {
      fetchInitialData()
    }
  }, [offset])

  // Funkcja ładowania kolejnych danych
  const fetchMorePokemons = async () => {
    try {
      const newOffset = offset + 50 // Zwiększenie offsetu o 50
      const newPokemons = await getAllPokemons(newOffset)

      if (newPokemons.length === 0) {
        setHasMore(false) // Brak więcej danych do załadowania
      } else {
        setAllPokemons((prev) => [...prev, ...newPokemons]) // Dodaj nowe pokemony do istniejącej listy
        setOffset(newOffset) // Ustaw nowy offset
      }
    } catch (error) {
      console.error("Error fetching more data:", error)
    }
  }

  return (
    <main className='max-w-screen-2xl mx-auto px-12 2xl:px-0'>
      {loading ? (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 py-12'>
          {Array.from({ length: 20 }).map((_, index) => (
            <PokemonCardSkeleton key={uuidv4()} />
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={allPokemons.length}
          next={fetchMorePokemons}
          hasMore={hasMore}
          loader={
          
                <PokemonCardSkeleton key={uuidv4()} />
            
          }
          className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 py-12'
        >
          {allPokemons.map((pokemon: Pokemon) => (
            // Zamiast url, używamy id lub name jako klucz
            <PokemonCard key={uuidv4()} pokemon={pokemon} />
          ))}
        </InfiniteScroll>
      )}
    </main>
  )
}

export default Home
