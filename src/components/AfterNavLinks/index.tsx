import { ROUTE_NAVIGATE } from '@/libs/enums'
import { Link } from '@payloadcms/ui'
import React from 'react'

const sidebarGroups = [
  {
    label: 'Collections',
    links: [
      { label: 'Media', href: ROUTE_NAVIGATE.MEDIA },
      { label: 'Posts', href: ROUTE_NAVIGATE.POSTS },
      { label: 'Users', href: ROUTE_NAVIGATE.USERS },
    ],
  },
  {
    label: 'Globals',
    links: [
      { label: 'Header', href: ROUTE_NAVIGATE.HEADER },
      { label: 'Footer', href: ROUTE_NAVIGATE.FOOTER },
    ],
  },
  {
    label: 'Custom View',
    links: [
      { label: 'Race List', href: ROUTE_NAVIGATE.RACE_LIST },
      { label: 'Prediction Targets', href: ROUTE_NAVIGATE.PREDICTION_TARGET },
      { label: 'Prediction Targets for Admin', href: ROUTE_NAVIGATE.PREDICTION_TARGET_ADMIN },
      { label: 'Prediction Detail', href: ROUTE_NAVIGATE.PREDICTION_DETAIL },
    ],
  },
]

const AfterNavLinksComponent = () => {
  return (
    <div>
      {sidebarGroups.map(({ label, links }) => (
        <div key={label} className="nav-group">
          <button className="nav-group__toggle">
            <div className="nav-group__label">{label}</div>
          </button>
          <div>
            <div className="nav-group__content">
              {links.map((link) => (
                <Link key={link.label} className="nav__link" href={link.href}>
                  <span className="nav__link-label">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AfterNavLinksComponent
