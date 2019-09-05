import {config} from './config'
let routes = Object.assign([],config)
routes.unshift({
  path: '',
  pathMatch:'full',
  redirectTo:'/behaviors'
})
export {routes}
