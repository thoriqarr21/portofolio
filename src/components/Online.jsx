import { useState, useEffect } from 'react';
import { WifiOff, Wifi, CheckCircle } from 'lucide-react';
import App from '../App';

// Custom Hook untuk deteksi status online
function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

// Komponen Alert ketika kembali online
function OnlineAlert({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Alert hilang setelah 3 detik

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <div>
          <p className="font-semibold">Kembali Online!</p>
          <p className="text-sm text-green-100">Koneksi internet tersambung</p>
        </div>
      </div>
    </div>
  );
}

// Komponen Online - untuk cek status
function Online() {
  const isOnline = useOnline();
  
  return (
    <h1>{isOnline ? "Online" : "Offline"}</h1>
  );
}

// Komponen MainApp - ini adalah file <App/> Anda
function MainApp({ showAlert, onAlertClose }) {
  return (
    <>
      {showAlert && <OnlineAlert onClose={onAlertClose} />}
      <App />
    </>
  );
}

// Komponen Offline Screen
function OfflineScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
        <WifiOff className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Offline
        </h1>
        
        <div className="mt-6 p-4 rounded-lg bg-indigo-50">
          <p className="text-sm text-indigo-700">
            ✗ Tidak ada koneksi internet
          </p>
        </div>

        <p className="text-gray-600 text-sm mt-4">
          Silakan periksa koneksi WiFi atau data seluler Anda.
        </p>

        <div className="pt-6">
          <div className="animate-pulse flex justify-center gap-2">
            <div className="h-2 w-2 bg-indigo-400 rounded-full"></div>
            <div className="h-2 w-2 bg-indigo-400 rounded-full"></div>
            <div className="h-2 w-2 bg-indigo-400 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Menunggu koneksi...</p>
        </div>
      </div>
    </div>
  );
}

// Root Component - Router utama
export default function Onlines() {
  const isOnline = useOnline();
  const [showOnlineAlert, setShowOnlineAlert] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWasOffline(true);
    } else if (wasOffline && isOnline) {
      // Jika sebelumnya offline dan sekarang online, tampilkan alert
      setShowOnlineAlert(true);
      setWasOffline(false);
    }
  }, [isOnline, wasOffline]);

  const handleAlertClose = () => {
    setShowOnlineAlert(false);
  };

  return isOnline ? (
    <MainApp showAlert={showOnlineAlert} onAlertClose={handleAlertClose} />
  ) : (
    <OfflineScreen />
  );
}

