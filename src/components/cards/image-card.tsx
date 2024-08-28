"use client"

import { useEffect, useState } from "react"

// Icons
import { ChevronLeft, HeartFilledIcon } from "@/components/icons"

// UI
import { Card, CardBody } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Skeleton } from "@nextui-org/skeleton"

// Constants
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Vendor } from "@/types/database"

const ImageCard: React.FC<Vendor> = ({ name, image }) => {
  // For showing a skeleton till the image loads
  const [isLoaded, setLoaded] = useState(false)

  // To set the item as favourite
  const [fav, setFav] = useState(true)
  // To handle the clicking of fav icon
  // const handleLike = () => setFav((prev) => !prev);

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Card radius="lg" className="w-full overflow-visible border-none">
      <Skeleton isLoaded={isLoaded}>
        <CardBody className="p-0">
          <Image
            alt={name}
            className="aspect-square w-full object-cover"
            src={image}
            loading="lazy"
          />
        </CardBody>
        {/* The back button */}
        <Button
          as={Link}
          href="/"
          startContent={<ChevronLeft />}
          className="absolute left-3 top-3 z-10 aspect-square min-w-fit bg-default-50 text-black dark:bg-white dark:text-default-50"
        />
        {/* The fav icon */}
        {fav && (
          <Button
            className="absolute bottom-0 right-4 z-20 h-fit min-w-fit translate-y-1/2 rounded-full bg-white p-2 text-red-500"
            // onClick={handleLike}
          >
            <HeartFilledIcon size={32} />
          </Button>
        )}
      </Skeleton>
    </Card>
  )
}

export default ImageCard
