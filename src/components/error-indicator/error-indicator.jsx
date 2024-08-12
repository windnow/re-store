import './error-indicator.css';

const ErrorIndicator = ( {error, errorInfo} ) => {
    return (
      <div className='error-indicator'>
          <details>
            <summary>{error && error.toString() }</summary>
            <pre>
              {errorInfo && errorInfo}
            </pre>
          </details>
      </div>
    )
}
export default ErrorIndicator;
