import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
    className="page-header"
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {/* {siteTitle} */}
      <svg
        style={{ height: "2em" }}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 196.67 139.33"
      >
        <title>E. Homestead</title>
        <path
          style={{ fill: "#fff" }}
          d="M196.51,25.92c-1.75,2.71-5.89,4.62-9.87,4.62-5.25,0-3.98-2.86-3.98-6.05h.8c1.27,0,2.07-.32,2.23-1.59-.8-2.55-1.59-4.93-3.82-6.84-2.23-1.75-7.16-2.07-10.67-6.04-6.69-1.11-13.69-2.38-22.28-2.38-4.62,0-10.5,.16-15.12,.8-3.34,.48-6.68,1.75-9.87,2.23-11.14,1.6-30.88,2.4-33.74,9.25,2.07,2.55,7.8,3.02,12.73,3.02,5.09,0,10.98-1.44,15.91-1.44,3.66,0,6.84,.79,8.91,3.81-.32,3.02-3.18,3.34-6.21,3.82-6.05,3.03-15.6,2.08-24.35,3.04-7.8,.96-12.25,4.14-19.1,4.63-.32,0-.48-.16-.8-.16-1.43,0-.95,2.87-4.61,2.87-.64,0-1.11-.16-2.23-.48-1.91,1.43-3.5,3.34-6.2,3.82-2.39,.48-2.86,2.23-5.57,2.39-.48,0-.96-.16-1.43-.16-1.27,0,0,2.55-1.27,2.55-.16,0-.48,0-.8-.16-.64,0-7,2.87-7,4.62-8.12,3.51-18.93,13.7-18.61,13.7-5.25,0-4.29,6.21-8.43,6.21-.32,0-.8-.16-1.11-.16-.32,3.98-4.61,3.98-4.61,8.44v.8c-5.25,3.98-7.79,12.58-7.79,23.08,0,3.66,1.44,12.57,4.78,15.91,9.55,9.86,25.95,13.35,43.3,13.35,3.66,0,7.32,0,10.98-.48,3.5-.48,6.05-2.39,10.34-2.23h1.11c-4.29,5.73-14.32,5.58-21.48,8.45h-3.5c-3.02,0-5.89,.16-8.75,.17-10.66,0-28.81-4.44-28.97-8.58-1.43-1.59-4.62-1.59-6.05-3.02C4.47,122.48,0,113.57,0,105.45c0-7.96,2.22-13.53,3.17-20.53,2.54-3.34,4.61-7.16,6.84-10.67,1.91-.96,3.02-2.71,3.82-4.62,7.8-4.94,14.48-13.7,23.7-19.11,.48-.8,5.57-3.82,5.57-3.82,2.55-.64,2.7-2.71,5.09-3.03,2.55,0,4.46-2.23,6.2-3.82,1.59-1.43,10.18-3.83,10.66-3.83,.8-.16,.48-.64,.8-.8,5.89-2.39,11.93-5.26,18.3-6.85-.48-3.02-3.03-4.77-3.03-8.27,0-15.12,47.58-18.17,58.08-19.29,1.43-.16,3.98-.64,5.25-.8,1.27,0,2.55,.79,3.82,.79,.48,0,1.27-.8,3.18-.8h8.28c4.14,1.58,9.55,.95,13.05,2.38,1.91,.79,9.07,3.02,13.69,5.24,3.5,4.93,10.19,8.91,10.19,16.39,0,.64,0,1.27-.16,1.91Z"
        />
        <path
          style={{ fill: "#fff" }}
          d="M126.04,94.56c.96,3.66,3.82,5.41,3.83,10.02-2.86,6.21-12.09,3.03-14.48-1.58-1.28-7.32,4.45-10.83,10.66-8.44Z"
        />
      </svg>
    </Link>
    {/* <img
      alt="Gatsby logo"
      height={20}
      style={{ margin: 0 }}
      src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"
    /> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
