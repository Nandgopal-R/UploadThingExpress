import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {

  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ file }) => {
      try {
        return { fileUrl: file.ufsUrl, fileKey: file.key };
      } catch (error) {
        console.error("Error in onUploadComplete:", error);
        throw new Error("Failed to process upload");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
