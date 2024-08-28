"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { HeartFilledIcon } from "../icons"
import { useEffect, useState } from "react"
import { Select, SelectItem } from "@nextui-org/select"
import { Skeleton } from "@nextui-org/skeleton"
import { Radio, RadioGroup } from "@nextui-org/radio"

export const UploadForm = () => {
  const [sizes, setSizes] = useState<string[] | null>(null)
  const [colors, setColors] = useState<string[] | null>(null)

  const handleUpload = (e: FormData) => {
    const dc = e.get("document")
    const size = e.get("doc-size")

    console.log({ dc, size })
  }

  // Load the essentials on mount
  useEffect(() => {
    fetch("http://127.0.0.1:3000/data")
      .then(resp => resp.json())
      .then(data => {
        setSizes(data.docSizes)
        setColors(data.docColors)
      })
      .catch(error => console.error("error while fetching data: ", error))
  }, [])

  return (
    <form
      action={handleUpload}
      className="mx-auto mt-10 flex w-3/4 flex-col items-center gap-2 md:w-full lg:max-w-screen-md [&>*]:w-full"
    >
      <Input
        type="file"
        name="document"
        id="document"
        accept={".pdf,.docx"}
        color="secondary"
        isRequired
      />

      {/* THe submit button */}
      <Button
        type="submit"
        className="max-w-fit"
        variant="faded"
        endContent={<HeartFilledIcon color="red" />}
      >
        {"Let's go"}
      </Button>
    </form>
  )
}

// Code for future
;`
{/* Drop down for the available paper sizes */}
      <Skeleton isLoaded={sizes != null} className="rounded-lg">
        <Select
          label="Select print size"
          className="max-w-xs"
          color="secondary"
          name="doc-size"
          id="doc-size"
          isRequired
        >
          {!sizes ? (
            <SelectItem key={0}>loading...</SelectItem>
          ) : (
            sizes.map((size, index) => (
              <SelectItem key={size}>{size}</SelectItem>
            ))
          )}
        </Select>
      </Skeleton>

      {/* Radio for choosing the color of the document */}
      <Skeleton isLoaded={colors != null} className="rounded-lg">
        <RadioGroup label="Select your color option" color="secondary">
          {colors &&
            colors.map((color, index) => (
              <Radio value={color} className="uppercase">
                {color}
              </Radio>
            ))}
        </RadioGroup>
      </Skeleton>
`
