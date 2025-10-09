import { ImageList } from '@/components/ui/image-list'
import { unstable_cache } from 'next/cache'
import { payload } from '@/hooks/payload'
import { ImageListItem } from '@/components/ui/image-list/item'
import Image from 'next/image'
import { Media, Project } from '@/payload-types'
import Link from 'next/link'

export const ProjectImages = async () => {
  const cached = unstable_cache(
    async () => {
      const { docs } = await payload.find({
        collection: 'projects',
      })
      return docs
    },
    [],
    {
      revalidate: 60,
    },
  )
  const projects = await cached()

  return (
    <>
      {projects ? (
        <ImageList cols={3} rowHeight={350}>
          {projects.map(({ id, images }: Project) => (
            <ImageListItem key={id}>
              <Image
                src={(images[0].image as Media).url!}
                alt={(images[0].image as Media).alt}
                fill={true}
                className="object-cover"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default ProjectImages
