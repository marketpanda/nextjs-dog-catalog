import React from 'react'
 
import { get, useForm } from "react-hook-form" 
import moment from 'moment/moment'

 
export default function Comments({refreshData, comments}) { 
  const {register, handleSubmit,  watch, reset, formState: { errors }} = useForm()

 
  const onSubmit =  async (data) => {

    if (data.commentName == '') {
      data.commentName = 'Anonymous'
    }
    
    const postData = {
      name: data.commentName,
      text: data.commentText
    }
     
    try { 
      await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
        .then(response => {return response.json()})
        .then(data => console.log(data)) 
      
      refreshData() 
      reset()
 
    } catch (e) {
      console.log(e)
    }
 
 
  } 
  
  return (
    <> 

      <div>
        {comments && (comments.map((comment, i) => (
          <>
            
              <div class="flex flex-col space-y-4 my-1">
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <span className="flex justify-between">
                    <h3 class="text-lg font-bold">{comment.name}</h3>
                    <p class="text-gray-700 text-sm mb-2">{moment(comment.createdAt).fromNow()}</p>
                    </span>
                    <p class="text-gray-700">{comment.text}</p>
                    
                </div>  
              </div>
            
          </>
          
        )))  }
      </div>
    
    <form onSubmit={handleSubmit(onSubmit)} className="mb-2"> 
    
      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name (Optional)</label>
      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Type your name here"
      {...register("commentName", {required: false, maxLength: 100})}
      /> 
      
      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Comments</label>
      <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
      {...register("commentText", {required: true, maxLength: 500})}
      ></textarea>
      {errors.commentText && <span>This field is required</span>}

       
      <input type="submit"
       className="w-full mt-2 flex justify-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      /> 
       
    </form>
    </>
  )
}
