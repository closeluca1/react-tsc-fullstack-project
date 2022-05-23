import { useState } from 'react';
import { CardHorizontal } from '../../components/CardHorizontal';
import { CardVertical } from '../../components/CardVertical';

import { useContextService } from '../../SeriviceContext';


export function Home() {

  const {handleService} = useContextService();

  return (
    <div className='w-full md:max-w-[1080px] bg-orange-300'>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-min bg-green-400'>

        <div className='grid grid-cols-1 gap-6 bg-red-500'>
          
          <CardHorizontal
            title='Live Action'
            id='movieLiveAction'
            optionChoose={handleService}
          />

          <CardHorizontal
            title='Animação'
            id='movieAnimation'
            optionChoose={handleService}
          />

        </div>

        <div className='grid grid-cols-2 gap-6 bg-pink-400'>
          
          <CardVertical
            title='Seriado'
            optionChoose={() => console.log('Serie')}
          />

          <CardVertical
            title='Animê'
            optionChoose={() => console.log('anime')}
          />

        </div>

      </section>

      

    </div>
  )
}