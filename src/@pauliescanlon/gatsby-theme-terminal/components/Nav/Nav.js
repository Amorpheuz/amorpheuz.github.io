/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { MdxRoutes } from '@pauliescanlon/gatsby-mdx-routes'
import { Link } from 'gatsby'

import { Logo } from '../Logo/Logo'
import ThemeSwitch from './themeswitch'

import * as styles from '@pauliescanlon/gatsby-theme-terminal/src/components/Nav/styles'

const DUMMY = 'dummy'

export const Nav = () => (
    <Fragment>
        <div sx={styles.logo}>
            <Logo />
        </div>
        <div>
            
        </div>
        <nav sx={styles.nav}>
            <MdxRoutes>
                {(routes, _) => (
                    <ul sx={styles.ul}>
                        {routes
                            .filter(
                                route =>
                                    route.navigationLabel && route.navigationLabel !== DUMMY
                            )
                            .map((route, index) => (
                                <li sx={styles.li} key={index}>
                                    <Link
                                        sx={styles.link}
                                        activeClassName="active-link"
                                        to={route.slug}
                                    >
                                        {route.navigationLabel}
                                    </Link>
                                </li>
                            ))}
                        <li sx={styles.li}><ThemeSwitch /></li>
                    </ul>
                )}
            </MdxRoutes>
        </nav>
    </Fragment>
)
