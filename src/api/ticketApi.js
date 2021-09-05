import axios from 'axios';

export const getAllTickets=async()=>{
    return new Promise(async (resolve,reject)=>{
        try{
           const result= await axios.get('http://localhost:3001/v1/ticket',{
            headers:{
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1AZ21haWwuY29tIiwiaWF0IjoxNjMwNTY1NDE3LCJleHAiOjE2MzMxNTc0MTd9.PwG3sNrCaOSrZzJ2pyx3dMhQqSmnogcJwGWQBksU0wo"
            }
        })
        resolve(result)
        }catch(error){
            reject(error)
        }
    })
}

