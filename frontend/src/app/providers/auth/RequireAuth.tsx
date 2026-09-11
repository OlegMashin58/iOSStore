// import { Spin } from 'antd';
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from './AuthProvider'
// import styles from './requireAuth.module.less';

export const RequireAuth = () => {
  const location = useLocation()
  const { isAuth } = useAuth()

  //   if (isAuthLoading) {
  //     return (
  //       <div className={styles.authLoaderContainer}>
  //         <Spin size="large" />
  //       </div>
  //     );
  //   }

  if (!isAuth) {
    return <Navigate to="/" replace state={{ from: location }} />
  }

  return <Outlet />
}
