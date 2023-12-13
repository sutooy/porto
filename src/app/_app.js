
function MyApp({ Component, PageProps }) {
    return (
        <Component{...PageProps} />
    )
}

export default MyApp


// import { YourContextProvider } from '../path/to/createContext';

// function MyApp({ Component, pageProps }) {
//   return (
//     <YourContextProvider>
//       <Component {...pageProps} />
//     </YourContextProvider>
//   );
// }

// export default MyApp;