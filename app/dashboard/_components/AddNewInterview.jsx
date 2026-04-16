// "use client";

// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { chatSession } from "../../../utils/GemeniAPIModal";

// const AddNewInterview = () => {
//   const [openDialog, setOpenDialog] = useState(false);
//   const [jobTitle, setJobTitle] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [experience, setExperience] = useState(""); 

// const onSubmit = async (e) => {
//   e.preventDefault();
//   console.log(jobTitle, jobDescription, experience);

//   const InputPrompt = `Job position: ${jobTitle}, Job Description: ${jobDescription}, Years of Experience: ${experience}. Depending on this, give me 5 interview questions with answers in JSON format. Give question and answer as fields in JSON.`;

//   const result = await chatSession.sendMessage(InputPrompt);
//   const rawText = result.response.text();

//   // Strip markdown code fences
//   const MockJsonResp = rawText
//     .replace('```json', '')
//     .replace('```', '');

//   console.log(JSON.parse(MockJsonResp)); // parsed JSON in console
// };


//   return (
//     <>
//       {/* Add New Card */}
//       <div
//         className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
//         onClick={() => setOpenDialog(true)}
//       >
//         <h2 className="text-lg text-center">+ Add New</h2>
//       </div>

//       {/* Dialog */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <   DialogTitle className="text-2xl font-bold">
//               Tell us more about Job you are interviewing
//             </DialogTitle>
//           </DialogHeader>
//           <form onSubmit={onSubmit}>
// <div className="flex flex-col gap-4 mt-4">

//   {/* Job Title */}
//   <div>
//     <label className="block mb-1 text-sm font-medium">
//       Job Position / Role name
//     </label>
//     <input
//       type="text"
//       placeholder="e.g. Frontend Developer"
//       className="w-full border p-2 rounded-md"
//       value={jobTitle}
//       onChange={(e) => setJobTitle(e.target.value)}
//     />
//   </div>

//   {/* Job Description */}
//   <div>
//     <label className="block mb-1 text-sm font-medium">
//       Job Description / Tech Stack
//     </label>
//     <textarea
//       placeholder="e.g. React, Next.js, Node.js..."
//       className="w-full border p-2 rounded-md h-28 resize-none"
//       value={jobDescription}
//       onChange={(e) => setJobDescription(e.target.value)}   
//     />
//   </div>

//   {/* Experience */}
//   <div>
//     <label className="block mb-1 text-sm font-medium">
//       Years of Experience
//     </label>
//     <input
//       type="number"
//       placeholder="e.g. 2"
//       className="w-full border p-2 rounded-md"
//       value={experience}
//       onChange={(e) => setExperience(e.target.value)}   
//     />
//   </div>

//   {/* Buttons */}
//   <div className="flex justify-end gap-3 mt-4">
//     <button
//       onClick={() => setOpenDialog(false)}
//       className="px-4 py-2 rounded-md border hover:bg-gray-100"
//     >
//       Cancel
//     </button>

//     <button type="submit" className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90">
//       Start Interview
//     </button>
//   </div>
// </div>
//             </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default AddNewInterview;



"use client";

import React, { use, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { chatSession } from "../../../utils/GemeniAPIModal";
import { getChatResponse } from "../../../utils/GemeniAPIModal";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { db } from "../../../utils/db";
import { useRouter } from "next/navigation";
import { MockInterview } from "../../../utils/schema";
import moment from "moment";



const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState(""); 
  const [loading, setloading] = useState(false);
  const[josnResponse, setJsonResponse] = useState(null);
  const { user } = useUser();
  const router = useRouter();


  

const onSubmit = async (e) => {
  setloading(true);
  e.preventDefault();

  const InputPrompt = `Job position: ${jobTitle}, Job Description: ${jobDescription}, Years of Experience: ${experience}. Depending on this, give me 5 interview questions with answers in JSON format. Give question and answer as fields in JSON.`;

  const rawText = await getChatResponse(InputPrompt);

  const MockJsonResp = rawText
    .replace('```json', '')
    .replace('```', '')
    .trim(); 

  console.log("Parsed:", JSON.parse(MockJsonResp));
   setJsonResponse(MockJsonResp);
    
  if (MockJsonResp) {
    const resp = await db.insert(MockInterview)
      .values({
        mockId: uuidv4(),
        jsonMockResp: MockJsonResp,
        jobPosition: jobTitle,
        jobDesc: jobDescription,
        jobExperience: experience,
        createdBy: user?.primaryEmailAddress?.emailAddress, // ✅ { user } destructure ke baad
        createdAt: moment().format('DD-MM-YYYY')
      }).returning({ mockId: MockInterview.mockId });

    console.log("Inserted ID:", resp);

    if (resp) {
      setOpenDialog(false);
      router.push('/dashboard/interview/' + resp[0]?.mockId); // ✅ Redirect
    }
  } else {
    console.error("Failed to get a valid JSON response from the AI.");
  }

  setloading(false);
};




  return (
    <>
      {/* Add New Card */}
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <   DialogTitle className="text-2xl font-bold">
              Tell us more about Job you are interviewing
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={onSubmit}>
<div className="flex flex-col gap-4 mt-4">

  {/* Job Title */}
  <div>
    <label className="block mb-1 text-sm font-medium">
      Job Position / Role name
    </label>
    <input
      type="text"
      placeholder="e.g. Frontend Developer"
      className="w-full border p-2 rounded-md"
      value={jobTitle}
      onChange={(e) => setJobTitle(e.target.value)}
    />
  </div>

  {/* Job Description */}
  <div>
    <label className="block mb-1 text-sm font-medium">
      Job Description / Tech Stack
    </label>
    <textarea
      placeholder="e.g. React, Next.js, Node.js..."
      className="w-full border p-2 rounded-md h-28 resize-none"
      value={jobDescription}
      onChange={(e) => setJobDescription(e.target.value)}   
    />
  </div>

  {/* Experience */}
  <div>
    <label className="block mb-1 text-sm font-medium">
      Years of Experience
    </label>
    <input
      type="number"
      placeholder="e.g. 2"
      className="w-full border p-2 rounded-md"
      value={experience}
      onChange={(e) => setExperience(e.target.value)}   
    />
  </div>

  {/* Buttons */}
  <div className="flex justify-end gap-3 mt-4">
    <button
      onClick={() => setOpenDialog(false)}
      className="px-4 py-2 rounded-md border hover:bg-gray-100"
    >
      Cancel
    </button>

  <button
  disabled={loading}
  type="submit"
  className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90"
>
  {loading ? (
    <span className="flex items-center gap-2">
      
      <LoaderCircle className="animate-spin" />
      Generating from AI
    </span>
  ) : (
    "Start Interview"
  )}
</button>
  </div>
</div>
            </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewInterview;