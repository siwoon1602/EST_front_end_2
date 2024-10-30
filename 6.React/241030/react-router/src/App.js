import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Home page </Link>
      <br></br>
      <Link to="/products/1"> 1번 상품 </Link>
      <br></br>
      <Link to="/products/2"> 2번 상품 </Link>
      <br></br>
      <Link to="/products/3"> 3번 상품 </Link>
      <br></br>
      <Link to="/products/3/notice"> 3번 상품의 공지사항 </Link>
      <br></br>
      <Link to="/cart"> Cart Page </Link>
      <br></br>
      <Link to="/users">User Page</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />}>
          <Route index element={<Basic />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Cart() {
  return <h1>Cart</h1>;
}

function Users() {
  return (
    <>
      <h1>Users</h1>
      <Outlet />
    </>
  );
}
function Basic() {
  return <h1>Basic</h1>;
}
function Coupon() {
  return <h1>Coupon</h1>;
}
function Question() {
  return <h1>Question</h1>;
}
function Notice() {
  return <h1>Notice</h1>;
}

function ProductDetailNoticePage() {
  return <h1> product</h1>;
}
function ProductDetailPage() {
  return <h1> product</h1>;
}
export default App;
