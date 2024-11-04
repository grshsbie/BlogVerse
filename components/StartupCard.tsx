import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'

const StartupCard = ({post} : {post: {
  _createdAt: string;
  views: number;
  author: { _id: number };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}}) => {
  return (
    <li className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className='text-gray-500 text-sm'>
           {(post._createdAt)}
          </p>
          <div className='flex items-center gap-2'>
            <EyeIcon className='w-5 h-5 text-blue-500'/>
            <span className='font-medium'>{post.views}</span>
          </div>
        </div>

        <div className='space-y-4'>
          <div>
            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">{post.title}</h3>
            <p className="mt-2 text-gray-600 line-clamp-2">{post.description}</p>
            <div className="mt-3">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">{post.category}</span>
            </div>
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover mt-4 rounded-lg hover:opacity-90 transition-opacity"/>
          </div>
        </div>
      </div>
    </li>
  )
}
export default StartupCard