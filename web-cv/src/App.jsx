import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import profilePic from '@/assets/profile.jpg';
import cv from '@/assets/cv.pdf';

import { updates, desp, publications } from '@/utils/constants';
import ProfileCard from '@/components/ProfileCard';
import PubCard from '@/components/PubCard';

function App() {


  return (
    <div className='flex justify-center items-center'>
      <div className='md:w-3/5 md:mx-20 sm:w-4/5 sm:mx-5'>
        <Tabs defaultValue='home' className='w-full mx-auto'>
          {/* Nav Bar */}
          <div className='grid md:grid-cols-3 px-10 sm:grid-cols-1 w-full pt-5 gap-2'>
            <div className='col-span-1'>
              <h1 className='font-serif text-4xl font-bold text-center'>Damin Zhang</h1>
            </div>
            <div className='flex self-center md:col-span-2 sm:col-span-1'>
              <TabsList className='grid grid-cols-2 w-full'>
                <TabsTrigger value='home' className='text-md font-bold'>Home</TabsTrigger>
                <div className='flex flex-row justify-center items-center'>
                  <a href={cv} target='_blank' className='text-lg font-mono font-bold'>CV</a>
                </div>
              </TabsList>
            </div>
          </div>
          
          {/* Home Tab Content */}
          <TabsContent value='home'>
            <div className='flex flex-col justify-center mx-auto gap-2 mb-5'>
              <div>
                <ProfileCard profilePic={profilePic} desp={desp} updates={updates} />
              </div>

              <div>
                <PubCard pubs={publications} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
