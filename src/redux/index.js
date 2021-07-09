import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const HOC = (ChildHOC) => {
    return class ApplicationHOC extends Component {
        render() {
            return (
                <Provider store={store}>
                    <ChildHOC
                        {...this.props} />
                </Provider>
            );
        }
    }
}

export default HOC;