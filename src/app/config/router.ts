import {config} from './config'
const conf = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/behaviors'
  },
  ...config
]
export {conf}
