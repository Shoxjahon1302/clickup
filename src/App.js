import { useEffect, useState } from 'react';
import CallBack from './components/CallBack';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            className="w-60 object-cover animate-bounce"
            src="https://quomodosoft.com/html/bisy/assets/images/logo.png"
            alt=""
          />
        </div>
      ) : (
        <CallBack />
      )}
    </>
  );
}

export default App;
