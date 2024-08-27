type Document = {
  media: "Text" | "Image"
  size: "A3" | "A4" | "A5" | "Legal" | "Letter"
  color: "B/W" | "CMYK"
}

// Define the Pricing type
type Pricing = {
  [size in Document["size"]]?: {
    [media in Document["media"]]?: {
      [color in Document["color"]]?: string
    }
  }
}

export interface Vendor {
  vendorId: string
  name: string
  location: string
  documentTypes: Document["media"][]
  image: string
  sizes: Document["size"][]
  colors: Document["color"][]
  timeSlots: string[]
  pricing: Pricing
}

export interface Service {
  title: string
  description: string
  image: string
}
