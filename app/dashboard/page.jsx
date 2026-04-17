import React from 'react'
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';

function Dashboard() {
return (
<div className='p-10'>
<h2 className='font-bold text-5xl'>Dashboard</h2>
<h2 className='text-gray-600 '>Whether you're a beginner or preparing for top companies, we provide the tools you need to improve your communication, problem-solving, and overall performance—so you walk into every interview ready to succeed.</h2>
<div className='grid grid-cols-1 md:grid-cols-3 my-5 '>
<  AddNewInterview className="bg-blue-500 text-white p-2 rounded"></AddNewInterview>
</div>
<div>
    <InterviewList></InterviewList>
</div>
</div>
)
}
export default Dashboard

//is paga ka data dashboard layout me show hoga, kyuki dashboard 
// layout me {children} likha hai, aur ye page dashboard layout ke andar hai,
//  to ye page ka data dashboard layout me show hoga
//function ka nam kuch bhi rakh sakte hai, but it should be in camelCase
