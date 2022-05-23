import { Link } from 'react-router-dom';

interface CardVerticalProps {
  title: string;
  id: string;
  optionChoose: () => void;
  href: string;
}

export function CardVertical({title, optionChoose,id, href}:CardVerticalProps) {
  return (
    <article className='h-96 md:h-auto flex flex-col justify-between p-8 rounded-lg bg-gray-300'>
      <h2 className='text-1xl md:text-2xl text-center break-words md:break-normal uppercase font-semibold'>{title}</h2>

      <div className='w-full flex justify-end -mb-2 bg-orange-400'>
        <Link to={href}><button onClick={optionChoose} data-value={id} className='bg-red-400'>ver</button></Link>
      </div>

    </article>
  )
}