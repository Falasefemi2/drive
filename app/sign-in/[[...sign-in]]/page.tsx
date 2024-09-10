import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import carpark from '@/public/carpark.jpg'

export default function Page() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <Image
                src={carpark}
                alt="carpark"
                className="object-cover"
                fill
                priority
            />
            <div className="absolute top-10 right-10 z-10">
                <SignIn />
            </div>
        </div>
    )
}