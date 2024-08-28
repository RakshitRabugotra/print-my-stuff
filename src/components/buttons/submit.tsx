import { Button } from "@nextui-org/button"
import { Vendor } from "@/types/database"
import { ChevronRight } from "@/components/icons"

export const OrderButton: React.FC<Vendor> = ({ vendorId }) => {
  return (
    <section className="font-montserrat fixed inset-0 top-auto inline-flex items-center bg-background/90 px-5 py-3 backdrop-blur-sm">
      <div className="basis-1/3">
        <p className="text-sm font-bold text-foreground">vendorId</p>
        <p className="text-2xl font-bold text-success">{vendorId}</p>
      </div>
      <Button
        className="grow rounded-2xl bg-primary py-6 text-base font-medium text-white"
        variant="shadow"
        endContent={<ChevronRight />}
      >
        Order Now
      </Button>
    </section>
  )
}
