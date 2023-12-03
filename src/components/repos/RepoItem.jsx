import React from 'react'
import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils, faUtensils } from 'react-icons/fa'
import { ReactTinyLink } from "react-tiny-link";
import ScrollToTop from "react-scroll-to-top";

function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo

  return (
    <div className="mb-5 rounded-md card bg-grey-800 hover:bg-gray-900 mr-5">
         <div className="card-body bg-gray-100 rounded-lg">
        <h3 className="mb-2 text-xl font-semibold dark:text-black">
          {name}
        </h3>
        <p className="mb-3 dark:text-black">{description}</p>
        <div className="mr badge badge-info badge-lg">
          <FaEye className="mr-2" /> {watchers_count}
        </div>

        <div className="mr badge badge-success badge-lg">
          <FaStar className="mr-2" /> {stargazers_count}
        </div>

        <div className="mr badge badge-error badge-lg">
          <FaInfo className="mr-2" /> {open_issues}
        </div>

        <div className="mr badge badge-warning badge-lg bg">
          <FaUtensils className="mr-2" /> {forks}
        </div>
       

      <ScrollToTop smooth />
    </div>
    </div>
  );
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}
export default RepoItem
