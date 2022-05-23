import { db } from '..';
import { collection, getDocs } from 'firebase/firestore';

const refService = collection(db, 'movieLiveAction');

class choosedService {
  getItem = () => {
    return getDocs(refService)
  };
};

export default new choosedService();
