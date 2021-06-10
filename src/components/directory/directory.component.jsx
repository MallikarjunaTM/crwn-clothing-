import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.component.style.scss';
import { connect } from 'react-redux';
import { directorySelectorSection } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory =({sections})=>
   
        (<div className='directory-menu'>
            {sections.map(
              ({id, ...otherSectionParams})=>
              <MenuItem key={id} {...otherSectionParams} />)}
            </div>);
    

const mapStateToProps = createStructuredSelector({
  sections:directorySelectorSection
})

export default connect(mapStateToProps)(Directory);