import React from 'react'
import AddNewInterview from './_components/AddNewInterview';

import { UserButton } from "@clerk/nextjs";

function Dashboard() {
return (
<div className='p-10'>
<h2 className='font-bold text-2xl'>Dashboard</h2>
<h2 className='text-gray-500'>Create and Start your AI Mockup</h2>
<div className='grid grid-cols-1 md:grid-cols-3 my-5'>
<AddNewInterview/>
</div>
</div>
)
}
export default Dashboard

//is paga ka data dashboard layout me show hoga, kyuki dashboard 
// layout me {children} likha hai, aur ye page dashboard layout ke andar hai,
//  to ye page ka data dashboard layout me show hoga
//function ka nam kuch bhi rakh sakte hai, but it should be in camelCase
