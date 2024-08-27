"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { HeartFilledIcon } from "../icons"

export const UploadForm = () => {
  const handleUpload = (e: FormData) => {
    console.log(e.get("document"))
  }

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
