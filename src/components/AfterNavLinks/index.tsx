import { ROUTE } from '@/libs/enums'
import { Link } from '@payloadcms/ui'
import React from 'react'

const sidebarGroups = [
  {
    label: 'Collections',
    links: [
      { label: 'Media', href: '/admin/collections/media?limit=10' },
      { label: 'Posts', href: '/admin/collections/posts?limit=10' },
      { label: 'Users', href: '/admin/collections/users?limit=10' },
    ],
  },
  {
    label: 'Globals',
    links: [
      { label: 'Header', href: '/admin/globals/header' },
      { label: 'Footer', href: '/admin/globals/footer' },
    ],
  },
  {
    label: 'Custom View',
    links: [
      { label: 'Race List', href: `/admin/${ROUTE.RACE_LIST}` },
      { label: 'Prediction Targets', href: `/admin/${ROUTE.PREDICTION_TARGET}` },
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
