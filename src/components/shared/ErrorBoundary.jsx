import { Component } from 'react';

/**
 * Catches render-time errors so a single broken section (or a failed lazy
 * modal chunk) never takes down the whole landing page.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-screen items-center justify-center bg-paper p-6 text-center">
            <div>
              <h1 className="text-2xl font-semibold text-ink">Something went wrong.</h1>
              <p className="mt-3 text-muted">
                Please refresh the page or contact us at{' '}
                <a className="text-accent" href="mailto:hello@shlomo.us">
                  hello@shlomo.us
                </a>
                .
              </p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
