import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //const abortCont = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    // simulating loading with settimeout
    setTimeout(() => {
      axios
        .get(url, {
          cancelToken: source.token,
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
      
       
          if (axios.isCancel(err)) {
              console.log(err);
          }
          else {
            setError(err.message);
            setIsPending(false);
          }
        });

      // fetch(url, { signal: abortCont.signal })
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw Error("Can not fetch data from server !!!");
      //     }

      //     return res.json();
      //   })
      //   .then((data) => {

      //     console.log(data);
      //     setData(data);
      //     setIsPending(false);
      //     setError(null);
      //   })
      //   .catch((err) => {
      //     if (err.name === "AbortError") {
      //       console.log("fetch aborted");
      //     } else {
      //       setError(err.message);
      //       setIsPending(false);
      //     }
      //   });
    }, 500);

    return () => source.cancel('operation cancaled');
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
