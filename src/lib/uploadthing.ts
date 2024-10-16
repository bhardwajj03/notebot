// we make file in lib folder because to use this as a library through out the project 

import { generateReactHelpers } from '@uploadthing/react'

import type { OurFileRouter } from '@/app/api/uploadthing/core'

export const { useUploadThing } =
  generateReactHelpers<OurFileRouter>()