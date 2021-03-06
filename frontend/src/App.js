import Footer from './Components/Footer'
import Header from './Components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/loginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Container className='py-3'>
					<Routes>
						<Route path='/search/:keyword' element={<HomeScreen />}></Route>
						<Route path='/page/:pageNumber' element={<HomeScreen />}></Route>
						<Route
							path='search/:keyword/page/:pageNumber'
							element={<HomeScreen />}
						></Route>
						<Route path='/' element={<HomeScreen />}></Route>
						<Route path='/login' element={<LoginScreen />}></Route>
						<Route path='/shipping' element={<ShippingScreen />}></Route>
						<Route path='/profile' element={<ProfileScreen />}></Route>
						<Route path='/register' element={<RegisterScreen />}></Route>
						<Route path='/product/:id' element={<ProductScreen />}></Route>
						<Route path='/cart/:id' element={<CartScreen />}></Route>
						<Route path='/cart' element={<CartScreen />}></Route>
						<Route path='/payment' element={<PaymentScreen />}></Route>
						<Route path='/placeorder' element={<PlaceOrderScreen />}></Route>
						<Route path='/order/:id' element={<OrderScreen />}></Route>
						<Route path='/admin/userlist' element={<UserListScreen />}></Route>
						<Route
							path='/admin/user/:id/edit'
							element={<UserEditScreen />}
						></Route>
						<Route
							path='/admin/productlist'
							element={<ProductListScreen />}
						></Route>
						<Route
							path='/admin/productlist/:pageNumber'
							element={<ProductListScreen />}
						></Route>
						<Route
							path='/admin/product/:id/edit'
							element={<ProductEditScreen />}
						></Route>
						<Route
							path='/admin/orderlist'
							element={<OrderListScreen />}
						></Route>
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
