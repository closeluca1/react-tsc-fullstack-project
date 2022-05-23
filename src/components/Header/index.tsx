import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Link to='/'>
      <h1 className='text-center text-3xl font-semibold uppercase my-5'>a boa do dia</h1>
    </Link>
  )
}