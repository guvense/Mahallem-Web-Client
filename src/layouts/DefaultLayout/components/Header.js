import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
    return (
        <div> Header </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

Header.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header)