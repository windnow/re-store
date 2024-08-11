import './error-indicator.css';

const ErrorIndicator = ( {error, errorInfo} ) => {
    return (
      <div className='error-indicator'>
        <h2>ERROR!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && this.state.error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
      </div>
    )
}
export default ErrorIndicator;
