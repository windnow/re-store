import React from 'react';
import ErrorIndicator from '../error-indicator'
export default class ErrorBoundry extends React.Component {

    state = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if(this.state.hasError){
            const { error, errorInfo } = this.state;
            return <ErrorIndicator error={error} errorInfo={errorInfo.componentStack} />
        }
        return this.props.children;
    }
}
