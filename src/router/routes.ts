import Home from '../pages/home/Home'
import Rankings from '../pages/rankings/Rankings'

type PUBLIC_ROUTES = {
  path: string
  component: React.FC
}

export const publicRoutes: PUBLIC_ROUTES[] = [
  { path: '', component: Home },
  { path: 'rankings', component: Rankings },
]
