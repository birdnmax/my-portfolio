import React from 'react';
import {Switch, Route} from 'react-router-dom';

import home from './Views/home/home';

export default (
    <Switch>
        <Route path='/' component={home}/>
    </Switch>
)