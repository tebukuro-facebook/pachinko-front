import LoadingOverlay from 'react-loading-overlay';

const Loading = ({isLoading, children}:{isLoading:boolean, children: JSX.Element} ) =>
  (
    <LoadingOverlay
      active={isLoading}
      spinner
      text='now loading...'
      >
        {children}
    </LoadingOverlay>
  )


export default Loading
