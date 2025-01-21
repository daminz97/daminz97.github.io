import React from 'react';

import { Linkedin, GraduationCap, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import UpdateCard from '@/components/UpdateCard';

export default function ProfileCard({ profilePic, desp, updates }) {
    return (
        <Card className='border-transparent'>
            <CardContent className='ml-10 mr-10 md:p-10 sm:p-5 mx-auto'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 justify-center items-center'>
                    <div className='md:col-span-1 sm:col-span-1'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='size-64 p-5'>
                                <img src={profilePic} className='rounded-full' />
                            </div>
                            <h1 className='text-2xl font-serif font-bold'>Damin Zhang</h1>
                            <h3 className='text-lg font-serif p-0 m-0'>Ph.D. Candidate</h3>
                            <h3 className='text-lg font-serif p-0 m-0'><a href='https://www.purdue.edu' target='_blank'>Purdue Unviersity</a></h3>
                            <div className='flex flex-row justify-center items-center space-x-4 mt-5'>
                                <a className="footer-icon" title="linkedin" href="https://www.linkedin.com/in/damin-zhang-2808aa134/" target="_blank" rel="noreferrer"><Linkedin /></a>
                                <a className="footer-icon" title="gscholar" href="https://scholar.google.com/citations?user=VAcSwQgAAAAJ&hl=en&authuser=2" target="_blank" rel="noreferrer"><GraduationCap /></a>
                                <a className="footer-icon" title="Github" href="https://github.com/daminz97" target="_blank" rel="noreferrer"><Github /></a>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-2 md:px-5 sm:col-span-1'>
                        <div className='grid grid-cols-1'>
                            <div className='col-span-1'>
                                <article className='text-pretty font-mono' dangerouslySetInnerHTML={{ __html: desp.content }}></article><br/>
                                <h3 className='text-md font-mono p-0 m-0'>Contact me: zhan4060 [at] purdue.edu</h3>
                            </div>

                            <div className='col-span-1'>
                                <UpdateCard updates={updates} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}