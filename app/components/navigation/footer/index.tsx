import { Link } from '@remix-run/react'

const Footer = () => {
  return (
    <footer className="rounded-2xl shadow py-2 px-4 bg-gray-900 bg-opacity-30 mt-6">
      <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="text-2xl font-bold mb-4 sm:mb-0">
            Cine<span className="text-primary">chill</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-4 pt-1.5 text-sm sm:mb-0">
              <li>
                <Link to="/pages/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pages/contact" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/pages/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
          </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-center">
        © 2022 <a href="https://icone.com/" className="hover:underline">Icone</a>. All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer