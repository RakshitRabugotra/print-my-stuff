// UI
import { Link } from "@nextui-org/link"
// Components
import ImageCard from "@/components/cards/image-card"
import { OrderButton } from "@/components/buttons/submit"
// Helpers
import { subtitle, title } from "@/components/primitives"

// Icons
import { Facility, StarIcon } from "@/components/icons"
import { Vendor } from "@/types/database"

// The dynamic page showing the place details
export default async function PlacePage({
  params,
}: {
  params: { id: string }
}) {
  // Fetch all the data and match
  let vendors = null
  try {
    const response = await fetch("http://127.0.0.1:3000/data")
    vendors = (await response.json()).vendors as Vendor[]
  } catch (error) {
    console.error("error while fetching the data: ", error)
    return <div>{"Couldn't fetch data"}</div>
  }

  // Find the specific vendor out of these
  const vendor = vendors.find(value => value.vendorId === params.id)!

  return (
    <section className="font-montserrat flex min-h-screen flex-col items-center bg-default-50 p-4 pb-28">
      {/* The image section with the card */}
      <ImageCard {...vendor} />
      {/* The section with headings */}
      <Description {...vendor} />
      {/* The Facilities */}
      <Facilities {...vendor} />
      {/* The proceed bar */}
      <OrderButton {...vendor} />
    </section>
  )
}

const Description: React.FC<Vendor> = ({ name, location }) => {
  return (
    <article className="mt-6 flex w-full flex-col gap-1">
      {/* The header section */}
      <div className="flex items-end justify-between">
        <h1 className={title({ class: "text-3xl font-semibold" })}>
          {location}
        </h1>
        <Link href="#" className="px-1 text-sm font-bold">
          Show map
        </Link>
      </div>

      {/* The reviews */}
      <div className="inline-flex items-center gap-1 px-2 text-sm">
        <StarIcon className="text-amber-500" />
        {5}&nbsp;
        {`(${400}) Reviews`}
      </div>
    </article>
  )
}

const Facilities: React.FC<Vendor> = () => {
  return (
    <article className="mt-6 flex w-full flex-col gap-1">
      {/* Subtitle */}
      <h2
        className={subtitle({
          class: "w-full text-xl font-semibold text-foreground",
        })}
      >
        Facilities
      </h2>
      {/* The facility icons */}
      <section className="flex flex-row justify-between gap-3">
        <FacilityIcon subtitle={"1 Heater"}>
          <Facility.Wifi size={40} />
        </FacilityIcon>
        <FacilityIcon subtitle={"Dinner"}>
          <Facility.Dinner size={40} />
        </FacilityIcon>
        <FacilityIcon subtitle={"1 Tub"}>
          <Facility.Bath size={40} />
        </FacilityIcon>
        <FacilityIcon subtitle={"Pool"}>
          <Facility.Pool size={40} />
        </FacilityIcon>
      </section>
    </article>
  )
}

const FacilityIcon = ({
  subtitle,
  children,
}: {
  subtitle: string
  children: React.ReactNode
}) => {
  return (
    <div className="flex basis-1/4 flex-col items-center justify-center rounded-2xl bg-[#eff3fc] p-4 text-[#b6b6b6]">
      {children}
      <span className="text-[10px] leading-3">{subtitle}</span>
    </div>
  )
}
