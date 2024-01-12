"use client"
import { log } from 'console';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
import { useState } from 'react';

 export type UploadResult={
  info:{
public_id:string;
  };
event:'success';
};

export default function Home() {
  const [imageID,setimageID]=useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


<CldUploadButton
 onUpload={(result: UploadResult)=>{
  setimageID(result.info.public_id);
}}
uploadPreset="k3gbxfch" />

{imageID && (  <CldImage
  width="400"
  height="300"
  src={imageID}
  sizes="100vw"
  alt="Description of my image"
/>)

}


    </main>
  )
}
