import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { db } from './database';
import { collection, getDocs } from 'firebase/firestore';

interface ServiceProvideProps {
  children: ReactNode;
}


interface ServiceChooseProps {
  // typeService: string | null;
  handleService: any;
  setTypeService: any;
  typeService: string;
  refService: any;
  getItem: () => void;
}

export const ServiceContext = createContext({} as ServiceChooseProps)

export const FuncService = ({ children }: ServiceProvideProps) => {

  const [typeService, setTypeService] = useState<null | any>('movieLiveAction');



  const handleService = (service: any) => {

    service = service.currentTarget.getAttribute('data-value');
    setTypeService(service);
    // console.log(typeService);
  }

  const refService = collection(db, typeService);

  const getItem = () => {
    return getDocs(refService)
  };

  return (
    <ServiceContext.Provider value={{ handleService, setTypeService, typeService, refService, getItem }}>
      {children}
    </ServiceContext.Provider>
  )
}

export function useContextService() {
  return useContext(ServiceContext)
}
