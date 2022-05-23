import { useState } from 'react';
import { CardHorizontal } from '../../components/CardHorizontal';
import { CardVertical } from '../../components/CardVertical';
import { LeadModal } from '../../components/LeadModal';

import { useContextService } from '../../SeriviceContext';


export function Home() {

  const {handleService, modalVisible, openModal} = useContextService();

  return (
    <div className='w-full md:max-w-[1080px] bg-orange-300 px-6'>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-min bg-green-400'>

        <div className='grid grid-cols-1 gap-6 bg-red-500'>
          
          <CardHorizontal
            title='Live Action'
            id='itemLiveAction'
            optionChoose={handleService}
            href='/hint'
          />

          <CardHorizontal
            title='Animação'
            id='itemAnimation'
            optionChoose={handleService}
            href='/hint'
          />

        </div>

        <div className='grid grid-cols-2 gap-6 bg-pink-400'>
          
          <CardVertical
            title='Seriado'
            id='itemSerie'
            optionChoose={handleService}
            href='/hint'
          />

          <CardVertical
            title='Animê'
            id='itemAnime'
            optionChoose={handleService}
            href='/hint'
          />

        </div>

      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-min mt-6 bg-green-400'>

        <div className='grid grid-cols-2 gap-6 bg-pink-400'>
          
          <CardVertical
            title='versões'
            id='itemSerie'
            optionChoose={handleService}
            href='/hint'
          />

          <CardVertical
            title='feedbacks'
            id='itemAnime'
            optionChoose={handleService}
            href='/hint'
          />

        </div>

        <div className='grid grid-cols-1 gap-6 bg-red-500'>
          
          <CardHorizontal
            title='sugestões anteriores'
            id='itemLiveAction'
            optionChoose={handleService}
            href='hint'
          />

          <CardHorizontal
            title='deixe seu contato'
            id='leads'
            optionChoose={openModal}
            href='#'
          />

        </div>

      </section>

      <LeadModal
         visibility={!modalVisible ? 'hidden' : 'visible'}
      />

    </div>
  )
}