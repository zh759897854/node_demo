import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$http = axios

import baseButton from '@/components/button.component'
import baseCheckBox from '@/components/checkBox.component'
import datePicker from '@/components/datePicker.component'
import baseInput from '@/components/input.component'
import baseSelect from '@/components/select.component'
import baseTable from '@/components/table.component'

Vue.component('base-button', baseButton);
Vue.component('base-checkBox',baseCheckBox);
Vue.component('date-picker',datePicker);
Vue.component('base-input',baseInput);
Vue.component('base-select',baseSelect);
Vue.component('base-table',baseTable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
