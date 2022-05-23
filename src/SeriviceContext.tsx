import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ServiceProvideProps {
  children: ReactNode;
}


interface ServiceChooseProps {
  // typeService: string | null;
  handleService: any;
  setTypeService: any;
  typeService: string;
}

export const ServiceContext = createContext({} as ServiceChooseProps)

export const FuncService = ({ children }: ServiceProvideProps) => {

  let [typeService, setTypeService] = useState<null | any>(null);


  const handleService = (service: any) => {

    service = service.currentTarget.getAttribute('data-value');
    typeService = service
    console.log(typeService)

  }

  // setTypeService(handleService);

  // console.log(handleService)

  return (
    <ServiceContext.Provider value={{ handleService, setTypeService, typeService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export function useContextService() {
  return useContext(ServiceContext)
}