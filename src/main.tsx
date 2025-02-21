import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//React sẽ gắn ứng dụng của bạn vào một phần tử HTML (<div id="root"></div>) trong file index.html.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//<React.StrictMode> công cụ giúp phát hiện lỗi và cảnh báo trong chế độ phát triển (development mode).

//BrowserRouter: quản lý điều hướng (routing) trong ứng dụng React bằng cách sử dụng history API của trình duyệt.(Route, Link, Switch, Redirect, Prompt) => k cần tải lại trang. chỉ cần hiển thị component tương ứng với url

//<App /> là component gốc (root component) của ứng dụng React.
