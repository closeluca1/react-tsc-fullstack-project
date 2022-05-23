import { Link } from 'react-router-dom';

interface CardHorizontalProps {
  title: string;
  id: string;
  optionChoose: () => void;
  href: string;
}

export function CardHorizontal({title, optionChoose, id, href}:CardHorizontalProps) {
  return (
    <article className='h-48 flex flex-col justify-center rounded-lg px-8 bg-gray-300'>
      <h2 className='text-1xl md:text-2xl font-semibold uppercase mb-8'>{title}</h2>

      <div className='w-full flex justify-end -mb-6 bg-orange-400'>
       <Link to={href}> <button onClick={optionChoose} data-value={id} className='bg-red-400'>{title == 'deixe seu contato' ? 'cadastrar' : 'ver'}</button></Link>
      </div>
    </article>
  )
}
