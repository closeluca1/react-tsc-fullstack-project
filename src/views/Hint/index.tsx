import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import reference from '../../database/services/reference';

import { useContextService } from '../../SeriviceContext';

export function Hint() {
  const [service, setService] = useState<any[]>([]);

  const { getItem } = useContextService();

  useEffect(() => {
    getService();
  }, [])

  async function getService() {
    const data: any = await getItem();
    setService(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
  }


  return (
    <section className='w-full md:max-w-[720px] bg-red-400 px-10'>
      {
        service.map((doc: any) => {
          return (
            <article
              key={doc.id}
            >
              <h2 className='text-2xl font-bold mb-3 md:text-4xl uppercase'>{doc.title}</h2>
              <span className='text-sm font-normal'>{doc.subtitle}</span>
              <img className='w-full mt-5 rounded-lg' src={doc.thumb} alt={doc.title} loading='lazy' />
              <p className='text-lg font-medium mt-5'>{doc.description}</p>
            </article>
          )
        })
      }

      <div className='w-full flex justify-end mt-10'>
        <Link to='/'> <button className='bg-red-400'>voltar para o início</button></Link>
      </div>
    </section>
  )
}