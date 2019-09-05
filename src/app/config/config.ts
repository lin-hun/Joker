
import Components from '../views/components/components'
import Layers from '../views/layers/layers'
import Behaviors from '../views/behaviors/behaviors'

export let config= [
  {
    path: 'components',
    component: Components,
    icon:'component'
  },
  {
    path: 'layers',
    component: Layers,
    icon:'layer'
  },
  {
    path: 'behaviors',
    component: Behaviors,
    icon:'new',
  }
]
