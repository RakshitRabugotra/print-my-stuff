"use client"

import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import { Service, Vendor } from "@/types/database"

export const ServiceCard: React.FC<Service> = ({
  title,
  description,
  image,
}) => {
  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
      className="basis-1/3 hover:scale-105"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="aspect-[2] w-full object-cover"
          src={image}
        />
      </CardBody>
      <CardFooter className="flex-col items-start justify-center text-small">
        <b>{title}</b>
        <p className="text-left text-default-500">{description}</p>
      </CardFooter>
    </Card>
  )
}

export const VendorCard: React.FC<Vendor> = ({
  name,
  location,
  image,
  vendorId,
}) => {
  return (
    <Card
      className="col-span-12 h-[300px] sm:col-span-4"
      isPressable
      onPress={() => console.log(`vendor pressed ${vendorId}`)}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 aspect-[4/5] h-full w-full object-cover"
        // src="https://nextui.org/images/card-example-3.jpeg"
        src={image}
      />
      <CardFooter className="absolute bottom-1 z-10 flex-col !items-start">
        <h4 className="text-large font-medium text-white">{name}</h4>
        <p className="text-tiny font-bold uppercase text-white/60">
          {location}
        </p>
      </CardFooter>
    </Card>
  )
}
