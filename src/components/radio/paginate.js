import React from "react";
import PropTypes from "prop-types";
import {Link } from "gatsby";


const Paginate = ({ pageContext }) => {

    const { previousPagePath, nextPagePath, humanPageNumber } = pageContext;

    return (

        <ul class="pagination justify-content-center">
        {previousPagePath && (
        <li class="page-item">
          <Link class="page-link" to={previousPagePath} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Précédent</span>
          </Link>
        </li>
        )}
        <li class="page-item">
          <a class="page-link" href="#">{humanPageNumber}</a>
        </li>
        {nextPagePath && (
        <li class="page-item">
          <Link class="page-link" to={nextPagePath} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Suivant</span>
          </Link>
        </li>
        )}
       </ul>


    )
}

Paginate.protoTypes = {
    pageContext: PropTypes.object.isRequired,
};

export default Paginate;