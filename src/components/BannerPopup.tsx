import {  FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateBanner } from "../redux/features/homeSlice";

const BannerPopup: FC = () => {
  const show = useAppSelector((state) => state.homeReducer.isBannerVisible);
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(0);

  function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";
    
    // Loop through each character of the first string.
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      
      // Compare with the corresponding character in other strings.
      for (let j = 1; j < strs.length; j++) {
        // If out of bounds or a mismatch is found, return the prefix so far.
        if (i >= strs[j].length || strs[j][i] !== char) {
          return strs[0].substring(0, i);
        }
      }
    }
    
    return strs[0];
  }
  
  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toDateString();
    longestCommonPrefix(["a", "b"]);

    if (lastVisit != today){
      dispatch(updateBanner(true));
      localStorage.setItem("lastVisit", today);
    }
    
  }, [dispatch]);// effect sẽ chạy lại nếu dispatch thay đổi.

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="banner"
          className="w-[50vw] min-w-[300px] m-auto"
        /> {seconds}
        <button
          onClick={() => {
            dispatch(updateBanner(false));
          }}
          className="absolute top-0 right-0 m-2 bg-white rounded-full p-2"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default BannerPopup;
