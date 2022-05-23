import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return(
    <div>
      <Link to='/'>home</Link>
      <br/>
      <Link to='hint'>sugestão</Link>      
    </div>
  )
}