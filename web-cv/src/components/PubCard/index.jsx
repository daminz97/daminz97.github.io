import React from 'react';
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"

export default function PubCard({ pubs }) {
    return (
        <Card className='border-transparent'>
            <CardHeader className='mx-auto'>
                <CardTitle>Recent Publications</CardTitle>
            </CardHeader>
            <CardContent className='grid md:grid-cols-1 sm:grid-cols-1 sm:p-0 justify-start items-start'>
                {pubs.map((pub, index) => (
                    <Card key={index} className='border-2 border-dashed font-serif mx-5 my-1'>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2 justify-between flex flex-col'>
                                <CardHeader className='p-2'>
                                    <CardTitle className='text-wrap text-md font-bold'><a href={pub.link} target='_blank'>{pub.title}</a></CardTitle>
                                    <CardDescription>{pub.authors.join(", ")}</CardDescription>
                                </CardHeader>
                                <CardFooter className='p-2'>
                                    {/* <div>{pub.proceeding} {pub.year}</div> */}
                                    <Badge className='font-sans' variant="outline">{pub.proceeding}</Badge>
                                </CardFooter>
                            </div>
                            <div className='col-span-1 size-fit p-3 items-center m-auto'>
                                <img src={pub.img} className='rounded h-20' />
                            </div>
                        </div>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}