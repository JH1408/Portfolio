import React from "react";
import Illustration from "./Illustration";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const ErrorPage = () => {
  return (
    <div className="h-lvh w-lvw text-darkblue">
      <Illustration />
      <h1 className="text-[2rem] font-medium mt-[50px] mx-auto">
        Oops! Something went wrong.
      </h1>
      <p className="font-light my-[20px]">
        Please refresh the page or try again later.
      </p>
    </div>
  );
};
