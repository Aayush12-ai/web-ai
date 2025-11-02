import React from 'react';

type State = {
  hasError: boolean;
  error?: Error | null;
  info?: React.ErrorInfo | null;
};

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log errors to an external service here
    // console.error('Captured error in ErrorBoundary', error, info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
            <p className="mb-4">An unexpected error occurred while rendering the app. The error details are shown below — you can share them with me and I'll fix it.</p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-auto text-sm">
              <strong>Error:</strong>
              {this.state.error ? ` ${this.state.error.message}\n` : ' Unknown error\n'}
              {this.state.info?.componentStack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
