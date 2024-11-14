import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card'
import { Skeleton } from "@/app/components/ui/skeleton"

export default function PokemonCardSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton className="h-[250px] w-full rounded-md bg-gray-400 dark:bg-gray-600" />
      </CardHeader>
      <CardContent>
        <div className='flex justify-between items-center bg-gray-400 dark:bg-gray-600'>
          <Skeleton className="h-4 w-10 " />
          <Skeleton className="h-6 w-6 rounded-full " />
        </div>
        <Skeleton className="h-8 w-3/4 mt-2 bg-gray-400 dark:bg-gray-600 mx-auto" />
      </CardContent>
      <CardFooter>
        <div className='flex justify-center items-center gap-2 w-full'>
          <Skeleton className="h-5 w-16 rounded-full bg-gray-400 dark:bg-gray-600" />
          <Skeleton className="h-5 w-16 rounded-full bg-gray-400 dark:bg-gray-600" />
        </div>
      </CardFooter>
    </Card>
  )
}