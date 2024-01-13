"use client"
import { CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
export default function UploadButton(){
    const router=useRouter();
    return(
      
       <Button className='text-black bg-white'asChild>
        

       <CldUploadButton
 onUpload={(result: UploadResult)=>{
  //setimageID(result.info.public_id);
  setTimeout(()=>{
    router.refresh();
  },1000)
 
}}
uploadPreset="k3gbxfch" 
>
    <div className='flex gap-1 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>
Upload</div>


</CldUploadButton>

</Button>

       
    )
}