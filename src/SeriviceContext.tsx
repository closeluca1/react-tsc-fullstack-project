import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { db } from './database';
import { addDoc, collection, getDocs } from 'firebase/firestore';

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
  createLead: any;
  setModalVisible: any;
  modalVisible: boolean;
  openModal: () => void;
  getFeedback: () => void;
}

export const ServiceContext = createContext({} as ServiceChooseProps)

export const FuncService = ({ children }: ServiceProvideProps) => {

  const [typeService, setTypeService] = useState<null | any>('movieLiveAction');

  const [modalVisible, setModalVisible] = useState(false);

  const handleService = (service: any) => {

    service = service.currentTarget.getAttribute('data-value');
    setTypeService(service);
    // console.log(typeService);

  }

  function openModal () {
    if (modalVisible !== null){
      setModalVisible(true);
    }
  }

  const refService = collection(db, typeService);

  const getItem = () => {
    return getDocs(refService)
  };

 
  const createLead = (newLead: object) => {
    return addDoc(refService, newLead)
  }

  const refFeedback = collection(db, 'leads')
  const getFeedback = () => {
    return getDocs(refFeedback)
  }

  return (
    <ServiceContext.Provider value={{ handleService, setTypeService, typeService, refService, getItem, createLead, setModalVisible, modalVisible, openModal, getFeedback }}>
      {children}
    </ServiceContext.Provider>
  )
}

export function useContextService() {
  return useContext(ServiceContext)
}
