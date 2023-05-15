import moment from 'moment';
import 'moment/locale/id';

export default defineNuxtPlugin(() => {
  moment.locale('id');
  return {
    provide: {
      moment,
    },
  };
});
