import React from 'react';
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PubCard({ pubs }) {
    return (
        <Card className='border-transparent'>
            <CardHeader className='mx-auto'>
                <CardTitle>Recent Publications</CardTitle>
            </CardHeader>
            <CardContent className='grid md:grid-cols-2 sm:grid-cols-1 sm:p-0 justify-start items-start'>
                {pubs.map((pub, index) => (
                    <Card key={index} className='border-2 border-dashed font-serif m-1'>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2 justify-between flex flex-col'>
                                <CardHeader className='p-2'>
                                    <CardTitle className='text-wrap text-md font-bold'><a href={pub.link} target='_blank'>{pub.title}</a></CardTitle>
                                    <CardDescription>{pub.authors.join(", ")}</CardDescription>
                                </CardHeader>
                                <CardFooter className='p-2'>
                                    <div>{pub.proceeding} {pub.year}</div>
                                </CardFooter>
                            </div>

                            <div className='col-span-1 size-fit p-3 items-center m-auto'>
                                <img src={pub.img} className='rounded' />
                            </div>
                        </div>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}