import '../styles/globals.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux' //for เรียกใช้ store. This provider จะหุ้ม component ทำให้ component สามารถเข้าถึง store ได้ โดยให้ tag provider ครอบ tag component ไว้
import withRedux from 'next-redux-wrapper'
import store from '../src/redux/store' //import to pass store as prop to component

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}> {/* provider สาง prop ชื่อ store เข้าไป ซึ่งต้อง import จาก file store ที่เราเขียน*/}
        <Component {...pageProps} />
      </Provider>
    )
}

const makeStore = () => store //สร้าง store โดย store มี blue print แบบที่เราเขียน
export default withRedux(makeStore)(MyApp) //export myapp โดยแนบ store ไปกับ app ด้วย
