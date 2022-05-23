import { useEffect, useState } from 'react';
import reference from '../../database/services/reference';

export function Hint() {
  const [service, setService] = useState<any[]>([]);

  useEffect(() => {
    getService();
  }, [])

  async function getService() {
    const data: any = await reference.getItem();
    setService(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
  }
  

  return (
    <div>
      {
        service.map((doc: any) => {
          return (
            <div
              key={doc.id}
            >
              <p>{doc.movieName}</p>
            </div>
          )
        })
      }
    </div>
  )
}