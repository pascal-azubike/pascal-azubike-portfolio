
import Link from 'next/link'
import Image from 'next/image'
import { ContentLayout } from '@/components/content-layout'

export default function NotFound() {
    return (
        <ContentLayout>
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <Image
                    src="/not-found.svg"
                    alt="404 Not Found Illustration"
                    width={400}
                    height={300}
                    className="mb-8"
                    priority
                />
                <h2 className="text-3xl font-bold mb-4 text-center">404 - Page Not Found</h2>
                <p className="text-gray-600 mb-6 text-center max-w-md">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </ContentLayout>
    )
} 