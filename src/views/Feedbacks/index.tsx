import { useState, useEffect } from 'react';
import { useContextService } from '../../SeriviceContext';

export function Feedbacks () {

  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  const {getFeedback} = useContextService();
  
  useEffect(() => {
    getFeedbacks();
  }, [])

  async function getFeedbacks () {
    const data: any = await getFeedback();
    setFeedbacks(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id})));
  }

  return (
    <div className='w-full md:max-w-[720px] bg-red-400 px-10'>
      {
        feedbacks.map((doc: any) => {
          return(
            <div
              className='mb-8' 
              key={doc.id}>
              <h3>{doc.name}</h3>
              <p className='my-3'>{doc.comment}</p>
              <small>{doc.getDate}</small>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}