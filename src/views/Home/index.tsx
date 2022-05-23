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
            id='itemLiveAction'
            optionChoose={handleService}
          />

          <CardHorizontal
            title='Animação'
            id='itemAnimation'
            optionChoose={handleService}
          />

        </div>

        <div className='grid grid-cols-2 gap-6 bg-pink-400'>
          
          <CardVertical
            title='Seriado'
            id='itemSerie'
            optionChoose={handleService}
          />

          <CardVertical
            title='Animê'
            id='itemAnime'
            optionChoose={handleService}
          />

        </div>

      </section>

      

    </div>
  )
}