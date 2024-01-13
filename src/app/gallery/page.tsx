
import { UploadResult } from '../page';
import { Button } from '@/components/ui/button';
import UploadButton from './UploadButton';
import cloudinary from "cloudinary";
import { CloudinaryImage } from './cloudinaryimage';
export default async function GalleryPage(){
type SearchResults = {
  public_id : string ;
};
  const results = (await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(10)
  .execute()) as {resources: SearchResults[]};
  

    return(
       <section>       
         <div className='flex flex-col gap-8'> 
         <div className='flex justify-between '>
         <h1 className="text text-4xl flex font-bold">GALLERY</h1>
       
       <UploadButton/>
         </div>
      


      <div className='grid grid-cols-4 gap-4'>
      {results.resources.map((result)=>(
<CloudinaryImage
key={result.public_id}
src={result.public_id}
width="400"
height="300"
alt="an image of something"
/>
))}
      </div>


  </div>
</section>

       
    )
}