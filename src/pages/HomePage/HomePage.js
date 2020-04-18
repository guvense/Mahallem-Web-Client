import '../Pages.scss';
import './HomePage.scss';

import React from 'react';
import { connect } from 'react-redux';

const HomePage = ({}) => {
    return <div>Home Page</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
HomePage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);