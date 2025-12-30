import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {paths.map((path, index) => {
                    const isLast = index === paths.length - 1;
                    return (
                        <li
                            key={index}
                            className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                            aria-current={isLast ? 'page' : undefined}
                        >
                            {!isLast ? (
                                <Link to={path.url} className="text-decoration-none text-muted">{path.name}</Link>
                            ) : (
                                <span className='fw-bold' style={{ color: '#0f2e26' }}>{path.name}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
