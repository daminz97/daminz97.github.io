import React, { useState, useEffect } from 'react';

export default function UpdateCard({ updates }) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const recentUpdates = updates.filter(update => {
        return (currentYear - update.date.split(",")[1] <= 2);
    });

    return (
        <div className='mt-5 font-serif'>
            <h2 className='text-xl font-bold'>Recent News:</h2>
            <ul className='list-outside'>
                {recentUpdates.map((update, index) => (
                    <li key={index} className='text-pretty'><strong>{update.date}</strong>: {update.content}</li>
                ))}
            </ul>
        </div>
    )
}