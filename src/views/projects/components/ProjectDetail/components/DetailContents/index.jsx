import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function DetailContents({ date, categories, skills , technologies, url, description }){
    return (
        <React.Fragment>

            <Typography gutterBottom display={"block"} variant="subtitle1">
                {`Date: ${date}`}
            </Typography>

            <Typography gutterBottom display={"block"} variant="subtitle1">
                {`Categories: ${categories.join(', ')}`}
            </Typography>

            {skills.length > 0 &&
                <Typography gutterBottom display={"block"} variant="subtitle1">
                    {`Skills: ${skills.join(', ')}`}
                </Typography>
            }

            {technologies.length > 0 &&
                <Typography gutterBottom display={"block"} variant="subtitle1">
                    {`Technologies: ${technologies.join(', ')}`}
                </Typography>
            }

            <Typography gutterBottom display={"block"} variant="subtitle1">
                {`Project URL: ${url}`}
            </Typography>

            <Typography gutterBottom display={"block"} variant="body1">
                {description}
            </Typography>

        </React.Fragment>
    );
}

DetailContents.propTypes = {
    date: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    description: PropTypes.string,
};

DetailContents.defaultProps = {
    date: ``,
    categories: [],
    skills: [],
    technologies: [],
    url:``,
    description:``,
};

export default DetailContents;
