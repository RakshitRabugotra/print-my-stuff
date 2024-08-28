import { ServiceCard, VendorCard } from "@/components/cards/hero"
import { UploadForm } from "@/components/forms/document-form"
import { title, subtitle } from "@/components/primitives"
import { Service, Vendor } from "@/types/database"

export default async function Home() {
  let data = null
  try {
    const response = await fetch("http://localhost:3000/data", {
      cache: "no-store",
    })
    data = await response.json()
  } catch (error) {
    console.error("Error while fetching the data: ", error)
    return <div>{"Couldn't fetch services"}</div>
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Hero />

      <section className="w-full max-w-screen-lg px-6 pb-32">
        <Services services={data.services} />
        <Vendors vendors={data.vendors} />
      </section>
    </section>
  )
}

function Hero() {
  return (
    <section className="relative flex h-[60vh] w-full flex-col items-center justify-center">
      <div className="bg-hero inset-0 h-full w-full bg-center blur-[2px]">
        {/* For the image */}
      </div>
      <div className="absolute inline-block max-w-xl justify-center text-center">
        <h1 className={title()}>Print your stuff&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          regardless of your location, in fast and modern fashion.
        </h2>
        <UploadForm />
      </div>
    </section>
  )
}

function Services({ services }: { services: Service[] }) {
  return (
    <section
      id="services"
      className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2"
    >
      {services.map((service, index) => (
        <ServiceCard {...service} key={service.title + "-" + index} />
      ))}
    </section>
  )
}

function Vendors({ vendors }: { vendors: Vendor[] }) {
  const desc =
    "Explore curated lists of top vendors in Delhi NCR, based on trends"

  return (
    <section id="vendors" className="mt-20">
      <h1 className={title({ class: "font-medium" })}>Collections</h1>
      <h5 className={subtitle({ class: "text-gray-400" })}>{desc}</h5>
      <div className="mt-10 flex flex-row flex-wrap gap-8">
        {/* TODO: Implement carousel */}
        {vendors.slice(0, 3).map((vendor, index) => (
          <VendorCard key={vendor.vendorId + "-" + index} {...vendor} />
        ))}
      </div>
    </section>
  )
}
