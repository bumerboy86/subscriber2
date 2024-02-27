import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import AppWrapper from '../../layout/AppWrapper'
import { publicRoutes } from '../../router/routes'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AppWrapper />}>
        {publicRoutes.map(route => (
          <Route path={route.path} element={<route.component />} key={route.path} />
        ))}
      </Route>
    </Routes>
  )
}

export default AppRouter
