import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected.routes'

export const AppRoute = () => {
    const elements = useRoutes([...protectedRoutes])
    return (
        <div>
            {elements}
        </div>
    )
}
