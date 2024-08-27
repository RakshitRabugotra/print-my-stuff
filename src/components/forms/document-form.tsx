"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"

export const UploadForm = () => {
  const handleUpload = (e: FormData) => {
    console.log(e.get("document"))
  }

  return (
    <form
      action={handleUpload}
      className="flex max-w-screen-md flex-col items-center gap-2 [&>*]:w-full"
    >
      <Input
        type="file"
        name="document"
        id="document"
        accept={".pdf,.docx"}
        color="secondary"
        isRequired
      />
      <Button type="submit" className="max-w-fit">
        {"Let's go"}
      </Button>
    </form>
  )
}
