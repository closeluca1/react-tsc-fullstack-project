import { Link } from 'react-router-dom';

interface CardVerticalProps {
  title: string;
  id: string;
  optionChoose: () => void;
}

export function CardVertical({title, optionChoose,id}:CardVerticalProps) {
  return (
    <article className='h-[345px] md:h-auto flex flex-col justify-between p-8 rounded-lg bg-gray-300'>
      <h2 className='text-2xl text-center uppercase font-semibold'>{title}</h2>

      <div className='w-full flex justify-end -mb-2 bg-orange-400'>
        <Link to='/hint'><button onClick={optionChoose} data-value={id} className='bg-red-400'>ver</button></Link>
      </div>

    </article>
  )
}